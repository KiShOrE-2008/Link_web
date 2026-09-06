import React from 'react';
import TiltCard from './TiltCard';

export default function Education() {
    return (
        <>
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
        </>
    );
}
