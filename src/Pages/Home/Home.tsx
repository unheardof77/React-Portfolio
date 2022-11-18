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
            <article>
                <section>
                    <h2>Biography</h2>
                    <img src={image} alt='Morgan Tolman' />
                </section>
                <section>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid corporis minima, error repellat nemo illo fugiat, maiores dolor iste deleniti, itaque aperiam fuga molestias earum. Excepturi recusandae tenetur atque minus.</p>
                </section>
            </article>

            <section>
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
    );
};