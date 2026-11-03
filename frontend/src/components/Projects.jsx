function Projects() {
    return (
        <section id="projects" className="projects-section">

            <p className="section-tag">
                WHAT I BUILD
            </p>

            <h2>Projects</h2>

            <p className="section-description">
                A collection of projects I've built while exploring software
                development, AI, cybersecurity and modern web technologies.
            </p>


            <div className="project-cards">

                <div className="project-card">
                    <h3>AI Trip Planner</h3>

                    <p>
                        An AI-powered trip planning application that helps users
                        create personalized travel plans using Gemini.
                    </p>

                    <div className="project-tech">
                        <span>React</span>
                        <span>Firebase</span>
                        <span>Gemini</span>
                    </div>

                    <a href="#" className="project-btn">
                        View Project
                    </a>
                </div>


                <div className="project-card">
                    <h3>SlothShield</h3>

                    <p>
                        A cybersecurity project focused on detecting and
                        analyzing suspicious network activity using machine
                        learning.
                    </p>

                    <div className="project-tech">
                        <span>Python</span>
                        <span>Machine Learning</span>
                        <span>Cybersecurity</span>
                    </div>

                    <a href="#" className="project-btn">
                        View Project
                    </a>
                </div>


                <div className="project-card">
                    <h3>E-Commerce Clothing Website</h3>

                    <p>
                        A modern e-commerce website for clothing products with
                        a clean shopping experience and responsive interface.
                    </p>

                    <div className="project-tech">
                        <span>Web Development</span>
                        <span>React</span>
                        <span>Spring boot</span>
                        <span>Spring Security</span>
                        <span>PostgreSQL</span>
                    </div>

                    <a href="#" className="project-btn">
                        View Project
                    </a>
                </div>


                <div className="project-card">
                    <h3>Portfolio Website</h3>

                    <p>
                        A personal portfolio website showcasing my skills,
                        projects, experience and work.
                    </p>

                    <div className="project-tech">
                        <span>React</span>
                        <span>JavaScript</span>
                        <span>CSS</span>
                    </div>

                    <a href="#" className="project-btn">
                        View Project
                    </a>
                </div>


                <div className="project-card">
                    <h3>React Authenticator</h3>

                    <p>
                        A small React project exploring user authentication
                        and protected application functionality.
                    </p>

                    <div className="project-tech">
                        <span>React</span>
                        <span>JavaScript</span>
                        <span>Authentication</span>
                    </div>

                    <a href="#" className="project-btn">
                        View Project
                    </a>
                </div>


                <div className="project-card">
                    <h3>AI Resume Analyzer</h3>

                    <p>
                        An upcoming AI-powered application designed to analyze
                        resumes and provide skills, job matching and improvement
                        suggestions.
                    </p>

                    <div className="project-tech">
                        <span>React</span>
                        <span>Spring Boot</span>
                        <span>Gemini</span>
                    </div>

                    <a href="#" className="project-btn">
                        Coming Soon
                    </a>
                </div>

            </div>

        </section>
    );
}

export default Projects;