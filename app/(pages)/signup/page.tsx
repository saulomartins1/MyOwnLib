import React from 'react'

export const LogoSVG = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="48" height="65" viewBox="0 0 48 65" fill="none">
        <path d="M4 1H44C45.933 1 47.5 2.567 47.5 4.5V60.5C47.5 62.433 45.933 64 44 64H4C2.067 64 0.5 62.433 0.5 60.5V4.5C0.5 2.567 2.067 1 4 1Z" fill="#212E05" stroke="#D8F264" />
    </svg>
}

export const IconEmail = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path opacity="0.5" d="M10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10V11.45C20 12.4333 19.6625 13.2708 18.9875 13.9625C18.3125 14.6542 17.4833 15 16.5 15C15.9167 15 15.3667 14.875 14.85 14.625C14.3333 14.375 13.9 14.0167 13.55 13.55C13.0667 14.0333 12.5208 14.3958 11.9125 14.6375C11.3042 14.8792 10.6667 15 10 15C8.61667 15 7.4375 14.5125 6.4625 13.5375C5.4875 12.5625 5 11.3833 5 10C5 8.61667 5.4875 7.4375 6.4625 6.4625C7.4375 5.4875 8.61667 5 10 5C11.3833 5 12.5625 5.4875 13.5375 6.4625C14.5125 7.4375 15 8.61667 15 10V11.45C15 11.8833 15.1417 12.25 15.425 12.55C15.7083 12.85 16.0667 13 16.5 13C16.9333 13 17.2917 12.85 17.575 12.55C17.8583 12.25 18 11.8833 18 11.45V10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18H15V20H10ZM10 13C10.8333 13 11.5417 12.7083 12.125 12.125C12.7083 11.5417 13 10.8333 13 10C13 9.16667 12.7083 8.45833 12.125 7.875C11.5417 7.29167 10.8333 7 10 7C9.16667 7 8.45833 7.29167 7.875 7.875C7.29167 8.45833 7 9.16667 7 10C7 10.8333 7.29167 11.5417 7.875 12.125C8.45833 12.7083 9.16667 13 10 13Z" fill='currentColor' />
    </svg>
}
export const IconPassword = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="23" height="12" viewBox="0 0 23 12" fill="none">
        <path opacity="0.5" d="M6 8C5.45 8 4.97917 7.80417 4.5875 7.4125C4.19583 7.02083 4 6.55 4 6C4 5.45 4.19583 4.97917 4.5875 4.5875C4.97917 4.19583 5.45 4 6 4C6.55 4 7.02083 4.19583 7.4125 4.5875C7.80417 4.97917 8 5.45 8 6C8 6.55 7.80417 7.02083 7.4125 7.4125C7.02083 7.80417 6.55 8 6 8ZM6 12C4.33333 12 2.91667 11.4167 1.75 10.25C0.583333 9.08333 0 7.66667 0 6C0 4.33333 0.583333 2.91667 1.75 1.75C2.91667 0.583333 4.33333 0 6 0C7.11667 0 8.12917 0.275 9.0375 0.825C9.94583 1.375 10.6667 2.1 11.2 3H20L23 6L18.5 10.5L16.5 9L14.5 10.5L12.375 9H11.2C10.6667 9.9 9.94583 10.625 9.0375 11.175C8.12917 11.725 7.11667 12 6 12ZM6 10C6.93333 10 7.75417 9.71667 8.4625 9.15C9.17083 8.58333 9.64167 7.86667 9.875 7H13L14.45 8.025L16.5 6.5L18.275 7.875L20.15 6L19.15 5H9.875C9.64167 4.13333 9.17083 3.41667 8.4625 2.85C7.75417 2.28333 6.93333 2 6 2C4.9 2 3.95833 2.39167 3.175 3.175C2.39167 3.95833 2 4.9 2 6C2 7.1 2.39167 8.04167 3.175 8.825C3.95833 9.60833 4.9 10 6 10Z" fill="currentColor" />
    </svg>
}

const InputEmail = () => {
    return <div className='relative'>
        <span className='text-text_opacity absolute left-5 top-[50%] -translate-y-[50%]' >
            <IconEmail />
        </span>
        <input type='text' placeholder='your@email.com' className='pl-[60px] placeholder:text-text_opacity bg-dark3 px-9 py-5 rounded-full outline-none borderCard' autoComplete='off' />
    </div>
}
const InputPassword = () => {
    return <div className='relative'>
        <span className='text-text_opacity absolute left-5 top-[50%] -translate-y-[50%]' >
            <IconPassword />
        </span>
        <input type='password' placeholder='●●●●●●●●' className='pl-[60px] placeholder:text-text_opacity bg-dark3 px-9 py-5 rounded-full outline-none borderCard' autoComplete='off' />
    </div>
}


function SignUp() {
    return (
        <main className='h-screen flex items-center justify-center'>
            <article className='flex flex-col items-center gap-8'>
                <div className='flex flex-col items-center'>
                    <LogoSVG />
                    <h1 className='text-24 font-bold mt-5'>MyOwnLib</h1>
                    <span className='text-c100 text-14'>More than 19 free-read books</span>
                </div>
                <form className='flex flex-col items-center justify-center gap-8'>
                    <div className='flex flex-col gap-5'>
                        <InputEmail />
                        <InputPassword />
                    </div>
                    <button className='hover:bg-c300 transition-colors bg-c400 p-4 rounded-full text-c950 font-bold text-14'>Sign Up</button>
                </form>
            </article>
        </main>
    )
}

export default SignUp