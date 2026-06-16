import React, { useRef, useCallback } from "react"
import "./style.css"
import SkillCard from "../../Cards/SkillCard"

function ButtonCarousel({ items }) {
    const trackRef = useRef(null)

    const CARD_WIDTH = 276
    const GAP = 24
    const STEP = CARD_WIDTH + GAP

    const scroll = useCallback((direction) => {
        const track = trackRef.current
        if (!track) return

        const totalOriginal = items.length * STEP
        let next = track.scrollLeft + direction * STEP

        if (next >= totalOriginal * 2) {
            track.scrollLeft = next - totalOriginal
            return
        }
        if (next < 0) {
            track.scrollLeft = next + totalOriginal
            return
        }

        track.scrollTo({ left: next, behavior: "smooth" })
    }, [items.length, STEP])

    return (
        <div className="button-carousel">
            <button
                className="carousel-btn carousel-btn--prev"
                onClick={() => scroll(-1)}
                aria-label="Anterior"
            >
                &#8592;
            </button>

            <div className="button-carousel__viewport">
                <div className="button-carousel__track" ref={trackRef}>

                    {items.map((item, i) => (
                        <SkillCard key={`a-${i}`} title={item.title} descripton={item.descripton} />
                    ))}

                    {items.map((item, i) => (
                        <SkillCard key={`b-${i}`} title={item.title} descripton={item.descripton} />
                    ))}
                </div>
            </div>

            <button
                className="carousel-btn carousel-btn--next"
                onClick={() => scroll(1)}
                aria-label="Próximo"
            >
                &#8594;
            </button>
        </div>
    )
}

const HARD_SKILLS = [
    {
        title: "Programação Orientada a Objetos",
        descripton: `Domínio dos principais conceitos de POO — abstração, encapsulamento, herança e polimorfismo —
        aplicados na construção de soluções escaláveis. Busco estruturar o código seguindo princípios de
        engenharia de software, favorecendo modularidade, reutilização e baixo acoplamento.`,
    },
    {
        title: "Construção e Análise de Algoritmos",
        descripton: `Sólida formação em algoritmos e estruturas de dados, adquirida ao longo da graduação.
        Experiência em análise de complexidade, escolha de estruturas adequadas e desenvolvimento
        de soluções eficientes, corretas e escaláveis.`,
    },
    {
        title: "Metodologias Ágeis",
        descripton: `Experiência com Scrum: planejamento de sprints, definição de tarefas, colaboração
        entre membros e adaptação contínua às necessidades do projeto.`,
    },
    {
        title: "Desenvolvimento Front-end",
        descripton: `Experiência em HTML, CSS, JavaScript e React. Foco em interfaces responsivas,
        acessíveis e intuitivas, com ênfase em componentização e boas práticas de desenvolvimento.`,
    },
    {
        title: "Desenvolvimento Backend",
        descripton: `Construção de APIs REST com Node.js e Express. Conhecimento em autenticação,
        integração com bancos de dados e arquitetura de serviços escaláveis.`,
    },
    {
        title: "Modelagem de Dados",
        descripton: `Modelagem conceitual e relacional, incluindo entidades, relacionamentos e
        restrições de integridade. Capacidade de estruturar modelos consistentes e eficientes.`,
    },
    {
        title: "Bancos de Dados Relacionais",
        descripton: `Experiência com PostgreSQL e SQL Server: modelagem, consultas SQL, normalização
        e integração entre aplicações e sistemas de persistência.`,
    },
    {
        title: "Redes de Computadores",
        descripton: `Conhecimento de protocolos de comunicação, endereçamento IP, roteamento e
        fundamentos da Internet que sustentam aplicações web modernas.`,
    },
    {
        title: "APIs REST",
        descripton: `Desenvolvimento e consumo de APIs REST seguindo boas práticas. Domínio de rotas,
        HTTP, autenticação JWT, validação e integração frontend–backend.`,
    },
    {
        title: "Containerização com Docker",
        descripton: `Criação de imagens, configuração de ambientes isolados e orquestração de serviços.
        Uso da ferramenta para garantir consistência entre ambientes de desenvolvimento e produção.`,
    },
]

const SOFT_SKILLS = [
    {
        title: "Boa Comunicação",
        descripton: `Capacidade de transmitir ideias e soluções técnicas de forma clara, facilitando
        a colaboração em equipe e a comunicação com diferentes perfis de profissionais.`,
    },
    {
        title: "Trabalho em Equipe",
        descripton: `Experiência em projetos colaborativos durante a graduação, atuando de forma
        cooperativa e contribuindo para o alcance dos objetivos coletivos.`,
    },
    {
        title: "Aprendizado Contínuo",
        descripton: `Comprometido com evolução profissional e atualização constante. Postura proativa
        diante de novos desafios e oportunidades de crescimento.`,
    },
    {
        title: "Inglês Técnico",
        descripton: `Leitura e compreensão de documentação técnica, tutoriais e artigos em inglês,
        utilizando o idioma como ferramenta de aprendizado e aprimoramento profissional.`,
    },
]

function SkillsSection() {
    return (
        <section className="skills-section">
            <h1>Habilidades</h1>

            <h2>hard skills</h2>
            <ButtonCarousel items={HARD_SKILLS} />

            <h2>soft skills</h2>
            <ButtonCarousel items={SOFT_SKILLS} />
        </section>
    )
}

export default SkillsSection
