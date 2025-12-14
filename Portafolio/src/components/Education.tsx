import type { JSX } from "react"
import españolIcon from "../assets/icons/Español.png"
import inglesIcon from "../assets/icons/Ingles.webp"
import francesIcon from "../assets/icons/Francias.webp" 


const Education = (): JSX.Element => {
  return (
    <section className="row-start-5 row-span-1 h-auto py-20 mb-5 flex flex-col items-center justify-between text-third-main">
        <h1 className="mb-12 text-4xl">Education</h1>
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-10">
            <article className="flex flex-col items-center justify-center h-auto lg:pl-24">
                <div className="flex flex-col h-auto">
                    <div className="border-l-4 m-8 pl-8 border-secondary-main">
                        <h2 className="text-3xl">Front-end Developer</h2>
                        <p className="text-xl">META</p>
                        <p className="text-xl">2024 - 2025</p>
                    </div>
                    <div className="border-l-4 m-8 pl-8 border-secondary-main">
                        <h2 className="text-3xl">React Developer</h2>
                        <p className="text-xl">Platzi</p>
                        <p className="text-xl">2023 - 2024</p>
                    </div>
                    <div className="border-l-4 m-8 pl-8 border-secondary-main">
                        <h2 className="text-3xl">Technical Analyst and Programmer</h2>
                        <p className="text-xl">Censa</p>
                        <p className="text-xl">2013 - 2015</p>
                    </div>
                </div>
            </article>
            <article className="flex flex-col items-center justify-center h-auto">
                <div>
                    <div className="flex flex-col justify-between max-w-60 max-h-96 m-5 p-5 border-8 border-third-main rounded-xl">
                        <figure>
                            <img className=" aspect-3/2"
                                src={españolIcon}
                                alt="Español Nativo"
                            />
                        </figure>
                        <p className="mt-4 text-xl">Native Spanish speaker</p>
                    </div>
                    <div className="flex flex-col justify-between max-w-60 max-h-96 m-5 p-5 border-8 border-third-main rounded-xl">
                        <figure>
                            <img className=" aspect-3/2" 
                                src={inglesIcon}
                                alt="English B1+"
                            />
                        </figure>
                        <p className="mt-4 text-xl">English B1+</p>
                    </div>
                    <div className="flex flex-col justify-between max-w-60 max-h-96 m-5 p-5 border-8 border-third-main rounded-xl">
                        <figure>
                            <img className=" aspect-3/2"
                                src={francesIcon}
                                alt="French A1"
                            />
                        </figure>
                        <p className="mt-4 text-xl">French A1</p>
                    </div>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Education