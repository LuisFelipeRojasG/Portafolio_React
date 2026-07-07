import type { JSX } from "react"
import { handleDownloadCV } from "../utils/functions"


const About = (): JSX.Element => {
    return (
      <section
        id="about"
        className="row-start-3 row-span-1 w-full h-auto py-20 flex flex-col items-center justify-center text-third-main px-10 bg-paper-redark"
      >
        <h1 className="py-6 text-center text-4xl">About me</h1>
        <p className="p-6 text-xl max-w-7xl lg:px-20">
          Computer Systems Analysis and Programming Technician with a strong
          focus on frontend development using React. I specialize in building
          intuitive, efficient, and highly scalable user interfaces, with
          experience in state management using Context API and REST API
          integration. I am driven by continuous learning, both in emerging
          technologies and in language development, particularly English and
          French. I enjoy working in collaborative environments, solving
          problems, and turning ideas into functional products. I bring over 18
          years of experience working with a company dedicated to the
          development, import, and commercialization of electronic equipment. I
          was involved in the implementation and deployment of a public street
          lighting telemanagement system in collaboration with Empresas Públicas
          de Medellín. I am a resourceful, adaptable, and results-oriented
          professional, committed to achieving goals and delivering value.
        </p>
        <div className="w-screen h-auto flex justify-center items-center mt-6">
          <button
            className="w-48 h-16 my-6 mx-8 text-center bg-paper-dark text-third-main text-2xl border-4 border-solid border-third-main rounded-xl cursor-pointer"
            onClick={handleDownloadCV}
          >
            Download CV
          </button>
        </div>
      </section>
    );
}

export default About