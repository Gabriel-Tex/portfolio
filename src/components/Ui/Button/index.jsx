import React from "react"
import "./style.css"

function Button({
    children,
    onClick,
    type = "button",
    className = "",
    id = "",
    ...props
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`btn-component ${className}`}
            id={`${id}`}
            {...props}
        > {children}
        </button>
    );
}

export default Button
