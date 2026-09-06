import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const footerRef = useRef(null);

    useGSAP(() => {
        const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (isReducedMotion) return;

        gsap.fromTo('.footer-grid',
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: footerRef.current.querySelector('.footer-grid'),
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        gsap.fromTo('.footer-bottom',
            { y: 15, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: footerRef.current.querySelector('.footer-bottom'),
                    start: 'top 90%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }, { scope: footerRef });

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer" ref={footerRef}>
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <a href="#hero" className="footer-logo">
                            <span className="logo-symbol">&lt;</span>Kishore<span className="logo-accent">.kv</span><span className="logo-symbol">/&gt;</span>
                        </a>
                        <p className="footer-bio">
                            B.Tech Information Technology student specializing in Cybersecurity, Networking, and Software Development. Dedicated to building secure, scalable, and robust digital solutions.
                        </p>
                        <div className="footer-socials">
                            <a href="https://github.com/KiShOrE-2008" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
                                <span>🐙</span>
                            </a>
                            <a href="https://www.linkedin.com/in/kishore-k-v-090491349/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                                <span>🔗</span>
                            </a>
                            <a href="mailto:kv.kishorevijay@gmail.com" className="social-icon-btn" aria-label="Email">
                                <span>📧</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links-col">
                        <h4>Navigation</h4>
                        <ul className="footer-links">
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#education">Education</a></li>
                            <li><a href="#experience">Experience</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-col">
                        <h4>Explore</h4>
                        <ul className="footer-links">
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#certifications">Certifications</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact details & Action */}
                    <div className="footer-contact-info">
                        <h4>Get In Touch</h4>
                        <div className="footer-contact-details">
                            <p>📍 Chennai, Tamil Nadu, India</p>
                            <p>📧 <a href="mailto:kv.kishorevijay@gmail.com">kv.kishorevijay@gmail.com</a></p>
                        </div>
                        <button className="back-to-top-btn" onClick={handleScrollToTop} aria-label="Scroll to top">
                            Back to Top ↑
                        </button>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <p className="copyright">&copy; {new Date().getFullYear()} Kishore K V. All rights reserved.</p>
                    <span className="footer-system-status">● SYSTEM ONLINE</span>
                    <p className="footer-tech">Designed & Engineered with React + Vite</p>
                </div>
            </div>
        </footer>
    );
}


