/**
 * Portfolio Content Layer
 * Projects data structure for flexible rendering and future updates
 */

const PROJECT_DATA = {
    // 42 Berlin Highlights (first 6 shown, rest expandable)
    fortyTwoHighlights: [
        {
            id: 'libft',
            title: 'Libft',
            summary: 'Reimplementation of C standard library functions.',
            tags: ['C', 'stdlib', 'fundamentals'],
            details: [
                'Implemented 50+ standard library functions',
                'Strict 42 norm compliance (1,300+ lines of code)',
                'Demonstrates deep understanding of C memory and pointers'
            ]
        },
        {
            id: 'ft-printf',
            title: 'ft_printf',
            summary: 'Variadic argument parsing and formatted string output.',
            tags: ['C', 'variadic', 'parsing'],
            details: [
                'Implemented printf-compatible output function',
                'Supports %d, %s, %x, %f, %p and more format specifiers',
                'Complex variadic function handling and memory management'
            ]
        },
        {
            id: 'get-next-line',
            title: 'get_next_line',
            summary: 'Efficient buffered file reading with dynamic memory management.',
            tags: ['C', 'file I/O', 'memory'],
            details: [
                'Reads one line at a time from file descriptor',
                'Implements efficient circular buffer strategy',
                'Memory-safe with proper allocation and deallocation'
            ]
        },
        {
            id: 'born2beroot',
            title: 'Born2beroot',
            summary: 'System administration and VM hardening project.',
            tags: ['Linux', 'system-admin', 'security'],
            details: [
                'Set up virtual machine with hardened security',
                'Configured partitioning, sudo, SSH, firewall rules',
                'Demonstrates Linux system administration fundamentals'
            ]
        },
        {
            id: 'push-swap',
            title: 'push_swap',
            summary: 'Sorting algorithm optimization challenge.',
            tags: ['Algorithms', 'C', 'data-structures'],
            details: [
                'Implemented optimal sorting using two stacks',
                'Achieved O(n log n) complexity on average case',
                'Demonstrates algorithmic thinking and optimization'
            ]
        },
        {
            id: 'so-long',
            title: 'so_long',
            summary: '2D game with graphics, collision detection, and event handling.',
            tags: ['Graphics', 'C', 'game-dev'],
            details: [
                'Implemented 2D platformer game using MinilibX',
                'Features: collision detection, sprite animation, level parsing',
                'Understanding of graphics programming and game loops'
            ]
        }
    ],

    fortyTwoAll: [
        {
            title: 'MiniShell',
            summary: 'Custom Unix shell with command parsing and process management.',
            tags: ['C', 'Unix', 'in-progress'],
            status: 'In Progress',
            details: [
                'Full command parsing and execution pipeline',
                'Process management, piping, redirections',
                'Understanding of OS internals and shell behavior'
            ]
        },
        {
            title: 'ft_shmup',
            summary: '2D space shooter with ncurses terminal graphics.',
            tags: ['C++', 'ncurses', 'game-dev', 'team'],
            status: 'Completed (2-day rush)',
            details: [
                'Team project (3 members) completed in 48 hours',
                'Real-time event-driven game loop',
                'Collision detection and game physics in terminal'
            ]
        },
        {
            title: 'LibUnit',
            summary: 'Automated unit testing framework for C projects.',
            tags: ['C', 'testing', 'team'],
            status: 'Completed',
            details: [
                'Team project creating TDD framework',
                'Test discovery, assertion macros, reporting',
                'Fundamental understanding of software testing'
            ]
        }
    ],

    // Featured Projects (top 4)
    featured: [
        {
            id: 'hackathon-cura',
            title: 'Cura – AI Accessibility App',
            category: 'Hackathon 1st Place',
            summary: 'Transforming academic texts into human-like audio for accessibility.',
            tags: ['TypeScript', 'Swift', 'AI', 'Cloud APIs'],
            outcome: 'Won Buildathon Berlin Sep 2025 (team of 4)',
            links: {
                // github: 'https://github.com/...', // Not shareable by team agreement
                // demo: 'https://...',
            },
            details: [
                {
                    heading: 'My Contribution',
                    points: [
                        'Built TypeScript AI integration module (wrapper + API orchestration)',
                        'Implemented parsing/lexing component for academic text preprocessing',
                        'Defined data interfaces between Swift frontend and AI backend',
                        'Integrated cloud speech synthesis API'
                    ]
                },
                {
                    heading: 'Team Responsibilities',
                    points: [
                        'Swift: iOS app UI/UX, accessibility features',
                        'Design: Prototype mockups and user flows',
                        'Product: Pitching and demo preparation'
                    ]
                },
                {
                    heading: 'Why It Matters',
                    points: [
                        'Demonstrated full-stack cloud-native architecture',
                        'Validated user-centered design under time pressure',
                        'Showcased ability to own specific module in larger system'
                    ]
                }
            ]
        },
        {
            id: 'thesis-prototype',
            title: 'Evidence-Gated Medication Checker',
            category: 'Thesis Prototype (Private)',
            summary: 'Decision support system for allergy-aware, evidence-based acute medication combinations.',
            tags: ['Python', 'Data Structures', 'Medical AI'],
            outcome: 'Thesis in progress – Dr. Prof. Loubna Ali (supervisor)',
            links: {
                codeUnavailable: 'Private: code not available during thesis phase',
            },
            details: [
                {
                    heading: 'Problem Statement',
                    points: [
                        'Hospital clinicians face cognitive overload when assessing add-on medications',
                        'Allergies and drug interactions require real-time, evidence-backed decision support',
                        'Current systems lack scope-definition (acute vs. chronic context)'
                    ]
                },
                {
                    heading: 'My Approach',
                    points: [
                        'Evidence-gating: Only recommend drugs backed by recent clinical guidelines',
                        'Allergy checking: Comprehensive drug-allergy cross-reference matrix',
                        'Constraint satisfaction: Model medical logic as constraint problem',
                        'Data model: JSON-based knowledge graph of drugs, allergies, and interactions'
                    ]
                },
                {
                    heading: 'Input & Output',
                    points: [
                        'Input: Patient symptoms, current medications, known allergies, medical history',
                        'Output: Ranked list of safe acute medication combinations with evidence citations',
                        'Safety constraints: Flag contraindications, renal/hepatic adjustments'
                    ]
                },
                {
                    heading: 'Roadmap',
                    points: [
                        'Expand drug database (currently 500+ entries)',
                        'Integrate real clinical guidelines (UpToDate, NICE, Cochrane)',
                        'Add dosage calculator for renal/hepatic impairment',
                        'Build web interface for clinician workflow testing'
                    ]
                }
            ],
            requestPrivate: 'Request thesis details or discussion'
        },
        {
            id: 'push-swap-showcase',
            title: 'push_swap – Sorting Algorithm Showcase',
            category: '42 Systems Project',
            summary: 'Optimal sorting using two stacks – demonstrates algorithmic optimization.',
            tags: ['C', 'Algorithms', 'Data Structures'],
            outcome: 'Achieved O(n log n) average complexity',
            links: {
                github: 'https://github.com/chigvintseva/push_swap',
            },
            details: [
                {
                    heading: 'Challenge',
                    points: [
                        'Sort integer list using only two stacks and specific operations',
                        'Minimize total number of operations (≤ 3n log n required)',
                        'No external libraries; implement from scratch'
                    ]
                },
                {
                    heading: 'Solution',
                    points: [
                        'Implemented quicksort variant adapted for stack constraints',
                        'Efficient data structure for tracking min/max',
                        'Handles edge cases: duplicates, negative numbers, large datasets'
                    ]
                },
                {
                    heading: 'Learning Outcome',
                    points: [
                        'Deep algorithmic analysis and Big-O optimization',
                        'Problem decomposition and constraint-based thinking',
                        'C programming: memory layout, performance profiling'
                    ]
                }
            ]
        },
        {
            id: 'green-screen',
            title: 'Green-Screen Chroma-Key Algorithm',
            category: 'In Progress',
            summary: 'Real-time background removal via pixel-level color matching.',
            tags: ['JavaScript', 'Canvas', 'DSP'],
            status: 'Finalizing - GitHub link coming soon',
            links: {
                // github: '', // Coming soon
            },
            details: [
                {
                    heading: 'Objective',
                    points: [
                        'Implement efficient chroma-key (green-screen) algorithm in JavaScript',
                        'Run in browser using Canvas API for real-time processing',
                        'Optimize for 30+ FPS on standard laptops'
                    ]
                },
                {
                    heading: 'Technical Approach',
                    points: [
                        'RGB color space analysis + HSL threshold detection',
                        'Morphological operations (dilation/erosion) for artifact removal',
                        'GPU acceleration via WebGL (fallback to CPU Canvas)',
                        'Fringing detection and edge smoothing'
                    ]
                },
                {
                    heading: 'Expected Outcome',
                    points: [
                        'Deployed demo: upload video or webcam input, real-time processing',
                        'Blog post on chroma-key algorithm walkthrough',
                        'GitHub repo with optimization tips and performance metrics'
                    ]
                }
            ]
        }
    ],

    // Lab / Additional Projects
    lab: [
        {
            title: 'Updated To-Do Web App',
            summary: 'Responsive task manager with persistent storage.',
            tags: ['JavaScript', 'DOM', 'localStorage'],
            status: 'Enhanced',
            links: {
                demo: 'https://chigvintseva.github.io/To-Do-List/',
            },
            details: [
                {
                    heading: 'Features',
                    points: [
                        'Add, edit, delete tasks',
                        'Local storage persistence',
                        'Responsive mobile design',
                        'Filtering and sorting options'
                    ]
                },
                {
                    heading: 'Tech Stack',
                    points: [
                        'Vanilla HTML/CSS/JavaScript',
                        'localStorage API for data persistence',
                        'Mobile-first responsive CSS'
                    ]
                }
            ]
        },
        {
            title: 'C++ Cosine Similarity',
            summary: 'Text comparison using tokenization and similarity metrics.',
            tags: ['C++', 'Algorithms', 'NLP'],
            links: {
                github: 'https://github.com/chigvintseva/cosine-similarity-cpp',
            },
            details: [
                {
                    heading: 'Implementation',
                    points: [
                        'Tokenization using STL set/map structures',
                        'Vector space model for text comparison',
                        'O(n + m log m) time complexity optimization'
                    ]
                }
            ]
        }
    ],

    // Data Analysis Projects
    dataAnalysis: [
        {
            title: 'NYC Property Value Prediction',
            summary: 'Lasso Regression model on 20,000+ property records.',
            tags: ['Python', 'pandas', 'scikit-learn', 'Tableau'],
            status: 'Publication pending',
            details: [
                {
                    heading: 'Approach',
                    points: [
                        'Feature engineering: square footage, age, neighborhood, amenities',
                        'Lasso Regression for feature selection and regularization',
                        '~15% accuracy improvement through hyperparameter tuning'
                    ]
                },
                {
                    heading: 'Outcome',
                    points: [
                        'R² score: ~0.78 on test set',
                        'Identified key pricing factors for real estate stakeholders',
                        'Visualized trends in Tableau dashboards'
                    ]
                }
            ]
        },
        {
            title: 'Wine Quality Classification',
            summary: 'Random Forest + SVM on chemical composition data.',
            tags: ['Python', 'Random Forest', 'SVM', 'scikit-learn'],
            status: 'Publication pending',
            details: [
                {
                    heading: 'Models Compared',
                    points: [
                        'Random Forest: 94.8% accuracy',
                        'SVM with RBF kernel: 93.2% accuracy',
                        'Feature importance: alcohol, sulphates, volatile acidity'
                    ]
                },
                {
                    heading: 'Dataset',
                    points: [
                        '5,000+ wine samples with 11 chemical features',
                        'Class imbalance handling via SMOTE',
                        'Cross-validation with k-fold strategy'
                    ]
                }
            ]
        }
    ]
};

/**
 * Render 42 Berlin highlights
 */
function render42Highlights() {
    const container = document.getElementById('forty-two-highlights');
    if (!container) return;

    container.innerHTML = PROJECT_DATA.fortyTwoHighlights
        .map(project => `
            <div class="project-card">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-summary">${project.summary}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <details class="expandable-section">
                    <summary class="summary-button">Details</summary>
                    <div class="expandable-content">
                        <ul style="margin: 0; padding: 0 0 0 20px;">
                            ${project.details.map(detail => `<li>${detail}</li>`).join('')}
                        </ul>
                    </div>
                </details>
            </div>
        `)
        .join('');
}

/**
 * Render 42 Berlin all projects (expandable)
 */
function render42All() {
    const container = document.getElementById('forty-two-all');
    if (!container) return;

    container.innerHTML = PROJECT_DATA.fortyTwoAll
        .map(project => `
            <div class="expandable-item">
                <div class="expandable-title">${project.title}</div>
                ${project.status ? `<div class="expandable-subtitle">${project.status}</div>` : ''}
                <div class="expandable-description">${project.summary}</div>
                ${project.details && project.details.length > 0 ? `
                    <ul style="margin: 8px 0 0 20px; padding: 0;">
                        ${project.details.map(detail => `<li style="font-size: 0.875rem; color: var(--color-text-muted);">${detail}</li>`).join('')}
                    </ul>
                ` : ''}
                <div class="project-tags" style="margin-top: 8px;">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `)
        .join('');
}

/**
 * Render featured projects
 */
function renderFeaturedProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = PROJECT_DATA.featured
        .map(project => `
            <div class="project-card">
                <div style="margin-bottom: 8px;">
                    <div style="font-size: 0.875rem; color: var(--color-accent); font-weight: 600;">
                        ${project.category}
                    </div>
                    <h3 class="project-title" style="margin: 4px 0;">${project.title}</h3>
                </div>
                <p class="project-summary">${project.summary}</p>
                ${project.outcome ? `<p style="font-size: 0.875rem; color: var(--color-text-muted); margin: 8px 0;">${project.outcome}</p>` : ''}
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <details class="expandable-section" style="margin-top: 12px;">
                    <summary class="summary-button">View Details</summary>
                    <div class="expandable-content">
                        ${project.details.map(section => `
                            <div style="margin-bottom: 12px;">
                                <strong style="display: block; margin-bottom: 4px; color: var(--color-text);">
                                    ${section.heading}
                                </strong>
                                <ul style="margin: 0; padding: 0 0 0 20px; font-size: 0.875rem;">
                                    ${section.points.map(point => `<li style="color: var(--color-text-muted); margin-bottom: 4px;">${point}</li>`).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                </details>
                ${project.requestPrivate ? `
                    <p style="font-size: 0.875rem; margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--color-border);">
                        <strong>${project.requestPrivate}</strong><br>
                        <a href="mailto:al.chigvintseva@gmail.com?subject=Thesis%20Discussion">al.chigvintseva@gmail.com</a>
                    </p>
                ` : ''}
                ${project.links && Object.keys(project.links).length > 0 ? `
                    <div class="project-links">
                        ${project.links.github ? `<a href="${project.links.github}" class="project-link">GitHub</a>` : ''}
                        ${project.links.demo ? `<a href="${project.links.demo}" class="project-link">Live Demo</a>` : ''}
                        ${project.links.codeUnavailable ? `<span class="project-link" style="color: var(--color-text-muted);">${project.links.codeUnavailable}</span>` : ''}
                    </div>
                ` : ''}
            </div>
        `)
        .join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    render42Highlights();
    render42All();
    renderFeaturedProjects();
});
