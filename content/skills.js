/* === SKILLS DATA === */
const SKILLS_DATA = {
    programming: [
        { name: 'C', icon: '⚙️' },
        { name: 'C++', icon: '⚙️' },
        { name: 'Python', icon: '🐍' },
        { name: 'Java (basic)', icon: '☕' },
        { name: 'Shell Scripting', icon: '💻' },
        { name: 'R', icon: '📊' },
        { name: 'Pascal', icon: '⚙️' },
        { name: 'Assembler', icon: '🔧' }
    ],
    webDevelopment: [
        { name: 'HTML5', icon: '🌐' },
        { name: 'CSS3', icon: '🎨' },
        { name: 'JavaScript', icon: '✨' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'Responsive Design', icon: '📱' },
        { name: 'Firebase', icon: '🔥' }
    ],
    pythonLibraries: [
        { name: 'pandas', icon: '📊' },
        { name: 'numpy', icon: '🔢' },
        { name: 'scikit-learn', icon: '🤖' },
        { name: 'matplotlib', icon: '📈' },
        { name: 'seaborn', icon: '🎯' }
    ],
    databases: [
        { name: 'SQL', icon: '🗄️' },
        { name: 'MySQL', icon: '🗄️' },
        { name: 'Databases', icon: '💾' }
    ],
    toolsAndPlatforms: [
        { name: 'Git/GitHub', icon: '🐙' },
        { name: 'VSCode', icon: '💬' },
        { name: 'Linux/Unix', icon: '🐧' },
        { name: 'Docker', icon: '🐳' },
        { name: 'MySQL Workbench', icon: '🛠️' },
        { name: 'Tableau', icon: '📊' },
        { name: 'CAD Modelling', icon: '📐' },
        { name: 'UML', icon: '📋' },
        { name: 'Testing', icon: '✔️' },
        { name: 'Agile/Scrum', icon: '🎯' }
    ],
    apis: [
        { name: 'REST APIs', icon: '🔌' },
        { name: 'API Integration', icon: '🔗' }
    ]
};

const SOFT_SKILLS = [
    'Communication',
    'Critical Thinking',
    'Teamwork',
    'Leadership',
    'Problem-Solving',
    'Adaptability',
    'Time Management',
    'Attention to Detail'
];

const LANGUAGES = [
    {
        name: 'English',
        level: 'Native / Bilingual',
        code: 'C2',
        flag: '🇬🇧'
    },
    {
        name: 'Russian',
        level: 'Native / Bilingual',
        code: 'C2',
        flag: '🇷🇺'
    },
    {
        name: 'German',
        level: 'Independent User',
        code: 'B2',
        flag: '🇩🇪'
    },
    {
        name: 'Chinese (Mandarin)',
        level: 'Elementary',
        code: 'A1',
        flag: '🇨🇳'
    }
];

/* === RENDER SKILLS === */
function renderSkills() {
    const container = document.getElementById('skills-container');
    
    for (const [category, skills] of Object.entries(SKILLS_DATA)) {
        // Category header
        const header = document.createElement('div');
        header.className = 'skill-category-header';
        header.textContent = category
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, str => str.toUpperCase())
            .trim();
        container.appendChild(header);
        
        // Skills
        skills.forEach(skill => {
            const tag = document.createElement('div');
            tag.className = 'skill-tag';
            tag.innerHTML = `<span class="skill-icon">${skill.icon}</span><span>${skill.name}</span>`;
            container.appendChild(tag);
        });
    }
}

/* === RENDER LANGUAGES === */
function renderLanguages() {
    const container = document.getElementById('languages-container');
    
    LANGUAGES.forEach(lang => {
        const item = document.createElement('div');
        item.className = 'language-item';
        item.innerHTML = `
            <div style="font-size: 1.5rem; margin-bottom: var(--space-2);">${lang.flag}</div>
            <div class="language-name">${lang.name}</div>
            <div class="language-level">${lang.level}</div>
            <div style="color: var(--color-text-muted); font-size: var(--font-size-xs); margin-top: var(--space-2);">CEFR: ${lang.code}</div>
        `;
        container.appendChild(item);
    });
}

/* === RENDER SOFT SKILLS === */
function renderSoftSkills() {
    const container = document.getElementById('soft-skills-container');
    
    SOFT_SKILLS.forEach(skill => {
        const item = document.createElement('div');
        item.className = 'soft-skill';
        item.textContent = skill;
        container.appendChild(item);
    });
}

/* === INIT === */
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderLanguages();
    renderSoftSkills();
});
