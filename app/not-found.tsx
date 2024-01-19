import Link from 'next/link'
import { LogoSVG } from './assets/LogoMyOwnLib'
import Button from './components/ui/Button'

export default function NotFound() {
    return (
        <div className='h-screen flex flex-col justify-center items-center gap-4'>
            <LogoSVG />
            <h2 className='text-32 font-bold'>404</h2>
            <p>Could not find requested resource</p>
            <Link href="/">
                <Button type='secondary'>Return home</Button>
            </Link>
        </div>
    )
}