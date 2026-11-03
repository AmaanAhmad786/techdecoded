function TechStack() {
    return (
        <section id="tech" className="tech-section">

            <div className="section-heading">

                <span>WHAT I WORK WITH</span>

                <h2>Tech Stack</h2>

                <p>
                    Technologies and tools I use while building projects,
                    exploring development and learning cybersecurity.
                </p>

            </div>


            <div className="tech-categories">

                <div className="tech-card">
                    <h3>Frontend</h3>

                    <div className="tech-list">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>React</span>
                    </div>
                </div>


                <div className="tech-card">
                    <h3>Backend</h3>

                    <div className="tech-list">
                        <span>Java</span>
                        <span>Spring Boot</span>
                        <span>PHP</span>
                        <span>Python</span>
                    </div>
                </div>


                <div className="tech-card">
                    <h3>Database</h3>

                    <div className="tech-list">
                        <span>MySQL</span>
                        <span>PostgreSQL</span>
                        <span>MongoDB</span>
                    </div>
                </div>


                <div className="tech-card">
                    <h3>Cybersecurity</h3>

                    <div className="tech-list">
                        <span>OWASP</span>
                        <span>Burp Suite</span>
                        <span>Nmap</span>
                        <span>Kali Linux</span>
                    </div>
                </div>


                <div className="tech-card">
                    <h3>DevOps & Cloud</h3>

                    <div className="tech-list">
                        <span>Git</span>
                        <span>Docker</span>
                        <span>Kubernetes</span>
                        <span>AWS</span>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default TechStack;