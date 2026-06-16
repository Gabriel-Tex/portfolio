import React, { useState } from "react"
import "./style.css"

const EXPERIENCES = [
    {
        role: "Membro",
        company: "Grupo de Estudos em Programação Competitiva (GEPC)",
        type: "Atividade Extracurricular",
        location: "UFC - Fortaleza, CE",
        startDate: "2024.1",
        endDate: "2024.2",
        logo: null,
        description: `Fui membro do grupo de programação competitiva da UFC, no qual pude aprimorar meu raciocínio lógico e algorítmico
                        para resolução de problemas.`,
        skills: ["C++", "Algoritmos", "Estrutura de Dados", "Lógica de programação"],
    },
    {
        role: "Colaborador em software livre",
        company: "Colaboração em Projetos de Software Livre (CPSL)",
        type: "Atividade de Extensão",
        location: "UFC - Fortaleza, CE",
        startDate: "2025.2",
        endDate: "2026.1",
        logo: null,
        description: `Fiz parte da disciplina de extensão CPSL, na qual pude contribuir com o projeto GASH, o que me permitiu adquirir
                    conhecimentos acerca de versionamento de código, metodologias ágeis de produção, testes unitários em python (pytest) e
                    documentação de software.`,
        skills: ["Scrum", "Documentação", "Git", "GitHub", "Testes de Software"],
    },
]

function ExperienceEntry({ experience, isLast }) {
    const [expanded, setExpanded] = useState(false)
    const { role, company, type, location, startDate, endDate, logo, description, skills } = experience
    const isActive = endDate === "Presente"

    return (
        <div className={`exp-entry${isLast ? " exp-entry--last" : ""}`}>

            <div className="exp-timeline">
                <span className={`exp-dot${isActive ? " exp-dot--active" : ""}`} />
                {!isLast && <span className="exp-spine" />}
            </div>

            <div className="exp-card">

                <div className="exp-header" onClick={() => setExpanded((v) => !v)}>
                    <div className="exp-logo-placeholder" aria-hidden="true">
                        {logo
                            ? <img src={logo} alt={`${company} logo`} />
                            : company.charAt(0)
                        }
                    </div>

                    <div className="exp-meta">
                        <h3 className="exp-role">{role}</h3>
                        <p className="exp-company">
                            {company}
                            <span className="exp-type">&nbsp;·&nbsp;{type}</span>
                        </p>
                        <p className="exp-dates">
                            {startDate} – {endDate}
                        </p>
                        <p className="exp-location">{location}</p>
                    </div>

                    <button
                        className={`exp-toggle${expanded ? " exp-toggle--open" : ""}`}
                        aria-expanded={expanded}
                        aria-label={expanded ? "Recolher" : "Expandir"}
                    >
                        ▾
                    </button>
                </div>

                <div className={`exp-body${expanded ? " exp-body--visible" : ""}`}>
                    <p className="exp-description">{description}</p>
                    <ul className="exp-skills" aria-label="Tecnologias utilizadas">
                        {skills.map((s) => (
                            <li key={s} className="exp-skill-tag">{s}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

function ExperienceSection() {
    return (
        <section className="experience-section">
            <h1>Experiência</h1>

            <div className="exp-timeline-list" role="list">
                {EXPERIENCES.map((exp, i) => (
                    <ExperienceEntry
                        key={i}
                        experience={exp}
                        isLast={i === EXPERIENCES.length - 1}
                    />
                ))}
            </div>
        </section>
    )
}

export default ExperienceSection
