import Html_icon from "../assets/icons/html-icon.svg"
import CSS_icon from "../assets/icons/css-icon.svg"
import Javascript_icon from "../assets/icons/javascript-icon.svg"
import React_icon from "../assets/icons/react-js-icon.svg"
import Typescript_icon from "../assets/icons/typescript-icon.svg"
import Tailwind_icon from "../assets/icons/tailwind-css.svg"
import Git_icon from "../assets/icons/git-icon.svg"
import Figma_icon from "../assets/icons/figma-icon.svg"
import Python_icon from "../assets/icons/python-icon.svg"
import Django_icon from "../assets/icons/django-icon.svg"
import Mysql_icon from "../assets/icons/mysql-icon.svg"
import Opencode_icon from "../assets/icons/opencode-icon.svg"



interface Icons {
    id: number
    link: string
    name: string
}

export const stackData: Icons[] = [
    {
        id: 1,
        link: Html_icon,
        name: "Html"
    },
    {
        id: 2,
        link: CSS_icon,
        name: "CSS"
    },
    {
        id: 3,
        link: Javascript_icon,
        name: "Javascript"
    },
    {
        id: 4,
        link: React_icon,
        name: "React"
    },
    {
        id: 5,
        link: Typescript_icon,
        name: "Typescript"
    },
    {
        id: 6,
        link: Tailwind_icon,
        name: "Tailwind"
    },
    {   
        id: 7,
        link: Git_icon,
        name: "Git"
    },
    {
        id: 8,
        link: Python_icon,
        name: "Python"
    },
    {
        id: 9,
        link: Django_icon,
        name: "Django"
    },
    {
        id: 10,
        link: Mysql_icon,
        name: "Mysql"
    },
    {
        id: 11,
        link: Opencode_icon,
        name: "Opencode"
    },
    {
        id: 12,
        link: Figma_icon,
        name: "Figma"
    }
]