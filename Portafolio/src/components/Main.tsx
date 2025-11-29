import type { JSX } from "react"
import AnimatedWave from "./AnimatedWave"
import Introduction from "./Introduction"
import About from "./About"
import Education from "./Education"
import Certifications from "./Certifications"


const Main = (): JSX.Element => {
    return (
        <main className="w-screen h-auto mt-[70px] grid grid-cols-1 grid-rows-[repeat(6,auto)] font-display">
            <section className="row-span-1 row-start-1 relative w-screen h-[450px] mb-[210px] overflow-hidden">
                <AnimatedWave />
            </section>
            <Introduction />
            <hr className="w-full border-t-8 border-double border-secondary-main" />
            <About />
            <hr className="w-full border-t-8 border-double border-secondary-main" />
            <Education/>
            <hr className="w-full border-t-8 border-double border-secondary-main" />
            <Certifications />
            <hr className="w-full border-t-8 border-double border-secondary-main" />
            <section></section>
        </main>
    )
}

export default Main