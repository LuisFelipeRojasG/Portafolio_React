import Desarrollador from "../assets/certifications/Desarrollador_front-end_META.webp"
import Introduction from "../assets/certifications/Introd_desarrollo_frontend.webp"
import Html_CSS from "../assets/certifications/HTML_y_CSS .webp"
import JavaScript from "../assets/certifications/Programacion_javascript.webp"
import Git from "../assets/certifications/Control_versiones_git.webp"
import React_Basico from "../assets/certifications/React_basico.webp"
import React_Avanzado from "../assets/certifications/React_avanzado.webp"
import UX_UI from "../assets/certifications/Principios_UX_UI.webp"

interface Slide {
    id: number;
    title: string;
    link: string;
}

export const sliderData: Slide[] = [
    {
        id: 1,
        title: 'Certification in Front-end Development - META',
        link: Desarrollador
    },
    {
        id: 2,
        title: 'Certification Introduction to Front-end Development - META',
        link: Introduction
    },
    {
        id: 3,
        title: 'Certification HTML and CSS - META',
        link: Html_CSS
    },
    {
        id: 4,
        title: 'Certification JavaScript - META',
        link: JavaScript
    },
    {
        id: 5,
        title: 'Certification Git - META',
        link: Git
    },
    {
        id: 6,
        title: 'Certification React basic - META',
        link: React_Basico
    },
    {
        id: 7,
        title: 'Certification React advanced - META',
        link: React_Avanzado
    },
    {
        id: 8,
        title: 'Certification UX/UI principles - META',
        link: UX_UI
    }
];