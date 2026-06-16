import React from "react"
import "./style.css"
import TechCard from "../../Cards/TechCard"

// Stack icons
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

// Tool icons
import LinuxIcon from "../../../assets/linux-icon.svg"
import VsCodeIcon from "../../../assets/vscode-icon.svg"
import GitIcon from "../../../assets/git-icon.svg"
import GithubIcon from "../../../assets/github-icon.svg"
import DockerIcon from "../../../assets/docker-icon.svg"
import PostgresIcon from "../../../assets/postgresql-icon.svg"
import FigmaIcon from "../../../assets/figma-icon.svg"

function InfiniteCarousel({ items, direction = "left", speed = 40 }) {
    const animationName = direction === "right"
        ? "scroll-right"
        : "scroll-left"

    return (
        <div className="carousel-viewport" aria-hidden="true">
            <div
                className="carousel-track"
                style={{
                    animationName,
                    animationDuration: `${speed}s`,
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                }}
            >

                {items.map((item, i) => (
                    <TechCard key={`a-${i}`} icon={item.icon} alt={item.alt} label={item.label} />
                ))}

                {items.map((item, i) => (
                    <TechCard key={`b-${i}`} icon={item.icon} alt={item.alt} label={item.label} />
                ))}
            </div>
        </div>
    )
}

const STACK_ITEMS = [
    { icon: JavaScriptIcon, alt: "JavaScript icon", label: "JavaScript" },
    { icon: NodeIcon, alt: "Node.js icon", label: "Node.js" },
    { icon: ExpressIcon, alt: "Express icon", label: "Express" },
    { icon: ReactIcon, alt: "React icon", label: "React" },
    { icon: HtmlIcon, alt: "HTML icon", label: "HTML" },
    { icon: CssIcon, alt: "CSS icon", label: "CSS" },
    { icon: PythonIcon, alt: "Python icon", label: "Python" },
    { icon: DjangoIcon, alt: "Django icon", label: "Django" },
    { icon: CppIcon, alt: "C++ icon", label: "C++" },
    { icon: JavaIcon, alt: "Java icon", label: "Java" },
    { icon: SqlIcon, alt: "SQL icon", label: "SQL" },
]

const TOOLS_ITEMS = [
    { icon: LinuxIcon, alt: "Linux icon", label: "Linux Mint" },
    { icon: VsCodeIcon, alt: "VS Code icon", label: "VS Code" },
    { icon: GitIcon, alt: "Git icon", label: "Git" },
    { icon: GithubIcon, alt: "GitHub icon", label: "GitHub" },
    { icon: DockerIcon, alt: "Docker icon", label: "Docker" },
    { icon: PostgresIcon, alt: "PostgreSQL icon", label: "PostgreSQL" },
    { icon: FigmaIcon, alt: "Figma icon", label: "Figma" },
]

function StackSection() {
    return (
        <section className="stack-section">
            <h1>Tecnologias</h1>
            <InfiniteCarousel items={STACK_ITEMS} direction="left" speed={38} />

            <h1>Ferramentas</h1>
            <InfiniteCarousel items={TOOLS_ITEMS} direction="right" speed={30} />
        </section>
    )
}

export default StackSection
