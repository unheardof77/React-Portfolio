import Project from "../../Componets/Project/Project";
import musicWp from "../../assets/images/musicWp.jpg";
import readMe from "../../assets/images/readme.jpg";
import tech from "../../assets/images/tech.jpg";
import generator from "../../assets/images/generator.jpg";
import weather from "../../assets/images/weather.jpg";
import team from "../../assets/images/team.jpg";

export default function Projects(){

    return(
        <section className="flex justify-center">
            <section className="my-5 flex items-center flex-col min-h-full bg-[rgb(21,41,78)]">
                <section className="m-5 flex flex-col lg:flex-row">
                    <Project link="https://unheardof77.github.io/Artist-Information-Finder/" arrayOfTags={["JavaScript", "HTML", "CSS"]} imageSrc={musicWp} projectDescription="A simple application that allows the user to search for there favorite artist.  After searching information related to that artist is returned." projectTitle="Artist Information Finder"/>
                    <Project link="https://card-battle.herokuapp.com/" arrayOfTags={["Node", "JavaScript", "Express"]} imageSrc={readMe} projectDescription="This is a express handlebars application for a card game." projectTitle="Card Battle"/>
                </section>
                <section className="lg:m-5 m-0 flex flex-col lg:flex-row ">
                    <Project link="https://morgans-tech-blog.herokuapp.com/" arrayOfTags={["Handlebars", "Express", "Sequelize"]} imageSrc={tech} projectDescription="This is a restful application.  It uses a node backend and a handlebars view engine." projectTitle="Tech Blog"/>
                    <Project link="https://github.com/unheardof77/README-Generator" arrayOfTags={["Node", "Inquirer", "Fs"]} imageSrc={generator} projectDescription="This application allows you to generate README.md files.  " projectTitle="README Generator"/>
                </section>
                <section className="m-5 flex flex-col lg:flex-row ">
                    <Project link="https://github.com/unheardof77/Team-Profile-Creator" arrayOfTags={["Fs", "Node", "Inquirer"]} imageSrc={team} projectDescription="This is a node application that allows you to generate a team profile HTML document." projectTitle="Team Profile Generator"/>
                    <Project link="https://unheardof77.github.io/Weather-Dashboard/" arrayOfTags={["JavaScript", "Weather API", "HTML"]} imageSrc={weather} projectDescription="This is a front end application that uses a third party API to fetch current weather data for a city." projectTitle="Weather Dashboard"/>
                </section>
            </section>
        </section>
    )
};