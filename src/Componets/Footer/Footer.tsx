import Github from '../../images/GitHub-Mark-Light-32px.png'

export default function Footer(){

    return(
        <footer className="flex flex-col absolute bottom-0 items-center w-full bg-slate-900 text-cyan-400">
            <h3>Morgan Tolman</h3>
            <section className="flex justify-between w-full">
                <img className='p-1' alt="Github Logo" src={Github} />
                <img className='p-1' alt="LinkDen"/>
            </section>
        </footer>
    )
};