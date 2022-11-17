interface ProjectProps{
    imageSrc: string,
    projectTitle: string,
    projectDescription: string
}

export default function Project(props:ProjectProps){

    return(
        <article>
            <section>
                <img alt="Project image" src={props.imageSrc}/>
            </section>
            <section>
                <h2>{props.projectTitle}</h2>
                <p>{props.projectDescription}</p>
            </section>
        </article>
    )
};