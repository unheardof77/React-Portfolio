interface ProjectProps{
    imageSrc: any,
    projectTitle: string,
    projectDescription: string,
    arrayOfTags: Array<string>,
    link: string
}

export default function Project(props:ProjectProps){

    return(
        <a href={props.link} target="_blank" rel="noreferrer" style={{backgroundImage: `url(${props.imageSrc})`, backgroundSize: 'cover'}} className="max-w-sm rounded lg:my-0 my-2 overflow-hidden shadow-lg bg-[rgb(21,41,78)] text-cyan-400 mx-5">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 bg-slate-900 bg-opacity-80 p-1">{props.projectTitle}</div>
                    <p className=" bg-slate-900 bg-opacity-80 p-1">{props.projectDescription}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {props.arrayOfTags.map((tag)=>(
                        <span key={tag} className="inline-block bg-slate-900 rounded-full px-3 py-1 text-sm font-semibold text-cyan-400 mr-2 mb-2">{tag}</span>
                    ) )}
                </div>
        </a>
    )
};