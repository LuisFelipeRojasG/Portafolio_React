import { TiThMenu } from "react-icons/ti"
import type { JSX } from "react"


const Header = (): JSX.Element => {
    return (
        <header className="fixed w-full h-[75px] z-10 flex justify-between px-10 items-center bg-primary-main">
            <div className="w-auto h-auto text-center px-3 py-1 border-2 border-solid border-third-main rounded-sm text-third-main">
                <p className="text-3xl">
                    L
                </p>
            </div>
            <nav className="hidden lg:flex bg-primary-main opacity[0.9]">
                <ul className="flex justify-between gap-8 text-third-main text-xl font-bold">
                    <li><a href='/main'>About</a></li>
                    <li><a href='/line-education'>Education</a></li>
                    <li><a href='/line-certifications'>Certifications</a></li>
                    <li><a href='/line-stack'>Stack</a></li>
                    <li><a href='/line-projects'>Projects</a></li>
                    <li><a href='/line-contact'>Contact</a></li>
                </ul>
            </nav>
            <button className="lg:hidden">
                <TiThMenu size={45} className="fill-third-main" />
            </button>
        </header>
    )
}

export default Header