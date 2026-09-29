import { type JSX } from "react"
import { LazyMotion, domAnimation } from "motion/react"
import * as m from "motion/react-m"
import { sliderData } from "../utils/sliderData"
import { useSlider } from "../utils/functions"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaCircle } from "react-icons/fa";
import { CgLoadbar } from "react-icons/cg";

const Certifications = (): JSX.Element => {
    const { positionIndexes, goToNext, goToPrevious, goToSlide, imageVariantsMobile, imageVariantsDesktop, positions } = useSlider()
    const totalSlides = sliderData.length

    return (
        <section id="certifications" className="row-start-7 row-span-1 h-full py-20 flex flex-col items-center justify-center text-third-main bg-paper-redark">
            <h1 className="mb-12 text-4xl">Certifications</h1>
            <p className="text-2xl mb-40">My recent certifications</p>
            <div className="w-full flex flex-col items-center justify-center relative">
                <div className="w-full h-[500px] flex items-center justify-center gap-130 lg:gap-200 mb-4">
                    <button aria-label="Previous slide" className=" hover:cursor-pointer" onClick={goToPrevious}>
                        <FaArrowAltCircleLeft size={50} />
                    </button>
                    {
                        sliderData.map((slide) => (
                            <LazyMotion features={domAnimation} key={slide.id}>
                                <m.figure 
                                    key={slide.id}
                                    className="w-60 h-60 lg:w-[550px] lg:h-[448px] flex justify-center absolute "
                                    variants={screen.width < 768 ? imageVariantsMobile : imageVariantsDesktop}
                                    animate={positions[positionIndexes.indexOf(slide.id)] ? positions[positionIndexes.indexOf(slide.id)] : "hidden"}
                                >
                                    <img className="max-w-[450px] max-h-[347px]" src={slide.link} alt={slide.title} />
                                </m.figure>
                            </LazyMotion>
                        ))
                    }

                    <button aria-label="Next slide" className=" hover:cursor-pointer" onClick={goToNext}>
                        <FaArrowAltCircleRight size={50} />
                    </button>
                </div>
                {/* Indicadores de puntos */}
                <div className="flex">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`${index === positionIndexes[0] ? 'active' : ''} mx-1 hover:cursor-pointer`}
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            {index === positionIndexes[0] ? <CgLoadbar size={60}/> : <FaCircle />}
                        </button>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Certifications