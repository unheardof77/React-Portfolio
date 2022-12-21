import image from '../../assets/images/personal.jpg';

export default function Bio(){
    return(
        <article className=' flex md:flex-row flex-col md:justify-center items-center w-full sm:w-4/6 bg-[rgb(21,41,78)]'>
            <section className='flex flex-col items-center w-full md:w-5/12'>
                <h2 className='p-1 font-semibold'>Biography</h2>
                <img className='rounded-full' src={image} alt='Morgan Tolman' />
            </section>
            <section className='md:ml-2 w-full  md:w-5/12'>
                <p className='mx-2 text-xl md:m-0'>Hello, my name is Morgan Tolman.  I am a graduate of the University of Arizona boot camps.  As a former student, I have learned many new technologies in a short period of time.  My current favorite is React, and Graphql.  Be sure to look at my GitHub for more TypeScript projects.</p>
            </section>
        </article>
    )
};