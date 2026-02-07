/**
 * Skills Data & Rendering
 * Organized by category for flexible rendering
 */

const SKILLS_DATA = {
    frontend: [
        { name: 'HTML5', icon: '🏗️' },
        { name: 'CSS3', icon: '🎨' },
        { name: 'JavaScript', icon: '⚙️' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'Responsive Design', icon: '📱' }
    ],
    systems: [
        { name: 'C', icon: '🔧' },
        { name: 'Unix/Linux', icon: '🐧' },
        { name: 'Memory Management', icon: '💾' },
        { name: 'Algorithms', icon: '📊' },
        { name: 'Data Structures', icon: '🗂️' },
        { name: 'Debugging', icon: '🔍' }
    ],
    tooling: [
        { name: 'Git/GitHub', icon: '🔗' },
        { name: 'VSCode', icon: '💻' },
        { name: 'Shell Scripting', icon: '⌨️' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Testing', icon: '✅' }
    ],
    data: [
        { name: 'Python', icon: '🐍' },
        { name: 'SQL', icon: '💾' },
        { name: 'scikit-learn', icon: '🤖' },
        { name: 'Tableau', icon: '📈' },
        { name: 'pandas/numpy', icon: '📉' }
    ]
};

function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    let html = '';

    // Add category label and skills for each category
    Object.entries(SKILLS_DATA).forEach(([category, skills]) => {
        html += `
            <div style="grid-column: 1 / -1; margin-top: 24px; margin-bottom: 12px;">
                <h3 style="
                    font-size: 1.125rem;
                    color: var(--color-text-muted);
                    text-transform: capitalize;
                    font-weight: 500;
                    letter-spacing: 0.05em;
                    margin: 0;
                ">
                    ${category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div style="width: 40px; height: 2px; background-color: var(--color-accent); margin-top: 8px;"></div>
            </div>
        `;

        skills.forEach(skill => {
            html += `
                <div class="skill-tag">
                    <div class="skill-icon">${skill.icon}</div>
                    <span class="skill-name">${skill.name}</span>
                </div>
            `;
        });
    });

    container.innerHTML = html;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', renderSkills);
