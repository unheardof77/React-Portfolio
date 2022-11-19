import Github from '../../images/GitHub-Mark-Light-32px.png'
import {AiFillLinkedin} from 'react-icons/ai'
import {IconContext} from 'react-icons';

export default function Footer(){

    return(
        <footer className="flex flex-col mt-24 bottom-0 min-h-fit items-center w-full bg-slate-900 text-cyan-400">
            <h3>Morgan Tolman</h3>
            <section className="flex justify-between w-full">
                <a href='https://github.com/unheardof77' target='_blank'><img className='p-1 mb-1 ml-3' alt="Github Logo" src={Github} /></a>
                <IconContext.Provider value={{size: '2em'}}>
                    <a className='mr-3' href='https://www.linkedin.com/in/morgan-tolman-664816250' target="_blank"><AiFillLinkedin/></a>
                </IconContext.Provider>
            </section>
        </footer>
    )
};