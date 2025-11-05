import AnimatedWave from "./AnimatedWave"


function Main() {
    return (
        <main className="w-full min-h-screen grid-cols-1 grid-rows-[repeat(6,auto)]">
            <section className="row-span-1 row-start-1 relative w-screen h-[450px] overflow-hidden">
                <AnimatedWave />
            </section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
        </main>
    )
}

export default Main