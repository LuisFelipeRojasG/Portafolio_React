import type { JSX } from "react"
import mainImage from "../assets/images/LFR-transparente.webp"
import ubicationIcon from "../assets/icons/ubication_icon.svg"
import linkedinIcon from "../assets/icons/linkedin-brands.svg"
import githubIcon from "../assets/icons/github-brands.svg"

const Introduction = (): JSX.Element => {
    return (
        <section className="absolute row-start-1 row-span-1 w-full h-auto mt-60 flex items-center justify-center text-third-main">
            <aside className="w-auto h-auto flex flex-col items-center justify-between m-5 pr-20">
                <h1 className="p-6 text-center text-5xl">Hi, I'm Luis Felipe Rojas</h1>
                <p className="p-5 text-left text-3xl">
                    Frontend developer (React) building responsive things for web
                </p>
                <figure>
                    <img
                        src={ubicationIcon}
                        alt="Ubicación Medellín - Colombia"
                    />
                </figure>
                <h2>Medellín - Colombia</h2>
                <article className="flex flex-row gap-6 mt-5">
                    <a
                        href="https://www.linkedin.com/in/luis-felipe-rojas-gonzalez-69213b66/"
                    >
                        <figure className="w-12 h-12 p-2 rounded-xl">
                            <img src={linkedinIcon} alt="Linkedin" />
                        </figure>
                    </a>
                    <a href="https://github.com/LuisFelipeRojasG">
                        <figure className="w-12 h-12 p-2 rounded-xl">
                            <img src={githubIcon} alt="GitHub" />
                        </figure>
                    </a>
                </article>
            </aside>
            <figure className="w-[200px] h-[250px] left-[calc(50%-100px)] m-[40px, 0] p-2.5 border-5 border-solid border-secondary-main rounded-[10px]">
                <img
                    src={mainImage}
                    alt="Luis Felipe Rojas"
                    className="w-[170px] h-[220px] border-2 border-solid border-third-main rounded-[10px] object-cover"
                />
            </figure>
        </section>
    )
}

export default Introduction

