function About() {
    return (
        <section id="about" className="about-section">

            <p className="section-tag">
                ABOUT ME
            </p>

            <h2>Who I Am</h2>

            <div className="about-content">

                <div className="about-text">

                    <p>
                        I'm a developer and technology enthusiast who enjoys
                        building web applications, exploring cybersecurity and
                        learning modern technologies.
                    </p>

                    <p>
                        Alongside development, I create technology-focused
                        content through TechDecoded and gaming content through
                        TGOG LIVE.
                    </p>

                    <p>
                        Currently, I'm focused on strengthening my skills in
                        Java, Spring Boot, React, backend development and
                        cybersecurity.
                    </p>

                    {/* Education */}
                    <div className="highlight education-card">
                        <h3>Education</h3>

                        <p>
                            MCA — CDAC, Noida
                            <br />
                            2024–2026
                        </p>

                        <p>
                            BCA — Guru Gobind Singh Indraprastha University
                            <br />
                            2020–2023
                        </p>
                    </div>

                </div>

                <div className="about-highlights">

                    <div className="highlight">
                        <h3>Development</h3>
                        <p>Java, Spring Boot, React & Web Development</p>
                    </div>

                    <div className="highlight">
                        <h3>Cybersecurity</h3>
                        <p>Security, Web Security & Ethical Hacking</p>
                    </div>

                    <div className="highlight">
                        <h3>Content</h3>
                        <p>TechDecoded & TGOG LIVE</p>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;