import React from "react"
import "./style.css"
import TechCard from "../../Cards/TechCard"

// stack
import JavaScriptIcon from "../../../assets/javascript-icon.svg"
import NodeIcon from "../../../assets/node-icon.svg"
import ExpressIcon from "../../../assets/express-icon.svg"
import ReactIcon from "../../../assets/react-icon.svg"
import HtmlIcon from "../../../assets/html-icon.svg"
import CssIcon from "../../../assets/css-icon.svg"
import PythonIcon from "../../../assets/python-icon.svg"
import DjangoIcon from "../../../assets/django-icon.svg"
import CppIcon from "../../../assets/cpp-icon.svg"
import JavaIcon from "../../../assets/java-icon.svg"
import SqlIcon from "../../../assets/sql-icon.svg"

// tools
import LinuxIcon from "../../../assets/linux-icon.svg"
import VsCodeIcon from "../../../assets/vscode-icon.svg"
import GitIcon from "../../../assets/git-icon.svg"
import GithubIcon from "../../../assets/github-icon.svg"
import DockerIcon from "../../../assets/docker-icon.svg"
import PostgresIcon from "../../../assets/postgresql-icon.svg"
import FigmaIcon from "../../../assets/figma-icon.svg"

function StackSection() {

    return (

        <section className="stack-section">
            <h1>Tecnologias</h1>

            <div className="cards-container" > 
                <TechCard 
                    icon={JavaScriptIcon}
                    alt="JavaScript icon"
                    label="JavaScript"
                />
                <TechCard 
                    icon={NodeIcon}
                    alt="Node icon"
                    label="Node.js"
                />
                <TechCard 
                    icon={ExpressIcon}
                    alt="Express icon"
                    label="Express"
                />
                <TechCard 
                    icon={ReactIcon}
                    alt="React icon"
                    label="React"
                />
                <TechCard 
                    icon={HtmlIcon}
                    alt="Html icon"
                    label="HTML"
                />
                <TechCard 
                    icon={CssIcon}
                    alt="Css icon"
                    label="CSS"
                />
                <TechCard 
                    icon={PythonIcon}
                    alt="Python icon"
                    label="Python"
                />
                <TechCard 
                    icon={DjangoIcon}
                    alt="Django icon"
                    label="Django"
                />
                <TechCard 
                    icon={CppIcon}
                    alt="Cpp icon"
                    label="C++"
                />
                <TechCard 
                    icon={JavaIcon}
                    alt="Java icon"
                    label="Java"
                />
                <TechCard 
                    icon={SqlIcon}
                    alt="SQL icon"
                    label="SQL"
                />
                
            </div>
            
            <h1>Ferramentas</h1>

            <div className="cards-container" > 
                <TechCard 
                    icon={LinuxIcon}
                    alt="Linux icon"
                    label="Linux Mint"
                />
                <TechCard 
                    icon={VsCodeIcon}
                    alt="Vs Code icon"
                    label="Vs Code"
                />
                <TechCard 
                    icon={GitIcon}
                    alt="Git icon"
                    label="Git"
                />
                <TechCard 
                    icon={GithubIcon}
                    alt="GitHub icon"
                    label="GitHub"
                />
                <TechCard 
                    icon={DockerIcon}
                    alt="Docker icon"
                    label="Docker"
                />
                <TechCard 
                    icon={PostgresIcon}
                    alt="Postgresql icon"
                    label="PostgreSql"
                />
                <TechCard 
                    icon={FigmaIcon}
                    alt="Figma icon"
                    label="Figma"
                />
            </div>

        </section>

    )
}

export default StackSection
