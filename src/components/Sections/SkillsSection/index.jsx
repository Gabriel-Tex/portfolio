import React from "react"
import "./style.css"
import SkillCard from "../../Cards/SkillCard"

function SkillsSection() {

    return (

        <section className="skills-section">
            <h1>Habilidades</h1>

            <h2>hard skills</h2>

            <div className="skill-cards">
                <SkillCard
                    title="Programação Orientada a Objetos"
                    descripton="Domínio dos principais conceitos de Programação Orientada a Objetos, 
                    como abstração, encapsulamento, herança e polimorfismo, aplicados no desenvolvimento 
                    de soluções escaláveis e de fácil manutenção. Busco estruturar o código de acordo com 
                    princípios de engenharia de software, favorecendo modularidade, reutilização, coesão e
                     baixo acoplamento."
                />

                <SkillCard
                    title="Construção e Análise de Algoritmos"
                    descripton="Sólida formação em algoritmos e estruturas de dados, adquirida ao 
                    longo da graduação e aplicada na resolução de problemas computacionais. Possuo 
                    experiência na análise de complexidade, escolha de estruturas adequadas e 
                    desenvolvimento de soluções eficientes, corretas e escaláveis."
                />

                <SkillCard
                    title="Metodologias Ágeis"
                    descripton="Experiência no desenvolvimento de projetos em equipe utilizando 
                    metodologias ágeis, especialmente Scrum. Familiaridade com planejamento de sprints, 
                    definição de tarefas, colaboração entre membros da equipe e adaptação contínua às 
                    necessidades do projeto."
                />

                <SkillCard
                    title="Desenvolvimento Front-end"
                    descripton="Experiência no desenvolvimento de interfaces web utilizando HTML, CSS, 
                    JavaScript e React. Busco criar aplicações responsivas, acessíveis e intuitivas, 
                    com foco na experiência do usuário, componentização e boas práticas de desenvolvimento 
                    frontend."
                />

                <SkillCard
                    title="Desenvolvimento Backend"
                    descripton="Experiência na construção de APIs REST utilizando principalmente Node.js, 
                    Express. Conhecimento em autenticação, integração com bancos de dados, arquitetura 
                    de aplicações e desenvolvimento de serviços escaláveis e de fácil manutenção."
                />

                <SkillCard
                    title="Modelagem de Dados"
                    descripton="Conhecimento em modelagem conceitual e relacional de bancos de dados, 
                    incluindo identificação de entidades, relacionamentos e restrições de integridade. 
                    Capacidade de estruturar modelos consistentes que atendam aos requisitos funcionais e de desempenho das aplicações."
                />

                <SkillCard
                    title="Bancos de Dados Relacionais"
                    descripton="Experiência com bancos de dados relacionais, incluindo PostgreSQL e 
                    SQL Server. Conhecimento em modelagem, consultas SQL, normalização, manipulação 
                    de dados e integração entre aplicações e sistemas de persistência."
                />

                <SkillCard
                    title="Redes de Computadores"
                    descripton="Conhecimento dos principais conceitos de redes de computadores, 
                    incluindo protocolos de comunicação, endereçamento IP, roteamento e funcionamento 
                    da Internet. Compreensão dos fundamentos que sustentam aplicações web modernas."
                />

                <SkillCard
                    title="APIs REST"
                    descripton="Experiência no desenvolvimento e consumo de APIs REST seguindo 
                    boas práticas de arquitetura web. Conhecimento em definição de rotas, tratamento 
                    de requisições HTTP, autenticação via JWT, validação de dados e integração entre 
                    frontend e backend para construção de aplicações modernas e escaláveis."
                />

                <SkillCard
                    title="Containerização com Docker"
                    descripton="Conhecimento em containerização de aplicações utilizando Docker, 
                    incluindo criação de imagens, configuração de ambientes isolados e orquestração de 
                    serviços. Utilizo a ferramenta para garantir maior consistência entre ambientes de 
                    desenvolvimento e implantação, facilitando a manutenção e a escalabilidade dos 
                    projetos."
                />

            </div>

            <h2>soft skills</h2>

            <div className="skill-cards">
                <SkillCard
                    title="Boa Comunicação"
                    descripton="Capacidade de transmitir ideias, soluções e informações técnicas de 
                    forma clara e objetiva, facilitando a colaboração em equipe, a discussão de 
                    requisitos e a comunicação com diferentes perfis de profissionais."
                />

                <SkillCard
                    title="Trabalho em Equipe"
                    descripton="Experiência em projetos colaborativos desenvolvidos durante a graduação 
                    e em atividades práticas, atuando de forma cooperativa, respeitando diferentes 
                    perspectivas e contribuindo para o alcance dos objetivos coletivos."
                />

                <SkillCard
                    title="Aprendizado Contínuo"
                    descripton="Comprometido com a evolução profissional e atualização constante de 
                    conhecimentos. Busco aprender novas tecnologias, ferramentas e conceitos, mantendo 
                    uma postura proativa diante de desafios e oportunidades de crescimento."
                />

                <SkillCard
                    title="Inglês Técnico"
                    descripton="Capacidade de compreender documentação técnica, tutoriais, artigos e 
                    materiais relacionados ao desenvolvimento de software. Utilizo o idioma como 
                    ferramenta de aprendizado contínuo e aprimoramento profissional."
                />

            </div>


        </section>

    )
}

export default SkillsSection
