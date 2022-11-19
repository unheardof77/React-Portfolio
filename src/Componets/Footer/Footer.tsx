import Github from '../../images/GitHub-Mark-Light-32px.png'
import {AiFillLinkedin} from 'react-icons/ai'
import {IconContext} from 'react-icons';
import resume from './MorganTolmanResume.pdf'

export default function Footer(){

    return(
        <div className='flex items-end md:h-32'>
            <footer className="flex flex-col  bottom-0 min-h-fit items-center w-full bg-slate-900 text-cyan-400">
                <h3>Morgan Tolman</h3>
                <section className="flex justify-between w-full my-1">
                    <a href='https://github.com/unheardof77' rel='noreferrer' target='_blank'><img className='p-1 mb-1 ml-3' alt="Github Logo" src={Github} /></a>
                    <a className='btn' href={resume} download>Download My Resume</a>
                    <IconContext.Provider value={{size: '2em'}}>
                        <a className='mr-3' href='https://www.linkedin.com/in/morgan-tolman-664816250' target="_blank" rel='noreferrer'><AiFillLinkedin/></a>
                    </IconContext.Provider>
                </section>
            </footer>
        </div>
    )
};