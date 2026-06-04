import React from "react"
import "./style.css"

function ProjectCard({
    imgProject,
    alt,
    title,
    label,
    descripton
}) {

    return (
        <div className="project-card">
            <div className="img-project" >
                <img src={imgProject} alt={alt} />
            </div>

            <div className="title-container">
                <h1> {title} </h1>
            </div>
            

            <div className="label-container"> {label} </div>

            <div className="description-container">
                <p>{descripton}</p>
            </div>
        </div>
    )
}

export default ProjectCard
