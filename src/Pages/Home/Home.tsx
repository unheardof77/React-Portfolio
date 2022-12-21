import { useState } from 'react';
import Bio from '../../Componets/Bio/Bio';
import emailjs from 'emailjs-com';
import SentModal from '../../Componets/Modal/SentModal';
import FailModal from '../../Componets/Modal/FailModal';
import EmailForm from '../../Componets/EmailForm/EmailForm';
import Skills from '../../Componets/Skills/Skills';



export default function Home() {
    const [modal, setModal] = useState<"none"|"fail"|"sent">("none");

    const formSubmitHandler = async (event:React.FormEvent<HTMLFormElement>)=>{
        try {
            event.preventDefault();
            await emailjs.sendForm("service_9571myr", "template_geeql87", event.currentTarget, "zZGqbnRDfc_-XUYES");
            setModal("sent");
            setTimeout(()=>{
                setModal("none")
            }, 3000);
        } catch(err){
            setModal("fail");
            setTimeout(()=>{
                setModal("none")
            }, 3000);
            console.error(err);
        };
    };

    const whatModal = ():JSX.Element |null =>{
        switch(modal){
            case "sent": return <SentModal/>;
            case "fail": return <FailModal/>;
            case "none": return null;
        };
    };

    return (
        <section className='my-5'>
            <section className='flex flex-col items-center text-cyan-400 text-xl'>
                <Bio/>
                <section className='flex md:flex-row flex-col md:justify-center items-center w-full sm:w-4/6 bg-[rgb(21,41,78)]'>
                    <EmailForm whatModal={whatModal} formSubmitHandler={formSubmitHandler} />
                    <Skills/>
                </section>
            </section>
        </section>
    );
};