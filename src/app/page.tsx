import React, { memo } from 'react';
import type { FC, ReactNode } from "react"
import Paragraph from '@/components/ui/Paragraph';
import LargeHeading from '@/components/ui/LargeHeading';

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = memo((props) => {
  const { children } = props
  return (
    <div className="">
      <div className='text-3xl font-bold underline'>
        {/* <Paragraph size="default">some text</Paragraph> */}
        {/* <LargeHeading size="sm">Sheldon</LargeHeading> */}
      </div>
    </div>
  )
})



export default Home

Home.displayName = "Home"  //方便之后调试