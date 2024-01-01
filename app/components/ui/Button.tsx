import React from 'react'

interface I_Button {
    children: React.ReactNode;
}

function Button({ children }: I_Button) {
    return (
        <button
            className='hover:bg-c300 transition-colors bg-c400 p-4 rounded-full text-c950 font-bold text-14'>
            {children}
        </button>
    )
}

export default Button