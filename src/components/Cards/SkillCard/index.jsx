import React from "react"
import "./style.css"

function SkillCard({
    title,
    descripton
}) {

    return (
        <div className="skill-card">
            <div className="title">
                <h1>{title}</h1>
            </div>

            <hr />

            <div className="description" >
                <p>{descripton}</p>
            </div>

        </div>
    )
}

export default SkillCard
