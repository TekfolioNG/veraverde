<template>
    <section class="focus-section">
        <h2 class="section-title">What we focus on</h2>

        <div class="focus-grid">
            <!-- Skill Development Column -->
            <div class="focus-column">
                <div class="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" class="icon-tools">
                        <path
                            d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                </div>
                <h3>Skill Empowerment</h3>
                <p>
                    Individuals rebuilding their lives after incarceration face significant barriers to reintegration.
                    Our skills training programs provide practical education in carpentry, tailoring, and technology,
                    creating pathways to self-sufficiency and reducing recidivism during this critical transition
                    period.
                </p>
                <div class="link-wrapper">
                    <NuxtLink to="/programs/skills-empowerment" class="learn-more">
                        LEARN MORE ABOUT OUR TRAINING PROGRAMS
                        <span class="arrow">›</span>
                    </NuxtLink>
                </div>
            </div>

            <!-- Healthcare Column -->
            <div class="focus-column">
                <div class="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" class="icon-health">
                        <path
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </div>
                <h3>Community Wellness</h3>
                <p>
                    Access to healthcare and clean water transforms communities. Our mobile clinics and water projects
                    address immediate needs while building sustainable health infrastructure. These initiatives help
                    communities overcome daily struggles and create environments where families can thrive and
                    contribute positively.
                </p>
                <div class="link-wrapper">
                    <NuxtLink to="/programs/community-wellness" class="learn-more">
                        EXPLORE OUR COMMUNITY INITIATIVES
                        <span class="arrow">›</span>
                    </NuxtLink>
                </div>
            </div>

            <!-- Sustainable Communities Column -->
            <div class="focus-column">
                <div class="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" class="icon-community">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                </div>
                <h3>Sustainable Development</h3>
                <p>
                    As a supporter, you'll help disadvantaged communities build lasting infrastructure and economic
                    opportunity. Your contribution enables projects that create jobs, improve education access, and
                    establish local markets, helping communities achieve self-sufficiency and breaking the cycle of
                    poverty across Nigeria.
                </p>
                <div class="link-wrapper">
                    <NuxtLink to="/approach" class="learn-more">
                        READ MORE ABOUT OUR APPROACH
                        <span class="arrow">›</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.focus-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
    text-align: center;
}

.section-title {
    font-size: 2.2rem;
    color: #4a4a4a;
    margin-bottom: 3rem;
    font-weight: 500;
}

.focus-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.focus-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
}

.icon-wrapper {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
}

.icon-tools,
.icon-health,
.icon-community {
    width: 100%;
    height: 100%;
    color: #27ae60;
}

h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #333;
}

p {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 1.5rem;
}

.link-wrapper {
    margin-top: auto;
    width: 100%;
}

.learn-more {
    display: inline-block;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: #27ae60;
    text-decoration: none;
    margin-top: 1rem;
    transition: color 0.3s ease;
}

.learn-more:hover {
    color: #219653;
}

.arrow {
    font-size: 1.2rem;
    margin-left: 0.25rem;
}

@media (max-width: 768px) {
    .focus-grid {
        grid-template-columns: 1fr;
    }

    .focus-column {
        margin-bottom: 2rem;
    }
}
</style>