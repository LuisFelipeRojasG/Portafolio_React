import type { JSX } from "react"
import { FaLinkedin, FaGithub, FaXTwitter  } from "react-icons/fa6";

const Footer = (): JSX.Element => {
  return (
    <section className="flex flex-col justify-center items-center gap-4 bg-primary-main h-[150px] w-screen text-third-main px-10 py-5">
      <div>
        <h2>
          You may also find me on these platforms!
        </h2>
      </div>
      <div className="flex flex-row justify-between w-full max-w-sm gap-8">
        <a
          href={"https://www.linkedin.com/in/luis-felipe-rojas-gonzalez-69213b66/"}
        >
          <FaLinkedin size={50}/>
        </a>
        <a href={"https://github.com/LuisFelipeRojasG"}
        >
          <FaGithub size={50}/>
        </a>
        <a href={"https://twitter.com/latisstingrey"}
        >
          <FaXTwitter size={50}/>
        </a>
      </div>
      <div>
        <h3>
          2025 | Designed and coded with ❤️️ by Luis Felipe Rojas
        </h3>
      </div>
    </section>
  )
}

export default Footer