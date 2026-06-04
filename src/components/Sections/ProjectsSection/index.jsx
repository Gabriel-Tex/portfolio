import React from "react"
import "./style.css"
import ProjectCard from "../../Cards/ProjectCard"
import Label from "../../Ui/Label"

function ProjectsSection() {

    return (

        <section className="projects-section">
            <h1>Meus projetos</h1>

            <div className="project-cards">
                < ProjectCard
                    title="BDSpotPer"
                    descripton="
                    Versão personalizada do Spotify para colecionadores de música clássica. Banco de dados SQL Server acessado por
                    aplicativo Python com interface gráfica. Funcionalidades incluem criação/exclusão de playlists, inserção/remoção de
                    músicas e diferentes tipos de consultas.
                    "
                    label={<Label children="label" />}
                />
                < ProjectCard />
                < ProjectCard />
            </div>
        </section>

    )
}

export default ProjectsSection
