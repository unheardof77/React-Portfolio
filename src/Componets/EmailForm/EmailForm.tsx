import React from "react";


interface EmailFormProps {
    whatModal: ()=> JSX.Element | null;
    formSubmitHandler: (e:React.FormEvent<HTMLFormElement>)=> void;
}

export default function EmailForm({whatModal, formSubmitHandler}:EmailFormProps){

    return (
        <form className='flex flex-col items-center w-full md:w-5/12 p-3 bg-slate-900 m-3 rounded ' onSubmit={formSubmitHandler}>
        {whatModal()}
        <h2 className='p-1'>Contact Form</h2>
        <input required className='m-1 w-3/6 bg-[rgb(21,41,78)]' name='email' placeholder="Your Email" />
        <input required className='m-1 w-3/6 bg-[rgb(21,41,78)]' name='subject' placeholder='Subject' />
        <textarea required className='m-1 w-3/6 bg-[rgb(21,41,78)]' name='message' placeholder='Your Message' rows={3} />
        <button className='btn m-1' type='submit'>Send Email</button>
        <article>
            <ul>
                <li>Email: morgan.tolman04@gmail.com</li>
            </ul>
        </article>
    </form>
    )
};