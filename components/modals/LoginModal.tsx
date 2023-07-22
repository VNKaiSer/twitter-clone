import React, { useCallback } from 'react';
import useLoginModal from '@/hooks/useModalLogin';
import Modal from '../Modal';
import Input from '../Input';
const LoginModal = () => {
    const loginModal = useLoginModal()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true)

            //TODO: Add login logic here

            loginModal.onClose();
        } catch (error) {
            console.log(error)
        }
    }, [loginModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
            />

            <Input
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
            />
        </div>
    )
    return (
        <Modal
            disabled={isLoading}
            title="Login"
            body={bodyContent}
            onClose={loginModal.onClose}
            onSubmit={onSubmit}
            isOpen={loginModal.isOpen}
            actionLabel='Sign in'

        />
    );
}

export default LoginModal;