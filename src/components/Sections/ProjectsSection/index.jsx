import React from "react"
import "./style.css"
import ProjectCard from "../../Cards/ProjectCard"
import Label from "../../Ui/Label"

function ProjectsSection() {

    return (
        <section className="projects-section">
            <h1>Meus projetos</h1>

            <div className="project-cards">
                <ProjectCard
                    title="Portfólio Profissional"
                    descripton="Aplicação web para apresentação profissional de projetos, experiências e competências técnicas. Interface responsiva e design moderno com foco em usabilidade, componentes reutilizáveis em React e organização modular do código."
                    label={<><Label children="JavaScript" /><Label children="React" /><Label children="HTML" /><Label children="CSS" /></>}
                />
                <ProjectCard
                    title="Task List & Autenticação"
                    descripton="Aplicação full stack para gerenciamento de tarefas desenvolvida em equipe com Scrum. API REST em Django REST Framework, autenticação JWT, frontend em React e conteinerização com Docker."
                    label={<><Label children="Django" /><Label children="React" /><Label children="PostgreSQL" /><Label children="Docker" /></>}
                />
                <ProjectCard
                    title="BDSpotPer"
                    descripton="Versão personalizada do Spotify para colecionadores de música clássica. Banco de dados SQL Server acessado por aplicativo Python com interface gráfica, incluindo gestão de playlists e consultas avançadas."
                    label={<><Label children="Python" /><Label children="SQL Server" /></>}
                />
                <ProjectCard
                    title="Cenário 3D com Ray Casting"
                    descripton="Trabalho final de Computação Gráfica I. Implementa Ray Casting para geração de cenário 3D com C++ avançado, orientação a objetos e aplicação de Álgebra Linear e Geometria Analítica."
                    label={<><Label children="C++" /></>}
                />
                <ProjectCard
                    title="User Registration API"
                    descripton="API CRUD de cadastro de usuários em Express com integração a banco de dados PostgreSQL, conteinerização com Docker e padrão arquitetural MVC."
                    label={<><Label children="Express" /><Label children="PostgreSQL" /><Label children="Docker" /></>}
                />
            </div>
        </section>
    )
}

export default ProjectsSection