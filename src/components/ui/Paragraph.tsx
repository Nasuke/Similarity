import React, { forwardRef, HTMLAttributes, memo } from 'react';
import type { FC, ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from '@/lib/utils';


const IPropsVariants = cva(
    'max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center',
    {
        variants: {
            size: {
                default: 'text-base sm:text-lg',
                sm: 'text-sm sm:text-base text-cyan-500 '
            }
        },
        defaultVariants: {
            size: 'default'
        }
    }
)

interface IProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof IPropsVariants> {}

const Paragraph = forwardRef<HTMLParagraphElement, IProps>(
    ({ className, size, children, ...props }, ref) => {
        return (
            <p
                {...props}
                className={cn(IPropsVariants({size, className}))}
            >{children} </p>
        )
    }
)

export default Paragraph

Paragraph.displayName = "Paragraph"  //方便之后调试