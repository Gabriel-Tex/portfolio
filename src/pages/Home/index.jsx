import React from "react"
import "./style.css"
import Header from "../../components/Layout/Header"
import Footer from "../../components/Layout/Footer"
import TeixeiraIcon from "../../assets/teixeira-icon.png"
import Button from "../../components/Ui/Button"
import GithubIcon from "../../assets/github.svg"
import EmailIcon from "../../assets/baseline-email.svg"
import CvIcon from "../../assets/cv.svg"


function Home() {

    return (
        <>
            <Header />

            <main>
                <section className="hero">
                    <div className="hero-infos" >

                        <img className="teixeira-icon" src={TeixeiraIcon} alt="Teixeira icon" />

                        <div className="hero-about-me">
                            <h1> Gabriel Teixeira </h1>

                            <p>
                                Desenvolvedor Full Stack apaixonado por transformar
                                problemas em soluções através da tecnologia, com interesse
                                pelas mais diversas áreas do desenvolvimento web e da engenharia
                                de software, buscando criar aplicações capazes de gerar impacto real.
                            </p>

                            <div className="btn-container">

                                <Button
                                    className="btn-contact"
                                    id="btn-github"
                                >
                                    <img src={GithubIcon} alt="github icon" />
                                    GitHub
                                </Button>

                                <Button
                                    className="btn-contact"
                                    id="btn-cv"
                                >
                                    <img src={CvIcon} alt="curriculum icon" />
                                    Currículo
                                </Button>

                                <Button
                                    className="btn-contact"
                                    id="btn-email"
                                >
                                    <img src={EmailIcon} alt="email icon" />
                                    Email
                                </Button>
                            </div>

                        </div>
                    </div>

                </section>

                <section className="stack-section">
                    
                </section>
            </main >

            <Footer />
        </>
    )
}

export default Home
