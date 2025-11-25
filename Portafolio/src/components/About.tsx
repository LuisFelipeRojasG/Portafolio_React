import type { JSX } from "react"
import { handleDownloadCV } from "../utils/functions"


const About = (): JSX.Element => {
    return (
        <section className="row-start-3 row-span-1 w-full h-auto py-20 flex flex-col items-center justify-center text-third-main px-10 bg-paper-redark">
            <h1 className="p-6 text-center text-4xl">About me</h1>
            <p className="p-6 text-xl max-w-7xl">
                I have more than 15 years of experience in an electronic
                company that creates and sells different solutions for many
                industries. In my different positions during these years, I have
                been increasing my skills working with the engineering team
                developing high quality products. In my journey as a web developer I
                grow and evolve taking new challenges and learning latest
                technologies. I really enjoy learning different things as new
                languages like English, French and Japanese also I’m starting my
                hobby of 3D animations. I never stop to learning something new every
                day.
            </p>
            <div className="w-screen h-auto flex justify-center items-center mt-6">
                <button className="w-48 h-16 my-6 mx-8 text-center bg-paper-dark text-third-main text-2xl border-4 border-solid border-third-main rounded-xl"
                    onClick={handleDownloadCV}
                >
                    Download CV
                </button>
            </div>
        </section>
    )
}

export default About