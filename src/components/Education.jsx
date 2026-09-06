import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import TiltCard from './TiltCard';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
    const eduRef = useRef(null);

    useGSAP(() => {
        const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (isReducedMotion) return;

        // Section header reveal
        gsap.fromTo('.section-header',
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: eduRef.current.querySelector('.section-header'),
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Timeline Line Progress Drawing
        gsap.fromTo('.edu-timeline-line',
            { scaleY: 0, transformOrigin: 'top center' },
            {
                scaleY: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: eduRef.current.querySelector('.education-timeline-container'),
                    start: 'top 75%',
                    end: 'bottom 25%',
                    scrub: 1
                }
            }
        );

        // Timeline Items & Nodes Entrance Reveal
        const items = gsap.utils.toArray('.edu-timeline-item');
        items.forEach((item, index) => {
            const card = item.querySelector('.edu-timeline-card');
            const node = item.querySelector('.edu-timeline-node');
            const xOffset = index % 2 === 0 ? -35 : 35;

            gsap.fromTo(node,
                { scale: 0.6, opacity: 0.3 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    ease: 'back.out(1.5)',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            gsap.fromTo(card,
                { x: xOffset, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
    }, { scope: eduRef });

    return (
        <div ref={eduRef} className="education-container-inner" style={{ width: '100%' }}>
            <div className="section-header">
                <span className="section-eyebrow">02 / EDUCATION</span>
                <h2 className="section-title">Education & Academic Journey</h2>
                <div className="section-divider"></div>
            </div>

            <div className="education-timeline-container">
                <div className="edu-timeline-line"></div>

                {/* CIT B.Tech IT Item */}
                <div className="edu-timeline-item">
                    <div className="edu-timeline-node">
                        <span className="node-glow"></span>
                    </div>
                    <TiltCard className="edu-timeline-card tilt-card">
                        <div className="edu-header">
                            <div className="edu-icon">🎓</div>
                            <div className="edu-meta">
                                <span className="edu-period">Sep 2025 – May 2029</span>
                                <span className="edu-location">Chennai, India</span>
                            </div>
                        </div>
                        <h3 className="edu-degree">B.Tech, Information Technology</h3>
                        <span className="edu-institution">Chennai Institute of Technology</span>
                        <p className="edu-description">
                            Pursuing specialized training in software architectures, cybersecurity diagnostics, computer networks, and traffic analysis. Actively engaging in code challenges and building secure IoT and web applications.
                        </p>
                        <div className="edu-badges">
                            <span className="edu-badge">Computer Networks</span>
                            <span className="edu-badge">Cyber Security</span>
                            <span className="edu-badge">Software Engineering</span>
                        </div>
                    </TiltCard>
                </div>

                {/* High School & IIT Madras Course Item */}
                <div className="edu-timeline-item">
                    <div className="edu-timeline-node">
                        <span className="node-glow"></span>
                    </div>
                    <TiltCard className="edu-timeline-card tilt-card">
                        <div className="edu-header">
                            <div className="edu-icon">🏫</div>
                            <div className="edu-meta">
                                <span className="edu-period">Apr 2024 – Mar 2025</span>
                                <span className="edu-location">India</span>
                            </div>
                        </div>
                        <h3 className="edu-degree">12th Grade (PCMCS) & Data Science Certification</h3>
                        <span className="edu-institution">Shri Vidhya Mandhir & IIT Madras</span>
                        <p className="edu-description">
                            Completed higher secondary education specializing in Physics, Chemistry, Mathematics, and Computer Science (PCMCS) with a 70% grade. Simultaneously completed an 8-week course in <strong>Data Science & AI</strong> at <strong>IIT Madras</strong>.
                        </p>
                        <div className="edu-badges">
                            <span className="edu-badge">IIT Madras AI & DS</span>
                            <span className="edu-badge">Mathematics</span>
                            <span className="edu-badge">Computer Science</span>
                        </div>
                    </TiltCard>
                </div>
            </div>
        </div>
    );
}

