import './index.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Content from './components/Content'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Content />
            <TechStack />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </>
    )
}

export default App