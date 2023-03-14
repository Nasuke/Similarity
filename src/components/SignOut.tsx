'use client'

import { signOut } from 'next-auth/react'
import React, { FC, useState } from 'react'
import {Button} from './ui/Button'
import { toast } from './ui/Toast';

interface SignOutProps {

}

const SignOut: FC<SignOutProps> = ({ }) => {

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const signUserOut = async () => {
    try {
      setIsLoading(true)
      await signOut()
    } catch (error) {
      toast({
        title: 'Error signing out',
        message: 'Please try again later.',
        type: 'error',
      })
    }
  }

  return (
    <Button isLoading={isLoading} onClick={signUserOut}>Sign Out</Button>
  )
}

export default SignOut