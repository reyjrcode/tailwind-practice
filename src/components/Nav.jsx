import NikeLogo from '../assets/nike-logo.svg?react'
import { RxHamburgerMenu } from 'react-icons/rx';

export function Nav() {
    return <nav className=" flex justify-between">
        <a href='#'>
            <NikeLogo className="h-20 w-20" />
        </a>
        <button className='hover:bg-gray-100 focus:ring-2 ring-gray-400 p-2 rounded-lg'>
            <RxHamburgerMenu size={25} />
        </button>
    </nav>;
}