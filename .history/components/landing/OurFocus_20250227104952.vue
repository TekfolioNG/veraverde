<template>
    <section class="focus-section">
        <h3 class="section-title">What We Focus On</h3>

        <div class="focus-grid">
            <!-- Skill Development Column -->
            <div class="focus-column">
                <div class="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.5" class="icon">
                        <path
                            d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                        <circle cx="12" cy="12" r="3" />
                    </svg>
                </div>
                <h3 class="focus-title">Skill Empowerment</h3>
                <p>
                    In collaboration with Nigeria Correctional Services, we provide practical education in carpentry,
                    tailoring, technology, and other employable skills. Our programs create pathways to independence for
                    individuals rebuilding their lives after incarceration.
                </p>
                <div class="link-wrapper">
                    <NuxtLink to="/programs/skills-empowerment" class="learn-more">
                        EXPLORE OUR PROGRAMS
                        <span class="arrow">›</span>
                    </NuxtLink>
                </div>
            </div>

            <!-- Healthcare Column -->
            <div class="focus-column">
                <div class="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.5" class="icon">
                        <path
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        <path d="M4.5 12.5L12 6l7.5 6.5" />
                        <path d="M12 6v10" />
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
                        VIEW OUR INITIATIVES
                        <span class="arrow">›</span>
                    </NuxtLink>
                </div>
            </div>

            <!-- Sustainable Communities Column -->
            <div class="focus-column">
                <div class="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.5" class="icon">
                        <path d="M12 22c0 0 8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
                        <path d="M12 8v6" />
                        <path d="M9 11l3 3 3-3" />
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
                        READ OUR APPROACH
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