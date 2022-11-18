import React from 'react';
import image from '../../images/personal.jpg';
import {createRef} from 'react';

export default function Home() {
    const formRef = createRef<HTMLFormElement>()
    const formSubmitHandler = (event:React.SyntheticEvent)=>{
        event.preventDefault();
        const target = event.target as typeof event.target &{
            email: {value: string};
            subject: {value: string};
            message: {value: string};
        };
        // emailjs.sendForm("service_9571myr", "template_geeql87", formRef, "zZGqbnRDfc_-XUYES")
        const email = target.email.value;
        const subject = target.subject.value;
        const message = target.message.value;

    };

    return (
        <section>
            <section className='flex flex-col items-center '>
                <article className='flex md:flex-row flex-col md:justify-center items-center w-full sm:w-4/6 bg-[rgb(21,41,78)]'>
                    <section className='  w-full md:w-5/12 '>
                        <h2>Biography</h2>
                        <img className='rounded-full' src={image} alt='Morgan Tolman' />
                    </section>
                    <section className=' w-full md:w-5/12'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid corporis minima, error repellat nemo illo fugiat, maiores dolor iste deleniti, itaque aperiam fuga molestias earum. Excepturi recusandae tenetur atque minus.</p>
                    </section>
                </article>

                <section className='flex justify-center w-4/6 bg-[rgb(21,41,78)]'>
                    <form ref={formRef} onSubmit={(event)=>formSubmitHandler(event)}>
                        <input name='email'  placeholder='Your Email'/>
                        <input name='subject' placeholder='Subject' />
                        <textarea name='message' placeholder='Your Message' />
                        <button type='submit'>Send Email</button>
                    </form>
                    <article>
                        <p></p>
                        <a></a>
                    </article>
                </section>
            </section>
        </section>
    );
};