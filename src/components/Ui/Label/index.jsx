import React from "react"
import "./style.css"

function Label({
    children,
    className = "",
    id = "",
}) {
    return (
        <div
            className={`label ${className}`}
            id={`${id}`}
        >
            {children}
        </div>
    );
}

export default Label
