import React, { useState, useEffect } from 'react';

export default function Navbar({ activeSection }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mobileJourneyExpanded, setMobileJourneyExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Body scroll locking when mobile menu is active
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => document.body.classList.remove('no-scroll');
    }, [isMenuOpen]);

    // Close mobile menu on outside click
    useEffect(() => {
        const handleOutsideClick = (e) => {
            const navMenu = document.getElementById('navMenu');
            const menuToggle = document.getElementById('menuToggle');
            if (isMenuOpen && navMenu && menuToggle && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, [isMenuOpen]);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
        setMobileJourneyExpanded(false);
    };

    // Check if any section inside Journey is currently active
    const isJourneyActive = ['education', 'experience', 'certifications'].includes(activeSection);

    const journeySubLinks = [
        { id: 'education', label: 'Education' },
        { id: 'experience', label: 'Experience' },
        { id: 'certifications', label: 'Certifications' },
    ];

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="mainNavbar">
            <div className="nav-container">
                {/* Brand Identity Logo */}
                <a href="#hero" className="nav-logo" id="navLogo" onClick={handleLinkClick}>
                    <span className="logo-sym-open">&lt;</span>
                    <span className="logo-name">Kishore</span>
                    <span className="logo-ext">.kv</span>
                    <span className="logo-sym-close">/&gt;</span>
                </a>

                {/* Subtle Vertical Divider */}
                <div className="nav-divider"></div>

                {/* Mobile Menu Hamburger Toggle */}
                <button
                    className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
                    id="menuToggle"
                    aria-label="Toggle Navigation Menu"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Navigation Menu */}
                <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`} id="navMenu">
                    {/* Home Link */}
                    <a
                        href="#hero"
                        className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
                        id="linkHome"
                        onClick={handleLinkClick}
                    >
                        Home
                    </a>

                    {/* About Link */}
                    <a
                        href="#about"
                        className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                        id="linkAbout"
                        onClick={handleLinkClick}
                    >
                        About
                    </a>

                    {/* Journey Grouped Dropdown */}
                    <div className={`nav-dropdown-wrapper ${isJourneyActive ? 'active-parent' : ''}`}>
                        <a
                            href="#education"
                            className={`nav-link dropdown-trigger ${isJourneyActive ? 'active' : ''}`}
                            onClick={(e) => {
                                if (window.innerWidth < 992) {
                                    e.preventDefault();
                                    setMobileJourneyExpanded(!mobileJourneyExpanded);
                                } else {
                                    handleLinkClick();
                                }
                            }}
                        >
                            Journey <span className="dropdown-caret">▾</span>
                        </a>

                        {/* Desktop & Mobile Glass Dropdown Menu */}
                        <div className={`nav-dropdown-menu ${mobileJourneyExpanded ? 'show-mobile' : ''}`}>
                            {journeySubLinks.map((sub) => (
                                <a
                                    key={sub.id}
                                    href={`#${sub.id}`}
                                    className={`dropdown-item ${activeSection === sub.id ? 'active' : ''}`}
                                    onClick={handleLinkClick}
                                >
                                    {sub.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Skills Link */}
                    <a
                        href="#skills"
                        className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                        id="linkSkills"
                        onClick={handleLinkClick}
                    >
                        Skills
                    </a>

                    {/* Projects Link */}
                    <a
                        href="#projects"
                        className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                        id="linkProjects"
                        onClick={handleLinkClick}
                    >
                        Projects
                    </a>

                    {/* Coding Activity Link */}
                    <a
                        href="#activity"
                        className={`nav-link ${activeSection === 'activity' ? 'active' : ''}`}
                        id="linkActivity"
                        onClick={handleLinkClick}
                    >
                        Activity
                    </a>

                    {/* Contact CTA Endpoint */}
                    <a
                        href="#contact"
                        className={`nav-contact-btn ${activeSection === 'contact' ? 'active' : ''}`}
                        id="linkContact"
                        onClick={handleLinkClick}
                    >
                        Contact <span className="cta-arrow">↗</span>
                    </a>
                </nav>
            </div>
        </header>
    );
}
