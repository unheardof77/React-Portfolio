import {BiErrorCircle} from 'react-icons/bi'

interface failProps{
    type: "fail"|"validEmail"|"blank";
}

export default function FailModal({type}:failProps){
    const whatError = () :string =>{
        switch(type){
            case "blank": return "All fields must be filled out.";
            case "fail": return "Message failed to send.";
            case "validEmail": return "Must be a valid email.";
        }
                    
    }
    return(
        <section className="z-10 flex bg-[rgb(21,41,78)] fixed justify-center items-center">
            <BiErrorCircle/>
            <p className='text-cyan-400 text-xl'>{whatError()}</p>
        </section>
    )
};