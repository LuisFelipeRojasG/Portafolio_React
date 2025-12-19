import type { JSX } from "react"
import { stackData } from "../utils/stackData"

const Stack = (): JSX.Element => {
  return (
    <section id="stack" className="row-start-9 row-span-1 h-auto py-20 flex flex-col items-center justify-center text-third-main">
      <h1 className="mb-12 text-4xl">Tech Stack</h1>
      <p className="text-2xl mb-10">Technologies I've working recently</p>
      <ul className="w-full flex items-center justify-center gap-10 flex-wrap xl:px-40">
        {
            stackData.map((item, id) => (
                <li key={id} className="flex flex-col items-center justify-between w-[155px] h-[200px] m-4 p-4 border-4 border-third-main rounded-xl">
                    <img className="h-28" src={item.link} alt={item.name} />
                    <p className="text-2xl ">{item.name}</p>
                </li>
            ))
        }
      </ul>
    </section>
  );
};

export default Stack;