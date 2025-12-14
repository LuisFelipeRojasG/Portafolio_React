import type { JSX } from "react"
import { projectsData } from "../utils/projectsData"


const Projects = (): JSX.Element => {

    return (
        <section className="row-start-11 row-span-1 h-auto py-20 flex flex-col items-center justify-center text-third-main bg-paper-redark">
            <h2 className="mb-12 text-4xl">My Projects</h2>
            <div className="flex flex-wrap justify-center gap-12">
                {
                    projectsData.map((project, index) => (
                        <div key={index} className=" bg-paper-dark rounded-lg shadow-lg p-6 w-80 border-4 border-secondary-main">
                            <img className="h-40 mb-8" src={project.image} alt={project.title} />
                            <h3 className="text-2xl mb-4">{project.title}</h3>
                            <p className="mb-4">{project.description}</p>
                            <div className="flex flex-wrap mb-4">
                                {project.icons.map((icon, idx) => (
                                    <span key={idx} className="bg-paper-redark  rounded-full px-3 py-1 text-sm mr-2 mb-2">
                                        {icon}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-around gap-6">
                                 <a href={project.link_live} target="_blank" className="flex items-center justify-center w-14 h-8 rounded-lg border-2 border-third-main">
                                    Live
                                </a>
                                <a href={project.link_git} target="_blank" className="flex items-center justify-center w-14 h-8 rounded-lg border-2 border-third-main">
                                    Git
                                </a>
                            </div>
                           
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Projects;