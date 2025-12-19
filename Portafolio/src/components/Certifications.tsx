import type { JSX } from "react"
import { useSlider } from "../utils/functions"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaCircle } from "react-icons/fa";
import { CgLoadbar } from "react-icons/cg";

const Certifications = (): JSX.Element => {
    const { currentIndex, goToNext, goToPrevious, goToSlide, getCurrentSlide, totalSlides } = useSlider()
    const currentSlide = getCurrentSlide()


    return (
        <section id="certifications" className="row-start-7 row-span-1 h-auto py-20 flex flex-col items-center justify-center text-third-main bg-paper-redark">
            <h1 className="mb-12 text-4xl">Certifications</h1>
            <p className="text-2xl mb-10">My recent certifications</p>
            <div className="w-full flex flex-col items-center justify-center relative">
                <div className="w-full flex items-center justify-center gap-6 mb-4">
                    <button className="" onClick={goToPrevious}>
                        <FaArrowAltCircleLeft size={30} />
                    </button>
                    {/* Contenido del slide actual */}
                    <figure className="w-[350px] h-[248px] flex justify-center ">
                        <img className=" max-w-[350px] max-h-[247px]" src={currentSlide.link} alt={currentSlide.title} />
                    </figure>
                    <button className="" onClick={goToNext}>
                        <FaArrowAltCircleRight size={30} />
                    </button>
                </div>
                {/* Indicadores de puntos */}
                <div className="flex">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button 
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`${index === currentIndex ? 'active' : ''} mx-1`}
                        >
                            {index === currentIndex ? <CgLoadbar size={60}/> : <FaCircle />}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certifications