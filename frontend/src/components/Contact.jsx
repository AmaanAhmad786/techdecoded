import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaDiscord
} from "react-icons/fa";

function Contact() {
    return (
        <section id="contact" className="contact-section">

            <div className="section-heading">

                <span>GET IN TOUCH</span>

                <h2>Contact Me</h2>

                <p>
                    Have a project, opportunity or just want to connect?
                    Feel free to reach out.
                </p>

            </div>


            <div className="contact-content">

                <div className="contact-card">

                    <h3>Let's Connect</h3>

                    <p>
                        I'm always open to discussing development, cybersecurity,
                        projects, collaborations and new opportunities.
                    </p>


                    <div className="contact-links">

                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=amaanahmad44786@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="contact-icon">
                                <FaEnvelope />
                            </span>
                            <span>Email</span>
                            <span>↗</span>
                        </a>


                        <a
                            href="https://github.com/AmaanAhmad786"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="contact-icon">
                                <FaGithub />
                            </span>
                            <span>GitHub</span>
                            <span>↗</span>
                        </a>


                        <a
                            href="YOUR_LINKEDIN_LINK"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="contact-icon">
                                <FaLinkedin />
                            </span>
                            <span>LinkedIn</span>
                            <span>↗</span>
                        </a>


                        <a
                            href="https://www.instagram.com/techdecoded2026/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="contact-icon">
                                <FaInstagram />
                            </span>
                            <span>Instagram</span>
                            <span>↗</span>
                        </a>


                        <a
                            href="https://discord.gg/VKFy2NCqR3"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="contact-icon">
                                <FaDiscord />
                            </span>
                            <span>Discord</span>
                            <span>↗</span>
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Contact;