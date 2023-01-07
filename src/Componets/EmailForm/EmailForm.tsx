import React, { ChangeEvent } from "react";


interface EmailFormProps {
    whatModal: ()=> JSX.Element | null;
    formSubmitHandler: (e:React.FormEvent<HTMLFormElement>)=> void;
    whatValChanged: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    email: string;
    subject: string;
    message: string;
}

export default function EmailForm({whatModal, formSubmitHandler, whatValChanged, email, subject, message}:EmailFormProps){

    return (
        <form className='flex flex-col items-center w-full md:w-5/12 p-3 bg-slate-900 m-3 rounded ' onSubmit={formSubmitHandler}>
        {whatModal()}
        <h2 className='p-1'>Contact Form</h2>
        <input  className='m-1 w-3/6 bg-[rgb(21,41,78)]'  value={email} onChange={whatValChanged} name='email' placeholder="Your Email" />
        <input  className='m-1 w-3/6 bg-[rgb(21,41,78)]' type="text" value={subject} onChange={whatValChanged} name='subject' placeholder='Subject' />
        <textarea  className='m-1 w-3/6 bg-[rgb(21,41,78)]' value={message} onChange={whatValChanged} name='message' placeholder='Your Message' rows={3} />
        <button className='btn m-1' type='submit'>Send Email</button>
        <div>
            <ul>
                <li>Email: morgan.tolman04@gmail.com</li>
            </ul>
        </div>
    </form>
    )
};