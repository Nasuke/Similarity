import React, { FC } from 'react'

import type { Metadata } from 'next';
import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';
import Documentation from '@/components/Documentation';

// 滚动条样式
import 'simplebar-react/dist/simplebar.min.css'

interface pageProps {}

export const metaData: Metadata = {
    title: 'Similarity API | Documentation',
    description: 'Free & open-source text similarity API',
}

const page: FC<pageProps> = ({ }) => {
    return (
        <div className="container max-w-7xl mx-auto mt-12">
            <div className="flex flex-col items-center gap-6">
                <LargeHeading>Making a request</LargeHeading>
                <Paragraph>api/v1/similarity</Paragraph>

                <Documentation></Documentation>
            </div>
        </div>
    )
}

export default page