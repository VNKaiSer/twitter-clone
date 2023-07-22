import React, { useCallback } from 'react';
import { Input, Modal } from '@/components';
import useRegisterModal from '@/hooks/useRegisterModal';
import useLoginModal from '@/hooks/useLoginModal';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react'


const RegisterModal = () => {
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()

    const [email, setEmail] = React.useState('')
    const [name, setName] = React.useState('')
    const [username, setUserName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)

    const onSubmit = useCallback(async () => {

        try {
            setIsLoading(true)

            await axios.post('/api/register', {
                email,
                password,
                username,
                name
            })

            signIn('credentials', {
                email,
                password,
            })

            toast.success('Account created successfully')

            registerModal.onClose();
        } catch (error) {
            toast.error('Something went wrong')
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }, [registerModal, email, password, username, name])

    const onToggle = useCallback(() => {
        registerModal.onClose();
        loginModal.onOpen();
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
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isLoading}
            />

            <Input
                placeholder='Usename'
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                disabled={isLoading}
            />
            <Input
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                type='password'
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
            >Alredy have an account?
                <span
                    onClick={onToggle}
                    className="
            text-white 
            cursor-pointer 
            hover:underline
          "
                > Create an account</span>
            </p>
        </div>
    )
    return (
        <Modal
            disabled={isLoading}
            title="Create account"
            body={bodyContent}
            onClose={registerModal.onClose}
            onSubmit={onSubmit}
            isOpen={registerModal.isOpen}
            actionLabel='Sign up'
            footer={footer}

        />
    );
}

export default RegisterModal;