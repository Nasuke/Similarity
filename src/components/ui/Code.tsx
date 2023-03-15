'use client'


import React, { FC, useEffect, useState } from 'react'
// Language -> "git" | "go" | "graphql ...."
import Highlight, { defaultProps, type Language } from 'prism-react-renderer'
import darkTheme from 'prism-react-renderer/themes/nightOwl'
import lightTheme from 'prism-react-renderer/themes/nightOwlLight'
import { useTheme } from 'next-themes';

interface CodeProps {
    code: string,
    show: boolean,
    language: Language,
    animated?: boolean,
    animationDelay?:number
}

const Code: FC<CodeProps> = ({
    code,
    show,
    language,
    animated,
    animationDelay
}) => {
    // theme别名
    const { theme:applicationTheme } = useTheme()
    // 创建state
    const [text, setText] = useState<string>(animated ? '' : code)
    const codeLen = code.length

    // 副作用
    useEffect(() => {
        if(show && animated){
            let i = 0
            setTimeout(() => {
                const intervalId = setInterval(() => {
                    setText(code.slice(0,i))
                    i++
                    if(i > codeLen){
                        clearInterval(intervalId)
                    }
                }, 15)
                // 清除最后一次更新
                return () => clearInterval(intervalId)
            }, animationDelay || 150);
        }
    }, [code, show, animated, animationDelay])

    // 每次渲染都获取代码行数
    const lines = text.split(/\r\n|\r|\n/).length    
    // 确认theme
    const theme = applicationTheme === 'light' ? lightTheme : darkTheme
  return (
    <Highlight {...defaultProps} code={text} language={language} theme={theme}>
      {({ className, tokens, getLineProps, getTokenProps }) => {
        return ( 
                <pre
                  className={
                    className +
                    'transition-all w-fit bg-transparent duration-100 py-0 no-scrollbar'
                  }
                  style={{
                    maxHeight: show ? lines * 24 : 0,
                    opacity: show ? 1 : 0,
                  }}>
                  {tokens.map((line, i) => {
                    // eslint-disable-next-line no-unused-vars
                    const { key, ...rest } = getLineProps({ line, key: i })
                    return (
                      <div key={`line-${i}`} style={{ position: 'relative' }} {...rest}>
                        {line.map((token, index) => {
                          // eslint-disable-next-line no-unused-vars
                          const { key, ...props } = getTokenProps({ token, i })
                          return <span key={index} {...props} />
                        })}
                      </div>
                    )
                  })}
                </pre>
        )
      }}
    </Highlight>
  )
}

export default Code