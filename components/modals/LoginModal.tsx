import React, { useCallback } from 'react';
import { useLoginModal } from '@/hooks';
import Input from '../Input';
import { useRegisterModal } from '@/hooks';
import Button from '../Button';
const LoginModal = () => {
    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()

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


    const onClickSignup = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
    }, [loginModal, registerModal])

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

    const footer = (
        <div>
            <p
                className='
                h-full
                lg:h-auto
                border-0 
                rounded-lg 
                shadow-lg 
                relative 
                flex 
                w-full 
                text-xl
                justify-center
              text-neutral-500 
                outline-none 
                focus:outline-none
                '
            >First time using Twitter ?
                <span
                    className='text-white ml-2 cursor-pointer hover:underline'
                //onClick={onClickSignup}
                > Create an acount</span> </p>
        </div>
    )

    return (
        <>
            {<Button label='Login' onClick={loginModal.onOpen} />}
            {/* <Modal
                disabled={isLoading}
                title="Login"
                body={bodyContent}
                onClose={loginModal.onClose}
                onSubmit={onSubmit}
                isOpen={loginModal.isOpen}
                actionLabel='Sign in'
                footer={footer}

            /> */}
        </>
    );
}

export default LoginModal;