import littleLemon from "../assets/images/LittleLemon01.webp"

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
        link_live: "https://luisfeliperojasg.github.io/littleLemon/",
        link_git: "https://github.com/LuisFelipeRojasG/littleLemon",
        icons: ["React", "Tailwind", "Typescript", "Django", "mysql"]
    }
]