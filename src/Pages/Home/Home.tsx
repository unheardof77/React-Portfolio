import React, { ChangeEvent, useState } from 'react';
import Bio from '../../Componets/Bio/Bio';
import emailjs from 'emailjs-com';
import SentModal from '../../Componets/Modal/SentModal';
import FailModal from '../../Componets/Modal/FailModal';
import EmailForm from '../../Componets/EmailForm/EmailForm';
import Skills from '../../Componets/Skills/Skills';



export default function Home() {
    const [modal, setModal] = useState<"none"|"fail"|"sent"|"blank"|"validEmail">("none");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const whatValChanged = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const value = e.currentTarget.value;
        switch(e.currentTarget.name){
            case "email": setEmail(value); break;
            case "subject": setSubject(value); break;
            case "message": setMessage(value); break;
        }
    }

    const formSubmitHandler = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(email.trim() == "" || subject.trim() == "" || message.trim() == ""){
            setModal("blank");
            setTimeout(()=>{
                setModal("none");
            }, 5000)
        }else if(!regexEmail.test(email.toLowerCase())){
            setModal("validEmail");
            setTimeout(()=>{
                setModal("none");
            }, 5000)
        }else{
            try {
                await emailjs.sendForm("service_9571myr", "template_geeql87", e.currentTarget, "zZGqbnRDfc_-XUYES");
                setModal("sent");
                setTimeout(()=>{
                    setModal("none")
                }, 5000);
            } catch(err){
                setModal("fail");
                setTimeout(()=>{
                    setModal("none")
                }, 5000);
                console.error(err);
            };
        }
    };

    const whatModal = ():JSX.Element |null =>{
        switch(modal){
            case "sent": return <SentModal/>;
            case "fail": return <FailModal type='fail'/>;
            case "validEmail": return <FailModal type='validEmail'/>;
            case "blank": return <FailModal type='blank'/>;
            case "none": return null;
        };
    };

    return (
        <section className='my-5'>
            <section className='flex flex-col items-center text-cyan-400 text-xl'>
                <Bio/>
                <section className='flex md:flex-row flex-col md:justify-center items-center w-full sm:w-4/6 bg-[rgb(21,41,78)]'>
                    <EmailForm whatValChanged={whatValChanged} email={email} subject={subject} message={message} whatModal={whatModal} formSubmitHandler={formSubmitHandler} />
                    <Skills/>
                </section>
            </section>
        </section>
    );
};