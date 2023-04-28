import React from 'react'

interface HeaderProps {
    title: string,
    bgClass: string,
    children: React.ReactNode
}

const Header = ({title,bgClass,children}:HeaderProps) => {
  return (
    <div className={bgClass}>
        <div className='text-content'>
            <h1 className='header-title'>
                {title}
            </h1>
                {children}
        </div>
    </div>
  )
}

export default Header