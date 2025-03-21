<template>
    <section class="focus-section">
        <h3 class="section-title">What we focus on</h3>

        <div class="focus-grid">
            <!-- Skill Development Column -->
            <div class="focus-column">
                <div class="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.5" class="icon">
                        <!-- Gear with wrench/spanner -->
                        <circle cx="12" cy="12" r="8" />
                        <circle cx="12" cy="12" r="3" />
                        <line x1="12" y1="2" x2="12" y2="4" />
                        <line x1="12" y1="20" x2="12" y2="22" />
                        <line x1="2" y1="12" x2="4" y2="12" />
                        <line x1="20" y1="12" x2="22" y2="12" />
                        <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
                        <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
                        <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
                        <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
                        <!-- Wrench part -->
                        <path d="M18 7l-1.5-1.5c-1 1-2.5 0-2.5-1.5L16 2c-2-1-7 2-7 6" />
                    </svg>
                </div>
                <h3 class="focus-title">Skill Empowerment</h3>
                <p>
                    Individuals rebuilding their lives after incarceration face significant barriers to reintegration.
                    In collaboration with Nigeria Correctional Services, we provide practical education in various
                    employable and sustainable skills for self-sustenance, creating pathways to independence and
                    reducing recidivism during this critical transition period.
                </p>
                <div class="link-wrapper">
                    <NuxtLink to="/programs/skills-empowerment" class="learn-more">
                        EXPLORE PROGRAMS
                        <span class="arrow">›</span>
                    </NuxtLink>
                </div>
            </div>

            <!-- Healthcare Column -->
            <div class="focus-column">
                <div class="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.5" class="icon">
                        <!-- Heart with stethoscope -->
                        <path
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        <!-- Stethoscope part -->
                        <path d="M7 16a4 4 0 0 0 4 4" />
                        <circle cx="15" cy="13" r="1" />
                        <path d="M16 13V6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v7" />
                    </svg>
                </div>
                <h3 class="focus-title">Community Wellness</h3>
                <p>
                    Access to healthcare and clean water transforms communities. Our mobile clinics and water projects
                    address immediate needs while building sustainable health infrastructure. These initiatives help
                    communities overcome daily struggles and create environments where families can thrive and
                    contribute positively.
                </p>
                <div class="link-wrapper">
                    <NuxtLink to="/programs/community-wellness" class="learn-more">
                        VIEW INITIATIVES
                        <span class="arrow">›</span>
                    </NuxtLink>
                </div>
            </div>

            <!-- Sustainable Communities Column -->
            <div class="focus-column">
                <div class="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.5" class="icon">
                        <!-- Young sprouting plant with 2-3 leaves -->
                        <line x1="12" y1="22" x2="12" y2="16" />
                        <path d="M12 16c-2-2-2-4-2-6 0 0 4 0 6 3" />
                        <path d="M12 16c2-2 2-4 2-6 0 0-4 0-6 3" />
                        <path d="M12 13c1-1.5 1-3 0-5 0 0-3 1-3 3" />
                        <path d="M12 13c-1-1.5-1-3 0-5 0 0 3 1 3 3" />
                    </svg>
                </div>
                <h3 class="focus-title">Sustainable Development</h3>
                <p>
                    As a supporter, you'll help disadvantaged communities build lasting infrastructure and economic
                    opportunity. Your contribution enables projects that create jobs, improve education access, and
                    establish local markets, helping communities achieve self-sufficiency and breaking the cycle of
                    poverty across Nigeria.
                </p>
                <div class="link-wrapper">
                    <NuxtLink to="/approach" class="learn-more">
                        READ APPROACH
                        <span class="arrow">›</span>
                    </NuxtLink>
                </div>
            </div>
        </div>

        <div class="cta-section">
            <h3 class="cta-heading">Give hope to a life or community. Sponsor a project today.</h3>
            <NuxtLink to="/donate" class="cta-button">Donate Now</NuxtLink>
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
    font-size: 1.8rem;
    color: #4a4a4a;
    margin-bottom: 3rem;
    font-weight: 800;
    text-transform: uppercase;
}

.focus-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
}

.focus-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
}

.icon-wrapper {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
}

.icon {
    width: 100%;
    height: 100%;
    color: #009976;
    stroke-width: 1.5;
}

.focus-title {
    font-size: 1.3rem;
    font-weight: 800;
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
    color: #009976;
    text-decoration: none;
    margin-top: 1rem;
    transition: color 0.3s ease;
}

.learn-more:hover {
    color: #00B28A;
}

.arrow {
    font-size: 1.2rem;
    margin-left: 0.25rem;
}

.cta-section {
    margin-top: 2rem;
    padding: 2rem 0;
    border-top: 1px solid #eaeaea;
}

.cta-heading {
    font-size: 1.6rem;
    font-weight: 800;
    color: #333;
    margin-bottom: 1.5rem;
}

.cta-button {
    display: inline-block;
    background-color: #009976;
    color: white;
    padding: 0.8rem 2rem;
    border-radius: 4px;
    font-weight: 600;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

.cta-button:hover {
    background-color: #00B28A;
}

@media (max-width: 768px) {
    .focus-grid {
        grid-template-columns: 1fr;
    }

    .focus-column {
        margin-bottom: 2rem;
    }

    .cta-heading {
        font-size: 1.4rem;
    }

    .section-title {
        font-size: 1.6rem;
    }

    .focus-title {
        font-size: 1.2rem;
    }
}
</style>