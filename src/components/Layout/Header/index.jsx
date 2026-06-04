import React from "react"
import "./style.css"
import SettingsIcon from "../../../assets/baseline-settings.svg"

function Header() {

  return (
    <header>
        <nav className="menu">
            <a href="#">Tecnologias</a>
            <a href="#">Habilidades</a>
            <a href="#">Projetos</a>
            <a href="#">Experiência</a>
            <a href="#">Sobre mim</a>
            
            <img className="settings" src={SettingsIcon} alt="settings icon" />  
            
        </nav>
    </header>
  )
}

export default Header
