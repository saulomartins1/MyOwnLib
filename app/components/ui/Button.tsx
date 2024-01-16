import React from 'react'

interface I_Button {
    children: React.ReactNode;
    type?: 'primary' | 'secondary' | 'negative';
}

function Button({ children, type }: I_Button) {
    if (type === 'secondary') {
        return <button
            className='hover:bg-dark3 transition-colors bg-dark1 border-[1px] border-borders px-4 py-[13.5px] rounded-full text-text font-bold text-14'>
            {children}
        </button>
    } else if (type === "negative") {
        return <button
            className='bg-[#fe4e3e] hover:bg-[#d13022] text-[#4a0b05] font-bold text-14 rounded-full transition-colors px-4 py-[13.5px]'>
            {children}
        </button>
    } else {
        return <button
            className='hover:bg-c300 transition-colors bg-c400 px-4 py-[13.5px] rounded-full text-c950 font-bold text-14'>
            {children}
        </button>
    }
}

export default Button