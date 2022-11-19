import {FcCheckmark} from 'react-icons/fc'

export default function SentModal(){
    return(
        <section className="z-10 flex bg-[rgb(21,41,78)] justify-center items-center">
            <FcCheckmark/>
            <p className='text-cyan-400 text-xl'>Message sent successfully.</p>
        </section>
    )
};