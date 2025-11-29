import { useState } from "react"
import { sliderData } from "./sliderData"

// Function to handle CV download
const handleDownloadCV = (): void => {
    const pdfPath = '/document/CV-Luis_Felipe_Rojas_Frontend_Developer.pdf'
        window.open(pdfPath, '_blank')
}

// Function for slider navigation
const useSlider = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const goToNext = (): void => {
        setCurrentIndex((prevIndex) => 
            prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
        )
    }

    const goToPrevious = (): void => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
        )
    }

    const goToSlide = (index: number): void => {
        if (index >= 0 && index < sliderData.length) {
            setCurrentIndex(index)
        }
    }

    const getCurrentSlide = () => {
        return sliderData[currentIndex]
    }

    return {
        currentIndex,
        goToNext,
        goToPrevious,
        goToSlide,
        getCurrentSlide,
        totalSlides: sliderData.length
    }
}

export { handleDownloadCV, useSlider }

