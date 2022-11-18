import React from 'react';
import image from '../../images/personal.jpg';
import emailjs from 'emailjs-com';



export default function Home() {
    const formSubmitHandler = async (event:React.FormEvent<HTMLFormElement>)=>{
        try {
            event.preventDefault();
            emailjs.sendForm("service_9571myr", "template_geeql87", event.currentTarget, "zZGqbnRDfc_-XUYES");
        } catch(err){
            console.error(err);
        }
    };

    return (
        <section>
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
                    <form className='flex flex-col items-center w-full md:w-5/12 p-3 border-slate-900 my-3 border ' onSubmit={formSubmitHandler}>
                        <h2>Contact Form</h2>
                        <input name='email'  placeholder='Your Email'/>
                        <input name='subject' placeholder='Subject' />
                        <textarea name='message' placeholder='Your Message' />
                        <button className='btn' type='submit'>Send Email</button>
                        <article>
                            <h2>Contact Me Directly</h2>
                            <ul>
                                <li>Email: morgan.tolman04@gmail.com</li>
                                <li>Phone Number: (480) 721-5211</li>
                            </ul>
                        </article>
                    </form>
                    <article className='md:ml-2 w-full  md:w-5/12'>
                        <h2 className='font-semibold'>Skills</h2>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </article>
                </section>
            </section>
        </section>
    );
};