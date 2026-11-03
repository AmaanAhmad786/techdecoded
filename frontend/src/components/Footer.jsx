const socialLinks = [
    {
        name: "Email",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=amaanahmad44786@gmail.com",
        icon: "email",
    },
    {
        name: "GitHub",
        url: "https://github.com/AmaanAhmad786",
        icon: "github",
    },
    {
        name: "LinkedIn",
        url: "YOUR_LINKEDIN_LINK",
        icon: "linkedin",
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/techdecoded2026/",
        icon: "instagram",
    },
    {
        name: "YouTube",
        url: "https://www.youtube.com/@TechDecoded2026yt",
        icon: "youtube",
    },
    {
        name: "Discord",
        url: "https://discord.gg/VKFy2NCqR3",
        icon: "discord",
    },
];

function SocialIcon({ type }) {
    const common = {
        width: 25,
        height: 25,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": true,
    };

    switch (type) {
        case "email":
            return (
                <svg {...common}>
                    <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 8L4 7v10h16V7l-8 6Zm0-2 7-4H5l7 4Z" />
                </svg>
            );

        case "github":
            return (
                <svg {...common}>
                    <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.75 2.15 3.62 1.54.1-.73.4-1.22.72-1.5-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.16a10.7 10.7 0 0 1 5.6 0c2.14-1.46 3.08-1.16 3.08-1.16.61 1.55.23 2.69.12 2.98.72.79 1.15 1.8 1.15 3.03 0 4.33-2.63 5.29-5.14 5.57.4.35.77 1.03.77 2.08v3.09c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z" />
                </svg>
            );

        case "linkedin":
            return (
                <svg {...common}>
                    <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.8H4.98V9.3h2.95v9.5ZM6.45 8a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.35 10.8h-2.94v-4.62c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.7H9.6V9.3h2.82v1.3h.04c.4-.74 1.35-1.53 2.78-1.53 2.98 0 3.56 1.96 3.56 4.5v5.23Z" />
                </svg>
            );

        case "instagram":
            return (
                <svg {...common}>
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm5 3a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2.2a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2Zm5.1-3.7a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
                </svg>
            );

        case "youtube":
            return (
                <svg {...common}>
                    <path d="M23 7.1a3 3 0 0 0-2.1-2.12C19.05 4.5 12 4.5 12 4.5s-7.05 0-8.9.48A3 3 0 0 0 1 7.1 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.9 3 3 0 0 0 2.1 2.12c1.85.48 8.9.48 8.9.48s7.05 0 8.9-.48A3 3 0 0 0 23 16.9a31 31 0 0 0 .5-4.9 31 31 0 0 0-.5-4.9ZM9.7 15.2V8.8l5.6 3.2-5.6 3.2Z" />
                </svg>
            );

        case "discord":
            return (
                <svg {...common}>
                    <path d="M19.7 5.1A18.4 18.4 0 0 0 15.2 3l-.56 1.14a16.8 16.8 0 0 0-5.28 0L8.8 3a18.4 18.4 0 0 0-4.5 2.1C1.45 9.3.68 13.4 1.06 17.4a18.1 18.1 0 0 0 5.52 2.8l1.2-1.96c-.66-.24-1.28-.55-1.87-.92l.46-.36c3.6 1.68 7.51 1.68 11.07 0l.47.36c-.6.37-1.22.68-1.88.92l1.2 1.96a18.1 18.1 0 0 0 5.52-2.8c.45-4.63-.77-8.7-3.05-12.3ZM8.9 14.6c-1.08 0-1.97-.98-1.97-2.18s.87-2.19 1.97-2.19c1.1 0 1.98.99 1.97 2.19 0 1.2-.87 2.18-1.97 2.18Zm6.2 0c-1.09 0-1.97-.98-1.97-2.18s.87-2.19 1.97-2.19c1.1 0 1.98.99 1.97 2.19 0 1.2-.87 2.18-1.97 2.18Z" />
                </svg>
            );

        default:
            return null;
    }
}

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="footer-brand">
                    <h3>
                        TECH <span>DECODED</span>
                    </h3>
                    <p>Building, learning and decoding technology.</p>
                </div>

                <nav className="footer-links" aria-label="Footer navigation">
                    <a href="#home">Home</a>
                    <a href="#tech">Tech</a>
                    <a href="#content">Content</a>
                    <a href="#projects">Projects</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>

                <div className="footer-socials">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            className="footer-social-link"
                            aria-label={social.name}
                            title={social.name}
                            target={social.name === "Email" ? undefined : "_blank"}
                            rel="noopener noreferrer"
                        >
                            <SocialIcon type={social.icon} />
                        </a>
                    ))}
                </div>

                <div className="footer-divider">
                    <span />
                    <i />
                    <span />
                </div>

                <div className="footer-bottom">
                    <p className="footer-copy">
                        © {new Date().getFullYear()} TechDecoded. All rights reserved.
                    </p>

                    <p className="footer-made">
                        <span>♥</span> Built with passion for technology
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
