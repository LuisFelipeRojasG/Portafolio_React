import littleLemon from "../assets/images/LittleLemon01.webp"
import avon from "../assets/images/Avon.png"

interface cards {
    image: string
    title: string
    description: string
    link_live: string
    link_git: string
    icons: string[]
}

export const projectsData: cards[] = [
    {
        image: littleLemon,
        title: "Little Lemon Restaurant Website",
        description: "This project involved creating a responsive restaurant website using React, Typescript, Tailwind CSS, Django, mysql. The website features a user-friendly interface to enhance the dining experience.",
        link_live: "https://luisfeliperojasg.github.io/Lemon_restaurant/",
        link_git: "https://github.com/LuisFelipeRojasG/Lemon_restaurant",
        icons: ["React", "Tailwind", "Typescript", "Django", "mysql"]
    },
    {
        image: avon,
        title: "Avon E-commerce Website",
        description: "This project involved creating a responsive e-commerce website using React, Tailwind CSS. The website features a user-friendly interface to enhance the shopping experience.",
        link_live: "https://luisfeliperojasg.github.io/ecommerceavion/",
        link_git: "https://github.com/LuisFelipeRojasG/ecommerceavion",
        icons: ["React", "Tailwind", "figma", "opencode"]
    }
]