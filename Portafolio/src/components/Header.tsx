import { useState, useEffect } from "react"
import { FaX, FaBars } from "react-icons/fa6"
import type { JSX } from "react"
import { navLinks } from "../utils/navlinks"
import MobileMenu from "./MobileMenu"

type HeaderProps = {
    activeHref?: string | null
}

const Header = ({ activeHref }: HeaderProps): JSX.Element => {

    const [activeTabBar, setActiveTabBar] = useState<string>('#home')

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    useEffect(() => {
        if (activeHref) setActiveTabBar(activeHref)
    }, [activeHref])

    return (
        <header className="fixed w-full h-[75px] z-10 flex justify-between px-10 items-center bg-primary-main">
            <div className="w-auto h-auto text-center px-3 py-1 border-2 border-solid border-third-main rounded-sm text-third-main">
                <p className="text-3xl">
                    <a
                        aria-label="Home"
                        onClick={() => setActiveTabBar('#home')}
                        href="#home"
                    >
                        L
                    </a>
                </p>
            </div>
            <nav className="hidden lg:flex bg-primary-main opacity[0.9]">
                <ul className="flex justify-between gap-8 text-third-main text-xl font-bold">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                aria-label={link.name}
                                onClick={() => setActiveTabBar(link.href)}
                                className={` hover:text-paper-dark ${activeTabBar === link.href ? 'activeLink' : 'noActiveLink'}`}
                                href={link.href}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <button
                aria-label="Toggle menu"
                className="lg:hidden"
                onClick={() => isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)}
            >
                {isMenuOpen ? <FaX size={45} className="fill-third-main" /> : <FaBars size={45} className="fill-third-main" />}
            </button>
            {isMenuOpen && <MobileMenu closeMenu={closeMenu} />}
        </header>
    )
}

export default Header