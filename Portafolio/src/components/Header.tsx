import { useState, useEffect } from "react"
import { TiThMenu } from "react-icons/ti"
import type { JSX } from "react"
import { navLinks } from "../utils/navlinks"

type HeaderProps = {
    activeHref?: string | null
}

const Header = ({ activeHref }: HeaderProps): JSX.Element => {

    const [activeTabBar, setActiveTabBar] = useState('#home');

    useEffect(() => {
        if (activeHref) setActiveTabBar(activeHref)
    }, [activeHref])

    return (
        <header className="fixed w-full h-[75px] z-10 flex justify-between px-10 items-center bg-primary-main">
            <div className="w-auto h-auto text-center px-3 py-1 border-2 border-solid border-third-main rounded-sm text-third-main">
                <p className="text-3xl">
                    <a onClick={() => setActiveTabBar('#home')} href="#home">L</a>                    
                </p>
            </div>
            <nav className="hidden lg:flex bg-primary-main opacity[0.9]">
                <ul className="flex justify-between gap-8 text-third-main text-xl font-bold">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a onClick={() => setActiveTabBar(link.href)} className={` hover:text-paper-dark ${activeTabBar === link.href ? 'activeLink' : 'noActiveLink'}`} href={link.href}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <button className="lg:hidden">
                <TiThMenu size={45} className="fill-third-main" />
            </button>
        </header>
    )
}

export default Header