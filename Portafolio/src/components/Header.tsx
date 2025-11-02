import { TiThMenu } from "react-icons/ti";

function Header() {
    return (
        <header className="grid-area-header fixed z-10 flex justify-between px-10 items-center w-screen h-[75px] bg-primary-main">
            <div className="w-auto h-auto text-center px-3 py-1 border-2 border-solid border-third-main rounded-sm text-third-main">
                <p className="text-3xl">
                    L
                </p>
            </div>
            <nav className="hidden md:flex bg-primary-main opacity[0.9]">
                <ul className="flex justify-between gap-8 text-third-main text-xl font-bold">
                    <li><a className="" id="about" href="#main">About</a></li>
                    <li><a className="" id="education" href="#line-education">Education</a></li>
                    <li><a className="" id="certifications" href="#line-certifications">Certifications</a></li>
                    <li><a className="" id="stack" href="#line-stack">Stack</a></li>
                    <li><a className="" id="projects" href="#line-projects">Projects</a></li>
                    <li><a className="" id="contact" href="#line-contact">Contact</a></li>
                </ul>
            </nav>
            <div className="md:hidden">
                <TiThMenu size={45} className="fill-third-main" />
            </div>
        </header>
    )
}

export default Header