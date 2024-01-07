import React from 'react'

interface I_Button {
    children: React.ReactNode;
    type?: 'primary' | 'secondary';
}

function Button({ children, type }: I_Button) {
    if (type === 'secondary') {
        return <button
            className='hover:bg-[#fe4e3e] transition-colors bg-dark2 border-[1px] border-borders px-4 py-[13.5px] rounded-full text-text font-bold text-14'>
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