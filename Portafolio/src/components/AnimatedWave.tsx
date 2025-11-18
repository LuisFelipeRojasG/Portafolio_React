import type { JSX } from "react"

const AnimatedWave = (): JSX.Element => {
    return (
        <div className="">
            <div className="absolute w-full h-1/2 bg-primary-main"></div>
            <div className="absolute top-0 left-0 w-[6000px] h-full bg-[url(assets/wd1.svg)] animate-w1"></div>
            <div className="absolute top-0 left-0 w-[6000px] h-full bg-[url(assets/wd1.svg)] animate-w2 opacity-50"></div>
        </div>
    )
}

export default AnimatedWave;