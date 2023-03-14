'use client'

import { signIn } from 'next-auth/react'
import React, { FC, useState } from 'react'
import {Button} from './ui/Button'
import { toast } from './ui/Toast';

interface SignInProps {

}

const SignIn: FC<SignInProps> = ({ }) => {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const signWithGoogle = async () => {
        try {
            setIsLoading(true)
            await signIn('google')
        } catch (error) {
            toast({
                title: 'Error signing in',
                message: 'Please try again later.',
                type: 'error',
              })
        }
    }

    return (
        <Button isLoading={isLoading} onClick={signWithGoogle}>Sign In</Button>
    )
}

export default SignIn