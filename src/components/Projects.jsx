import React from 'react';
import TiltCard from './TiltCard';

const projectsData = [
    {
        id: 'projectPasswordChecker',
        icon: '🔑',
        badge: 'Security',
        title: 'Password Strength Checker',
        desc: 'Advanced password strength analysis system applying entropy algorithms, pattern checks, crack-time estimates, and secure client-side PBKDF2 hashing.',
        tags: ['Python', 'JavaScript', 'Cryptography', 'Security Analysis'],
        link: 'https://github.com/KiShOrE-2008/Password_Checker',
        linkLabel: 'View Code',
        linkId: 'linkProjPassCheck',
        isFeatured: true
    },
    {
        id: 'projectRouterMonitor',
        icon: '🌐',
        badge: 'Networking',
        title: 'Router Monitoring Dashboard',
        desc: 'Network analytics platform providing bandwidth load tracking, router packet inspections, connection status, and real-time administrative alerts.',
        tags: ['Python', 'Traffic Analysis', 'Websockets'],
        link: 'https://github.com/KiShOrE-2008',
        linkLabel: 'Explore',
        linkId: 'linkProjRouter',
        isFeatured: false
    },
    {
        id: 'projectWasteSegregation',
        icon: '♻️',
        badge: 'IoT Hardware',
        title: 'Smart Waste Segregation System',
        desc: 'Automated sorting system using hardware sensors, moisture detectors, microcontrollers (Arduino), and servo actuators to segregate trash.',
        tags: ['Arduino', 'C / C++', 'IoT Hardware'],
        link: 'https://github.com/KiShOrE-2008',
        linkLabel: 'Explore',
        linkId: 'linkProjWaste',
        isFeatured: false
    },
    {
        id: 'projectLinkWeb',
        icon: '🎛️',
        badge: 'Web UI',
        title: 'Portfolio Command Center',
        desc: 'A modern, responsive link list profile directory featuring micro-interactions, custom themes, and glassmorphic dynamic physics canvas.',
        tags: ['React', 'Vite', 'CSS3', 'Canvas API'],
        link: 'https://github.com/KiShOrE-2008/Portfolio',
        linkLabel: 'View Code',
        linkId: 'linkProjLinkweb',
        isFeatured: false
    },
    {
        id: 'projectCarsWeb',
        icon: '🏎️',
        badge: 'Web UI',
        title: 'Performance Cars Showcase',
        desc: 'A landing showcase for performance cars highlighting fluid responsive grids, smooth imagery animations, and model filters.',
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        link: 'https://github.com/KiShOrE-2008/cars',
        linkLabel: 'View Code',
        linkId: 'linkProjCars',
        isFeatured: false
    }
];

export default function Projects() {
    const featuredProject = projectsData.find((p) => p.isFeatured) || projectsData[0];
    const secondaryProjects = projectsData.filter((p) => p.id !== featuredProject.id);

    return (
        <>
            <div className="section-header">
                <span className="section-eyebrow">06 / FEATURED WORK</span>
                <h2 className="section-title">Projects Showcase</h2>
                <div className="section-divider"></div>
            </div>

            {/* Featured Project Hero Card */}
            <div className="featured-project-container">
                <TiltCard className="featured-project-card tilt-card" id={featuredProject.id}>
                    <div className="featured-card-badge-row">
                        <span className="featured-star-pill">★ FEATURED PROJECT</span>
                        <span className="project-badge">{featuredProject.badge}</span>
                    </div>

                    <div className="featured-project-body">
                        <div className="featured-icon-title">
                            <span className="featured-icon">{featuredProject.icon}</span>
                            <h3 className="featured-title">{featuredProject.title}</h3>
                        </div>

                        <p className="featured-desc">{featuredProject.desc}</p>

                        <div className="project-tags">
                            {featuredProject.tags.map((tag, tIdx) => (
                                <span key={tIdx} className="tag">{tag}</span>
                            ))}
                        </div>

                        <div className="featured-actions">
                            <a 
                                href={featuredProject.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn btn-primary featured-btn"
                                id={featuredProject.linkId}
                            >
                                Source Repository ↗
                            </a>
                        </div>
                    </div>
                </TiltCard>
            </div>

            {/* Secondary Compact Projects Grid */}
            <div className="projects-grid secondary-projects-grid">
                {secondaryProjects.map((project) => (
                    <article key={project.id} className="project-card-wrapper">
                        <TiltCard className="project-card tilt-card" id={project.id}>
                            <div className="project-header">
                                <div className="project-icon-box">{project.icon}</div>
                                <span className="project-badge">{project.badge}</span>
                            </div>
                            <h3 className="project-card-title">{project.title}</h3>
                            <p className="project-card-description">{project.desc}</p>
                            <div className="project-tags">
                                {project.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="tag">{tag}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="project-link" 
                                    id={project.linkId}
                                >
                                    {project.linkLabel} ↗
                                </a>
                            </div>
                        </TiltCard>
                    </article>
                ))}
            </div>
        </>
    );
}
