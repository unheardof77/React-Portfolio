import React from "react";

interface HeaderProps {
    setPage: (page:string) =>void
}
export default function (props:HeaderProps){
    function navClickHandler(page:string) {
        props.setPage(page);
    }

    return(
        <header className=" flex justify-between bg-slate-900 text-cyan-400 ">
            <section>
                <h1>Morgan Tolman</h1>
            </section>
            <nav>
            <a onClick={()=>navClickHandler('Home')}>Home</a>
            <a onClick={()=>navClickHandler('Projects')}>Projects</a>
        </nav>
        </header>
    )
};