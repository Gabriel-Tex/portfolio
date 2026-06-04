import React from "react"
import "./style.css"

function TechCard({
    icon,
    alt,
    label
}) {

  return (
    <div className="tech-card">
        <img src={icon} alt={alt} />
        <p>{label}</p>
    </div>
  )
}

export default TechCard
