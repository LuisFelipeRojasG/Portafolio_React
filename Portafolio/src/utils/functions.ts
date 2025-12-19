import { useState, useEffect, useRef } from "react"
import type { RefObject } from "react"
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

/**
 * Hook que detecta qué elemento (pasado por refs) está más cerca del top de la pantalla.
 *
 * Modo de uso (resumen):
 * 1) Inicialización: se pasan los `refs` de las secciones y opciones (offset, threshold, idAttribute).
 * 2) useEffect registra listeners de `scroll` y `resize` y ejecuta un `handler` inicial.
 * 3) `handler` programa el cálculo mediante `requestAnimationFrame` para mejorar rendimiento.
 * 4) En `check` se recorre cada referencia, se calcula `getBoundingClientRect().top` y la distancia
 *    respecto al `offset` y se selecciona el elemento con distancia mínima.
 * 5) Si el elemento más cercano cambia y su distancia es <= `threshold`, se actualiza `activeId`.
 * 6) Al desmontar, se eliminan listeners y se cancela cualquier rAF pendiente.
 *
 * Parámetros:
 * - refs: Array de `RefObject<HTMLElement>` de las secciones a vigilar.
 * - options.offset (number): desplazamiento (px) que se considera como 'top' (por defecto 0).
 * - options.threshold (number): máxima distancia en px para considerar un elemento como activo (por defecto 100).
 * - options.idAttribute (string): atributo alternativo para leer el id del elemento (por defecto 'id').
 *
 * Devuelve: `activeId` (string | null) — el identificador de la sección activa o `null`.
 */
const useActiveOnTop = <T extends HTMLElement = HTMLElement>(
    refs: Array<RefObject<T>>,
    options?: { offset?: number; threshold?: number; idAttribute?: string }
) => {
    const { offset = 0, threshold = 100, idAttribute = "id" } = options || {}
    const [activeId, setActiveId] = useState<string | null>(null)
    // Guardamos el id del requestAnimationFrame actual para poder cancelarlo en cada evento
    const rafRef = useRef<number | null>(null)

    useEffect(() => {
        // check: calcula cuál elemento está más cerca del 'offset' (top)
        const check = () => {
            let closestId: string | null = null
            let minDistance = Number.POSITIVE_INFINITY

            // Para cada ref válida calculamos la distancia absoluta al top (rect.top - offset)
            refs.forEach((r) => {
                const el = r?.current
                if (!el) return // se salta refs no inicializados

                const rect = el.getBoundingClientRect()
                const distance = Math.abs(rect.top - offset)

                // Si esta distancia es la menor encontrada, guardamos el id candidato
                if (distance < minDistance) {
                    minDistance = distance

                    // Obtenemos el identificador: por defecto `el.id`, si no existe intentamos usar `idAttribute`
                    let id = idAttribute === "id" ? el.id : el.getAttribute(idAttribute) ?? null

                    // Si no hay id, permitimos usar data-active-id como alternativa
                    if (!id && el.dataset?.activeId) id = el.dataset.activeId

                    closestId = id
                }
            })

            // Actualizamos el estado sólo si el candidato cambió y está dentro del threshold
            if (closestId !== activeId && minDistance <= threshold) {
                setActiveId(closestId)
            }
        }

        // Handler que usa requestAnimationFrame para agrupar cálculos y evitar trabajo excesivo en scroll
        const handler = () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
            rafRef.current = requestAnimationFrame(check)
        }

        // Suscribimos listeners de scroll y resize (scroll en modo passive para mejor rendimiento)
        window.addEventListener("scroll", handler, { passive: true })
        window.addEventListener("resize", handler)

        // Ejecutamos una comprobación inicial para establecer el estado al montar
        handler()

        // Cleanup: removemos listeners y cancelamos cualquier rAF pendiente
        return () => {
            window.removeEventListener("scroll", handler)
            window.removeEventListener("resize", handler)
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
        }
        // Nota: es preferible pasar refs memoizados para evitar re-suscripciones innecesarias
    }, [refs, offset, threshold, idAttribute, activeId])

    return activeId
}

export { handleDownloadCV, useSlider, useActiveOnTop }

