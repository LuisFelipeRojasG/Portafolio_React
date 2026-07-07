import { useState, useEffect, useRef } from "react"
import type { RefObject } from "react"

// Function to handle CV download
const handleDownloadCV = (): void => {
    const pdfPath = 'https://drive.google.com/file/d/1EWsnBRR1PgRCK1i51Nf27Jw5ao3Ujigv/view?usp=drive_link'
        window.open(pdfPath, '_blank')
}

const useSlider = () => {
    const [ positionIndexes, setPositionIndexes ] = useState<Array<number>>([1, 2, 3, 4, 5, 6, 7, 8])

    const positions = [
        "center",
        "right",
        "left"
    ]

    const imageVariantsMobile = {
        center: {
            x: 0,
            opacity: 1,
            scale: 0.5,
            zIndex: 2,
            transition: { duration: 0.5 }
        }
    }

    const imageVariantsDesktop = {
        center: {
            x: 0,
            opacity: 1,
            scale: 1.5,
            zIndex: 2,
            transition: { duration: 0.5 }
        },
        right: {
            x: 500,
            opacity: 0.5,
            scale: 0.8,
            zIndex: 1,
            transition: { duration: 0.5 }
        },
        left: {
            x: -500,
            opacity: 0.5,
            scale: 0.8,
            zIndex: 1,
            transition: { duration: 0.5 }
        }
    }

    const goToNext = (): void => {
        setPositionIndexes((prevPositions) => {
            const updatedIndexes = prevPositions.map((prevIndex) => 
                (prevIndex + 1) % positionIndexes.length
            )
            return updatedIndexes
        })
    }

    const goToPrevious = (): void => {
        setPositionIndexes((prevPositions) => {
            const updatedIndexes = prevPositions.map((prevIndex) => 
                (prevIndex - 1 + positionIndexes.length) % positionIndexes.length
            )
            return updatedIndexes
        })
    }

    const goToSlide = (index: number): void => {
        if (index >= 0 && index < positionIndexes.length) {
            const updatedIndexes = positionIndexes.map((_, i) => 
                (index + i) % positionIndexes.length
            )
            setPositionIndexes(updatedIndexes)
        }
    }

    return {
        positionIndexes,
        goToNext,
        goToPrevious,
        goToSlide,
        imageVariantsMobile,
        imageVariantsDesktop,
        positions
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
    refs: Array<RefObject<T | null>>,
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

