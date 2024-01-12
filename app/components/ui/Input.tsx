import { IconEmail, IconPassword } from "@/app/assets/svgIcons"

export const InputEmail = () => {
    return <div className='relative'>
        <span className='text-text_opacity absolute left-5 top-[50%] -translate-y-[50%]' >
            <IconEmail />
        </span>
        <input type='text' placeholder='your@email.com' name="email" className='pl-[60px] placeholder:text-text_opacity bg-dark3 px-9 py-5 rounded-full outline-none borderCard' autoComplete='off' />
    </div>
}

export const InputPassword = () => {
    return <div className='relative'>
        <span className='text-text_opacity absolute left-5 top-[50%] -translate-y-[50%]' >
            <IconPassword />
        </span>
        <input type='password' placeholder='●●●●●●●●' name="password" className='pl-[60px] placeholder:text-text_opacity bg-dark3 px-9 py-5 rounded-full outline-none borderCard' autoComplete='off' />
    </div>
}