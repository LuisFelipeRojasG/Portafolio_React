import type { JSX } from "react"
import { projectsData } from "../utils/projectsData"


const Projects = (): JSX.Element => {

    return (
        <section id="projects" className="row-start-11 row-span-1 h-auto pt-20 pb-40 flex flex-col items-center justify-center text-third-main bg-paper-redark">
            <h2 className="mb-12 text-4xl">My Projects</h2>
            <div className="flex flex-wrap justify-center gap-12 xl:flex-col">
                {
                    projectsData.map((project) => (
                        <div key={project.id} className=" bg-paper-dark rounded-lg shadow-lg p-6 w-80 xl:w-220 xl:h-96 xl:grid xl:grid-cols-2 gap-6 border-4 border-secondary-main">
                            <img className="h-40 mb-8 xl:w-auto xl:h-full" src={project.image} alt={project.title} />
                            <div>
                                <h3 className="text-2xl mb-4">{project.title}</h3>
                                <p className="mb-4">{project.description}</p>
                                <div className="flex flex-wrap mb-4 xl:mb-16">
                                    {Object.values(project.icons).map((icon) => (
                                        <span key={icon.slug} className="bg-paper-redark  rounded-full px-3 py-1 text-sm mr-2 mb-2">
                                            {icon.name}
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
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Projects;