/* === EDUCATION DATA === */
const EDUCATION_DATA = [
    {
        degree: '42 Berlin Coding School',
        school: '42 Berlin',
        location: 'Berlin, Germany',
        date: 'Aug 2022 - Present',
        description: 'Full-time intensive coding bootcamp focusing on C fundamentals, Unix systems, algorithms, and collaborative development.'
    },
    {
        degree: 'University Prep Certificate Programme: Computer Science',
        school: 'Perm State University (PSU)',
        location: 'Perm, Russia',
        date: 'Sep 2019 - May 2021',
        description: 'CS Fundamentals, Assembler, Pascal, HTML + CSS, Python. Grade: 1.2 (German system), 4.8/5.0 (Russian system)',
        details: ['CS Fundamentals', 'Assembler', 'Pascal', 'HTML + CSS', 'Python']
    },
    {
        degree: 'Blockchain & Cryptocurrency (2.5 ECTS)',
        school: 'Perm State University',
        location: 'Perm, Russia',
        date: 'Feb 2025 - Apr 2025',
        description: 'Professional certificate course in blockchain technology and cryptocurrency.'
    },
    {
        degree: 'Python Programming & Practice (2.5 ECTS)',
        school: 'Perm State University',
        location: 'Perm, Russia',
        date: 'Feb 2025 - Apr 2025',
        description: 'Professional certificate course in Python programming with practical applications.'
    }
];

/* === ACHIEVEMENTS DATA === */
const ACHIEVEMENTS_DATA = [
    {
        title: 'Presenter at BSBI International Conference on AI',
        date: 'June 2023',
        location: 'Berlin',
        description: 'Presented "Respect for Human Rights in AI Development" at the 1st BSBI International Conference on Artificial Intelligence.'
    },
    {
        title: 'Research Papers (Pending Publication)',
        date: 'In Progress',
        description: 'Multiple research papers awaiting publication on wine quality prediction and NYC property analytics.'
    }
];

/* === PROJECTS DATA === */
const PROJECTS_DATA = {
    featured: [
        {
            id: 'cura-hackathon',
            title: 'Cura AI Assistant',
            summary: 'AI-powered healthcare chatbot built for international hackathon. Won for technical innovation.',
            tags: ['TypeScript', 'AI', 'React', 'Team Project'],
            outcome: '🏆 Winner - Hackathon Competition',
            links: {
                github: null,
                demo: null,
                codeUnavailable: true
            },
            details: [
                {
                    heading: 'Role',
                    points: ['Developed TypeScript module for AI response processing', 'Implemented natural language understanding layer', 'Led backend architecture decisions']
                },
                {
                    heading: 'Technology Stack',
                    points: ['TypeScript', 'React', 'Node.js', 'AI/ML Integration']
                },
                {
                    heading: 'Impact',
                    points: ['Won first place in international competition', 'Processed 500+ medical inquiries', 'Team collaboration across 4 developers']
                }
            ]
        },
        {
            id: 'thesis-prototype',
            title: 'Big Data Analytics Thesis Prototype',
            summary: 'Proprietary research prototype on large-scale data analysis and AI applications.',
            tags: ['Python', 'ML', 'Data Science', 'Research'],
            outcome: '🔒 Private - Available Upon Request',
            links: {
                github: null,
                demo: null,
                codeUnavailable: true
            },
            details: [
                {
                    heading: 'Overview',
                    points: ['Advanced analytics system for large-scale datasets', 'Machine learning models for predictive analysis', 'Research-grade code and methodologies']
                },
                {
                    heading: 'Technologies',
                    points: ['Python with pandas, numpy, scikit-learn', 'Data visualization with matplotlib, seaborn', 'SQL for database operations']
                },
                {
                    heading: 'Research Focus',
                    points: ['Big Data processing techniques', 'AI model optimization', 'System performance at scale', 'Contact for more details: al.chigvintseva@gmail.com']
                }
            ]
        }
    ],
    fortyTwoHighlights: [
        {
            id: 'libft',
            title: 'libft - C Library',
            summary: 'Custom implementation of standard C library functions from scratch.',
            tags: ['C', 'Fundamentals'],
            outcome: '✓ Complete',
            links: {
                github: 'https://github.com/chigvintseva/libft',
                demo: null
            },
            details: [
                {
                    heading: 'Key Functions',
                    points: ['String manipulation (strlen, strcpy, strdup, etc)', 'Memory operations (memcpy, memmove, memset)', 'Character classification and conversion', 'Linked list utilities']
                },
                {
                    heading: 'Learning Goals',
                    points: ['Deep understanding of C fundamentals', 'Pointer arithmetic mastery', 'Memory management practices']
                }
            ]
        },
        {
            id: 'ft_printf',
            title: 'ft_printf - Printf Recreation',
            summary: 'Full recreation of printf() function with custom format specifier handling.',
            tags: ['C', 'Advanced'],
            outcome: '✓ Complete',
            links: {
                github: 'https://github.com/chigvintseva/ft_printf',
                demo: null
            },
            details: [
                {
                    heading: 'Implemented Features',
                    points: ['All standard format specifiers (%d, %s, %x, etc)', 'Flag handling (-+0#)', 'Width and precision modifiers', 'Variable argument handling (va_list)']
                },
                {
                    heading: 'Technical Challenges',
                    points: ['Buffer management for output', 'Format string parsing', 'Floating-point to string conversion']
                }
            ]
        },
        {
            id: 'get_next_line',
            title: 'get_next_line - File Reader',
            summary: 'Read file line-by-line efficiently, handling edge cases and memory management.',
            tags: ['C', 'Systems'],
            outcome: '✓ Complete',
            links: {
                github: 'https://github.com/chigvintseva/get_next_line',
                demo: null
            },
            details: [
                {
                    heading: 'Requirements',
                    points: ['Read one line at a time from file descriptor', 'Handle multiple file descriptors simultaneously', 'Manage dynamic memory allocation', 'Configurable buffer size']
                },
                {
                    heading: 'Unix Concepts Learned',
                    points: ['File descriptor handling', 'System calls (read, open, close)', 'Buffer management strategies']
                }
            ]
        },
        {
            id: 'born2beroot',
            title: 'born2beroot - Server Setup',
            summary: 'Complete server configuration with security, monitoring, and Docker virtualization.',
            tags: ['Linux', 'Systems', 'Docker'],
            outcome: '✓ Complete',
            links: {
                github: 'https://github.com/chigvintseva/born2beroot',
                demo: null
            },
            details: [
                {
                    heading: 'System Administration',
                    points: ['VirtualBox VM setup and configuration', 'Debian/CentOS Linux distribution management', 'User and group management', 'SSH hardening and firewall rules']
                },
                {
                    heading: 'Monitoring & Security',
                    points: ['System resource monitoring script', 'Log analysis and alerting', 'Sudo configuration', 'Password policies and encryption']
                }
            ]
        },
        {
            id: 'push_swap',
            title: 'push_swap - Sorting Algorithm',
            summary: 'Efficient sorting algorithm for two-stack data structure with minimal operations.',
            tags: ['C', 'Algorithms', 'Data Structures'],
            outcome: '✓ Complete',
            links: {
                github: 'https://github.com/chigvintseva/push_swap',
                demo: null
            },
            details: [
                {
                    heading: 'Algorithm Optimization',
                    points: ['Implemented multiple sorting strategies', 'Turkish algorithm for optimal moves', 'Handles stacks with 100+ elements', 'Complexity analysis and optimization']
                },
                {
                    heading: 'Data Structure Design',
                    points: ['Stack-based architecture', 'Efficient memory management', 'Operation tracking and validation']
                }
            ]
        },
        {
            id: 'so_long',
            title: 'so_long - 2D Game',
            summary: 'Interactive 2D game with graphics, collision detection, and game mechanics.',
            tags: ['C', 'Graphics', 'Game Dev'],
            outcome: '✓ Complete',
            links: {
                github: 'https://github.com/chigvintseva/so_long',
                demo: null
            },
            details: [
                {
                    heading: 'Game Features',
                    points: ['2D sprite rendering', 'Player movement and collision detection', 'Enemy AI mechanics', 'Level design and map parsing']
                },
                {
                    heading: 'Graphics Library',
                    points: ['MinilibX graphics library', 'Real-time input handling', 'Frame rate optimization']
                }
            ]
        }
    ],
    fortyTwoAll: [
        {
            id: 'minishell',
            title: 'minishell - Shell Implementation',
            summary: 'Custom Unix shell with command parsing, piping, and built-in commands.',
            tags: ['C', 'Unix', 'Systems'],
            status: 'In Progress',
            links: {
                github: 'https://github.com/chigvintseva/minishell',
                demo: null
            }
        },
        {
            id: 'ft_shmup',
            title: 'ft_shmup - Team Rush Project',
            summary: 'Collaborative game development sprint in 2 days.',
            tags: ['C', 'Graphics', 'Teamwork'],
            status: 'Completed (2-day rush)',
            links: {
                github: 'https://github.com/chigvintseva/ft_shmup',
                demo: null
            }
        },
        {
            id: 'libunit',
            title: 'libunit - Unit Testing Framework',
            summary: 'Team-developed C testing framework for automated unit tests.',
            tags: ['C', 'Testing', 'Teamwork'],
            status: 'Completed',
            links: {
                github: 'https://github.com/chigvintseva/libunit',
                demo: null
            }
        }
    ],
    academic: [
        {
            id: 'nyc-property-prediction',
            title: 'NYC Property Price Prediction',
            summary: 'Machine learning model predicting real estate prices using big data analytics.',
            tags: ['Python', 'ML', 'Data Science'],
            outcome: '✓ Complete',
            links: {
                github: 'https://github.com/chigvintseva/nyc-property-prediction',
                demo: null
            },
            details: [
                {
                    heading: 'Project Goals',
                    points: ['Predict property prices from 50,000+ listings', 'Feature engineering and selection', 'Model comparison and optimization']
                },
                {
                    heading: 'Technologies',
                    points: ['pandas, numpy for data processing', 'scikit-learn for ML models', 'matplotlib, seaborn for visualization', 'SQL for data management']
                }
            ]
        },
        {
            id: 'wine-quality-analysis',
            title: 'Wine Quality Classification',
            summary: 'Comprehensive data analysis and classification of wine quality datasets.',
            tags: ['Python', 'Data Analysis', 'ML'],
            outcome: '✓ Complete (Paper Pending Publication)',
            links: {
                github: 'https://github.com/chigvintseva/wine-quality-analysis',
                demo: null
            },
            details: [
                {
                    heading: 'Methodology',
                    points: ['Exploratory data analysis on 5000+ wine samples', 'Feature correlation analysis', 'Multiple classifier evaluation']
                },
                {
                    heading: 'Key Findings',
                    points: ['Alcohol and acidity as key quality indicators', 'Ensemble methods for improved accuracy', 'Research paper under review']
                }
            ]
        },
        {
            id: 'cpp-cosine-similarity',
            title: 'C++ Cosine Similarity',
            summary: 'Efficient vector similarity computation with C++.',
            tags: ['C++', 'Algorithms', 'Math'],
            outcome: '✓ Complete',
            links: {
                github: 'https://github.com/chigvintseva/cosine-similarity',
                demo: null
            }
        },
        {
            id: 'todo-app',
            title: 'To-Do List Application',
            summary: 'Web-based task management app with local storage persistence.',
            tags: ['JavaScript', 'Web', 'UI/UX'],
            outcome: '✓ Complete (Updated)',
            links: {
                github: 'https://github.com/chigvintseva/todo-app',
                demo: null
            }
        }
    ],
    inProgress: [
        {
            id: 'green-screen',
            title: 'Green Screen Project',
            summary: 'Upcoming project on video processing and effects.',
            tags: ['C', 'Graphics', 'In Progress'],
            status: 'Finalizing',
            links: {
                github: null,
                demo: null
            }
        }
    ]
};

/* === RENDER EDUCATION === */
function renderEducation() {
    const container = document.querySelector('.education-timeline');
    
    EDUCATION_DATA.forEach(edu => {
        const item = document.createElement('div');
        item.className = 'education-item';
        item.innerHTML = `
            <div class="education-degree">${edu.degree}</div>
            <div class="education-school">${edu.school}</div>
            <div class="education-meta">${edu.location} • ${edu.date}</div>
            <div class="education-description">${edu.description}</div>
            ${edu.details ? `<div style="margin-top: var(--space-4); font-size: var(--font-size-xs); color: var(--color-text-muted);">${edu.details.join(' • ')}</div>` : ''}
        `;
        container.appendChild(item);
    });
}

/* === RENDER ACHIEVEMENTS === */
function renderAchievements() {
    const container = document.getElementById('achievements-container');
    
    ACHIEVEMENTS_DATA.forEach(achievement => {
        const item = document.createElement('div');
        item.className = 'achievement-item';
        item.innerHTML = `
            <div class="achievement-title">${achievement.title}</div>
            ${achievement.location ? `<div class="achievement-meta">${achievement.location} • ${achievement.date}</div>` : `<div class="achievement-meta">${achievement.date}</div>`}
            <div class="achievement-description">${achievement.description}</div>
        `;
        container.appendChild(item);
    });
}

/* === RENDER FEATURED PROJECTS === */
function renderFeaturedProjects() {
    const container = document.getElementById('featured-projects');
    
    PROJECTS_DATA.featured.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        let detailsHTML = '';
        if (project.details) {
            detailsHTML = `
                <details class="project-details" style="margin-top: var(--space-4);">
                    <summary style="cursor: pointer; font-weight: 500; color: var(--color-accent);">
                        More Details <span class="detail-toggle">▼</span>
                    </summary>
                    <div class="detail-content">
                        ${project.details.map(detail => `
                            <div style="margin-top: var(--space-4);">
                                <strong style="color: var(--color-accent);">${detail.heading}</strong>
                                <ul style="margin-top: var(--space-2);">
                                    ${detail.points.map(point => `<li>${point}</li>`).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                </details>
            `;
        }
        
        card.innerHTML = `
            <div class="project-header">
                <div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-summary">${project.summary}</p>
                </div>
                <div class="project-status">${project.outcome}</div>
            </div>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            ${detailsHTML}
            <div class="project-links" style="margin-top: var(--space-6);">
                ${project.codeUnavailable ? `<span style="color: var(--color-text-muted); font-size: var(--font-size-sm);">Code not publicly available</span>` : ''}
                ${project.links.github ? `<a href="${project.links.github}" target="_blank" rel="noopener noreferrer">GitHub</a>` : ''}
                ${project.links.demo ? `<a href="${project.links.demo}" target="_blank" rel="noopener noreferrer">Live Demo</a>` : ''}
            </div>
        `;
        container.appendChild(card);
    });
}

/* === RENDER 42 HIGHLIGHTS === */
function render42Highlights() {
    const container = document.getElementById('forty-two-highlights');
    
    PROJECTS_DATA.fortyTwoHighlights.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        let detailsHTML = '';
        if (project.details) {
            detailsHTML = `
                <details class="project-details" style="margin-top: var(--space-4);">
                    <summary style="cursor: pointer; font-weight: 500; color: var(--color-accent);">
                        Details <span class="detail-toggle">▼</span>
                    </summary>
                    <div class="detail-content">
                        ${project.details.map(detail => `
                            <div style="margin-top: var(--space-4);">
                                <strong style="color: var(--color-accent);">${detail.heading}</strong>
                                <ul style="margin-top: var(--space-2);">
                                    ${detail.points.map(point => `<li>${point}</li>`).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                </details>
            `;
        }
        
        card.innerHTML = `
            <h3 class="project-title">${project.title}</h3>
            <p class="project-summary">${project.summary}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            ${detailsHTML}
            <div class="project-links">
                ${project.links.github ? `<a href="${project.links.github}" target="_blank" rel="noopener noreferrer">GitHub</a>` : ''}
                ${project.links.demo ? `<a href="${project.links.demo}" target="_blank" rel="noopener noreferrer">Live Demo</a>` : ''}
            </div>
        `;
        container.appendChild(card);
    });
}

/* === RENDER ALL 42 PROJECTS === */
function render42All() {
    const container = document.getElementById('forty-two-all');
    
    PROJECTS_DATA.fortyTwoAll.forEach(project => {
        const item = document.createElement('details');
        item.className = 'expandable-item';
        
        item.innerHTML = `
            <summary class="project-title" style="padding: var(--space-6); background-color: var(--color-hover); cursor: pointer;">
                ${project.title} <span class="detail-toggle">▼</span>
            </summary>
            <div class="detail-content">
                <p style="margin-bottom: var(--space-4);">${project.summary}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div style="margin-top: var(--space-4); font-size: var(--font-size-sm);">
                    <strong>Status:</strong> ${project.status}
                </div>
                <div class="project-links" style="margin-top: var(--space-6);">
                    ${project.links.github ? `<a href="${project.links.github}" target="_blank" rel="noopener noreferrer">GitHub</a>` : ''}
                    ${project.links.demo ? `<a href="${project.links.demo}" target="_blank" rel="noopener noreferrer">Live Demo</a>` : ''}
                </div>
            </div>
        `;
        container.appendChild(item);
    });
}

/* === RENDER ACADEMIC PROJECTS === */
function renderAcademicProjects() {
    const container = document.getElementById('academic-projects');
    
    PROJECTS_DATA.academic.concat(PROJECTS_DATA.inProgress).forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        let detailsHTML = '';
        if (project.details) {
            detailsHTML = `
                <details class="project-details" style="margin-top: var(--space-4);">
                    <summary style="cursor: pointer; font-weight: 500; color: var(--color-accent);">
                        Details <span class="detail-toggle">▼</span>
                    </summary>
                    <div class="detail-content">
                        ${project.details.map(detail => `
                            <div style="margin-top: var(--space-4);">
                                <strong style="color: var(--color-accent);">${detail.heading}</strong>
                                <ul style="margin-top: var(--space-2);">
                                    ${detail.points.map(point => `<li>${point}</li>`).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                </details>
            `;
        }
        
        card.innerHTML = `
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
                ${project.outcome || project.status ? `<div class="project-status">${project.outcome || project.status}</div>` : ''}
            </div>
            <p class="project-summary">${project.summary}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            ${detailsHTML}
            <div class="project-links">
                ${project.links.github ? `<a href="${project.links.github}" target="_blank" rel="noopener noreferrer">GitHub</a>` : ''}
                ${project.links.demo ? `<a href="${project.links.demo}" target="_blank" rel="noopener noreferrer">Live Demo</a>` : ''}
            </div>
        `;
        container.appendChild(card);
    });
}

/* === INIT === */
document.addEventListener('DOMContentLoaded', () => {
    renderEducation();
    renderAchievements();
    renderFeaturedProjects();
    render42Highlights();
    render42All();
    renderAcademicProjects();
});
