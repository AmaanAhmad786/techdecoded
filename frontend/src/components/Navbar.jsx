import profileImage from '../assets/Profile.jpeg';

function Navbar() {
    return (
        <nav>
            <div className="brand">
                <img
                    src={profileImage}
                    alt="Tech Decoded"
                    className="profile-avatar"
                />

                <div className="logo">
                    TECH <span>DECODED</span>
                </div>
            </div>

            <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#tech">Tech</a>
                <a href="#content">Content</a>
                <a href="#projects">Projects</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;
