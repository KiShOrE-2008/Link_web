import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const coreTechNodes = [
    { label: 'Python', angle: 0, color: '#3572A5', icon: '🐍' },
    { label: 'Cybersecurity', angle: 45, color: '#ff9f1c', icon: '🛡️' },
    { label: 'React', angle: 90, color: '#61dafb', icon: '⚛️' },
    { label: 'Networking', angle: 135, color: '#38bdf8', icon: '🌐' },
    { label: 'Linux', angle: 180, color: '#fc6d26', icon: '🐧' },
    { label: 'JavaScript', angle: 225, color: '#F7DF1E', icon: '⚡' },
    { label: 'MySQL', angle: 270, color: '#00758f', icon: '🐬' },
    { label: 'Git', angle: 315, color: '#f05033', icon: '🐙' },
];

export default function TechConstellation() {
    const containerRef = useRef(null);
    const center = { x: 250, y: 250 };
    const radius = 170;

    useGSAP(() => {
        const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (isReducedMotion) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });

        tl.fromTo('.constellation-header',
            { y: 25, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 }
        )
        .fromTo('.central-node-group',
            { scale: 0, opacity: 0, transformOrigin: '50% 50%' },
            { scale: 1, opacity: 1, duration: 0.7, ease: 'back.out(1.7)' },
            '-=0.3'
        )
        .fromTo('.constellation-line',
            { opacity: 0, strokeDasharray: 200, strokeDashoffset: 200 },
            { opacity: 0.6, strokeDashoffset: 0, duration: 0.8, stagger: 0.05, ease: 'power2.out' },
            '-=0.4'
        )
        .fromTo('.satellite-node-group',
            { scale: 0, opacity: 0, transformOrigin: '50% 50%' },
            { scale: 1, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'back.out(1.5)' },
            '-=0.6'
        );
    }, { scope: containerRef });

    return (
        <div className="constellation-wrapper" ref={containerRef}>
            <div className="constellation-header">
                <span className="section-eyebrow">SYSTEM CONSTELLATION</span>
                <h3 className="constellation-title">Core Technology Ecosystem</h3>
            </div>

            <div className="constellation-container">
                <svg className="constellation-svg" viewBox="0 0 500 500">
                    <defs>
                        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#39d353" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#39d353" stopOpacity="0" />
                        </radialGradient>
                    </defs>

                    {/* Orbit Ring */}
                    <circle 
                        cx={center.x} 
                        cy={center.y} 
                        r={radius} 
                        fill="none" 
                        stroke="rgba(255, 255, 255, 0.08)" 
                        strokeWidth="1" 
                        strokeDasharray="4 4" 
                    />

                    {/* Outer ambient glow */}
                    <circle cx={center.x} cy={center.y} r="80" fill="url(#centerGlow)" />

                    {/* Connecting Lines */}
                    {coreTechNodes.map((node, index) => {
                        const rad = (node.angle * Math.PI) / 180;
                        const nx = center.x + radius * Math.cos(rad);
                        const ny = center.y + radius * Math.sin(rad);

                        return (
                            <g key={index}>
                                <line
                                    x1={center.x}
                                    y1={center.y}
                                    x2={nx}
                                    y2={ny}
                                    stroke={node.color}
                                    strokeOpacity="0.3"
                                    strokeWidth="1.5"
                                    className="constellation-line"
                                />
                            </g>
                        );
                    })}

                    {/* Central Core Node */}
                    <g className="central-node-group">
                        <circle cx={center.x} cy={center.y} r="38" fill="#0d1117" stroke="#39d353" strokeWidth="2" className="central-node-circle" />
                        <text x={center.x} y={center.y + 5} textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="700" fontFamily="monospace">
                            &lt;Kishore/&gt;
                        </text>
                    </g>

                    {/* Satellite Nodes */}
                    {coreTechNodes.map((node, index) => {
                        const rad = (node.angle * Math.PI) / 180;
                        const nx = center.x + radius * Math.cos(rad);
                        const ny = center.y + radius * Math.sin(rad);

                        return (
                            <g key={index} className="satellite-node-group" style={{ '--node-color': node.color }}>
                                <circle cx={nx} cy={ny} r="22" fill="#0d1117" stroke={node.color} strokeWidth="1.5" className="satellite-circle" />
                                <text x={nx} y={ny + 4} textAnchor="middle" fontSize="13">
                                    {node.icon}
                                </text>
                                <text x={nx} y={ny + 36} textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontWeight="600" fontFamily="monospace">
                                    {node.label}
                                </text>
                            </g>
                        );
                    })}
                </svg>
            </div>
        </div>
    );
}

