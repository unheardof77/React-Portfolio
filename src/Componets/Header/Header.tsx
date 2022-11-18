
interface HeaderProps {
    setPage: (page:string) =>void
}
export default function (props:HeaderProps){
    function navClickHandler(page:string) {
        props.setPage(page);
    }

    return(
        <header className=" sm:flex-row flex sm:justify-between justify-center items-center bg-slate-900 text-cyan-400 sm:h-16 h-24 flex-col">
            <section className="ml-5 mb-3">
                <h1>Full-Stack Web Developer</h1>
            </section>
            <nav className="mr-3">
                <button className="btn" onClick={()=>navClickHandler('Home')}>Home</button>
                <button className="btn" onClick={()=>navClickHandler('Projects')}>Projects</button>
            </nav>
        </header>
    )
};