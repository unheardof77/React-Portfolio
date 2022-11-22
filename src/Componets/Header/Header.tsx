import { Link } from "react-router-dom";


export default function Home(){

    return(
        <header className=" sm:flex-row flex sm:justify-between justify-center items-center bg-slate-900 text-cyan-400 sm:h-16 h-24 flex-col">
            <section className="ml-5 mb-3">
                <h1>Full-Stack Web Developer</h1>
            </section>
            <nav className="mr-3">
                <Link className="btn" to={`/`}>Home</Link>
                <Link className="btn" to={`/projects`}>Projects</Link>
            </nav>
        </header>
    )
};