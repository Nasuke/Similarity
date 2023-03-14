'use client'
import { FC, ReactNode } from 'react'

import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';



const Providers = ({children}: {children: ReactNode}) => {
  return (
    // enableSystem :Whether to switch between dark and light based on prefers-color-scheme
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  )
}

export default Providers