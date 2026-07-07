import type { JSX } from 'react'
import { navLinks } from '../utils/navlinks'

const MobileMenu = ({ closeMenu }: { closeMenu: () => void }): JSX.Element => {
    return (
        <div className="fixed top-18 left-0 w-full h-min bg-primary-main z-10">
            <nav className="flex flex-col justify-center items-center h-full gap-8 text-third-main text-xl font-bold">
                <ul className="flex flex-col justify-between gap-2 mb-4 text-third-main text-xl font-bold">
                    {navLinks.map((link) => (
                        <li key={link.href}  className="py-4 mb-4">
                            <a className="hover:text-paper-dark" href={link.href} onClick={closeMenu}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default MobileMenu