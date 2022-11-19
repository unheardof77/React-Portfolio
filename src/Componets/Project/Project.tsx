interface ProjectProps{
    imageSrc: any,
    projectTitle: string,
    projectDescription: string,
    arrayOfTags: Array<string>
}

export default function Project(props:ProjectProps){

    return(
        <div style={{backgroundImage: `url(${props.imageSrc})`}} className="max-w-sm rounded overflow-hidden shadow-lg bg-[rgb(21,41,78)] text-cyan-400 mx-5">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 bg-slate-900 bg-opacity-80 p-1">{props.projectTitle}</div>
                    <p className=" bg-slate-900 bg-opacity-80 p-1">{props.projectDescription}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {props.arrayOfTags.map((tag)=>(
                        <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                    ) )}

                </div>
        </div>
    )
};