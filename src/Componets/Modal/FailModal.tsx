import {BiErrorCircle} from 'react-icons/bi'

export default function FailModal(){
    return(
        <section className="z-10 flex bg-[rgb(21,41,78)] fixed justify-center items-center">
            <BiErrorCircle/>
            <p className='text-cyan-400 text-xl'>Message not sent.</p>
        </section>
    )
};