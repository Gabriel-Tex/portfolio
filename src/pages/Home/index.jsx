import React from "react"
import "./style.css"
import Header from "../../components/Layout/Header"
import Footer from "../../components/Layout/Footer"
import HeroSection from "../../components/Sections/HeroSection"
import StackSection from "../../components/Sections/StackSection"
import SkillsSection from "../../components/Sections/SkillsSection"
import ProjectsSection from "../../components/Sections/ProjectsSection"
import AboutMeSection from "../../components/Sections/AboutMeSection"

function Home() {

    return (
        <>
            <Header />


            <main>
                <HeroSection />

                <StackSection />

                <SkillsSection />

                <ProjectsSection />

                <AboutMeSection />

            </main >

            <Footer />
        </>
    )
}

export default Home
