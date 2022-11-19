import {useState} from 'react';
import image from '../../images/personal.jpg';
import emailjs from 'emailjs-com';
import SentModal from '../../Componets/Modal/SentModal';
import FailModal from '../../Componets/Modal/FailModal';


export default function Home() {
    const [modal, setModal] = useState<"none"|"fail"|"sent">("none");

    const formSubmitHandler = async (event:React.FormEvent<HTMLFormElement>)=>{
        try {
            event.preventDefault();
            emailjs.sendForm("service_9571myr", "template_geeql87", event.currentTarget, "zZGqbnRDfc_-XUYES");
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

    const whatModal = () =>{
        switch(modal){
            case "sent": return <SentModal/>
            case "fail": return <FailModal/>
            case "none": return <></>
        };
    };

    return (
        <section className='my-5'>
            
            <section className='flex flex-col items-center text-cyan-400 text-xl'>
                <article className=' flex md:flex-row flex-col md:justify-center items-center w-full sm:w-4/6 bg-[rgb(21,41,78)]'>
                    <section className='flex flex-col items-center w-full md:w-5/12'>
                        <h2 className='p-1 font-semibold'>Biography</h2>
                        <img className='rounded-full' src={image} alt='Morgan Tolman' />
                    </section>
                    <section className='md:ml-2 w-full  md:w-5/12'>
                        <p className='mx-2 text-xl md:m-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid corporis minima, error repellat nemo illo fugiat, maiores dolor iste deleniti, itaque aperiam fuga molestias earum. Excepturi recusandae tenetur atque minus.</p>
                    </section>
                </article>

                <section className='flex md:flex-row flex-col md:justify-center items-center w-full sm:w-4/6 bg-[rgb(21,41,78)]'>
                    <form className='flex flex-col items-center w-full md:w-5/12 p-3 bg-slate-900 m-3 rounded ' onSubmit={formSubmitHandler}>
                        {whatModal()}
                        <h2 className='p-1'>Contact Form</h2>
                        <input className='m-1 w-3/6 bg-[rgb(21,41,78)]' name='email'  placeholder='Your Email'/>
                        <input className='m-1 w-3/6 bg-[rgb(21,41,78)]' name='subject' placeholder='Subject' />
                        <textarea className='m-1 w-3/6 bg-[rgb(21,41,78)]' name='message' placeholder='Your Message' rows={3} />
                        <button className='btn m-1' type='submit'>Send Email</button>
                        <article>
                            <ul>
                                <li>Email: morgan.tolman04@gmail.com</li>
                                <li>Phone Number: (480) 721-5211</li>
                            </ul>
                        </article>
                    </form>
                    <article className='md:ml-2 w-full  md:w-5/12 items-center flex flex-col mb-'>
                        <h2 className='font-semibold'>Skills</h2>
                        <ul className='border-t border-t-slate-900'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Node.js</li>
                            <li>React</li>
                            <li>JWT</li>
                            <li>MongoDB</li>
                            <li>MySQL</li>
                            <li>Express</li>
                            <li>Modular routing</li>
                            <li>MVC file structure</li>
                        </ul>
                    </article>
                </section>
            </section>
        </section>
    );
};