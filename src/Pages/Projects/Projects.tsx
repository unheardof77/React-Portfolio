import Project from "../../Componets/Project/Project";
import musicWp from "./musicWp.jpg";
import readMe from "./readme.jpg";
import tech from "./tech.jpg";
import generator from "./generator.jpg"

export default function Projects(){

    return(
        <section className="flex justify-center">
            <section className="my-5 flex items-center flex-col w-4/6">
                <section className="m-5 flex ">
                    <Project arrayOfTags={["JavaScript", "HTML", "CSS"]} imageSrc={musicWp} projectDescription="A simple application that allows the user to search for there favorite artist.  After searching information related to that artist is returned." projectTitle="Artist Information Finder"/>
                    <Project arrayOfTags={["Node", "JavaScript", "Express"]} imageSrc={readMe} projectDescription="This is a express handlebars application for a card game." projectTitle="Card Battle"/>
                </section>
                <section className="m-5 flex  ">
                    <Project arrayOfTags={["Handlebars", "Express", "Sequelize"]} imageSrc={tech} projectDescription="This is a restful application.  It uses a node backend and a handlebars view engine." projectTitle="Tech Blog"/>
                    <Project arrayOfTags={["Node", "Inquirer"]} imageSrc={generator} projectDescription="This application allows you to generate README.md files.  " projectTitle="README Generator"/>
                </section>
            </section>
        </section>
    )
};