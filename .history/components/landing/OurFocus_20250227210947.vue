<template>
    <section class="focus-section">
        <h3 class="section-title">What We Focus On</h3>

        <div class="focus-grid">
            <!-- Skill Development Column -->
            <div class="focus-column">
                <div class="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.5" class="icon">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                </div>
                <h3 class="focus-title">Skills empowerment</h3>
                <p>
                    Individuals rebuilding their lives after
                    incarceration face significant barriers to reintegration. Our skills training programs, in
                    collaboration with the Nigerian Correctioal Service, provide
                    practical education in carpentry, tailoring, and technology, and other self-sustainable skills.
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
                        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
                        <path d="M12 8v8" />
                        <path d="M8 12h8" />
                    </svg>
                </div>
                <h3 class="focus-title">Community wellness</h3>
                <p>
                    Access to healthcare and clean water transforms communities. Our medical and water projects
                    address immediate needs while building sustainable health infrastructure. These initiatives help
                    communities overcome daily struggles and create environments where families can thrive.
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
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                </div>
                <h3 class="focus-title">Sustainable development</h3>
                <p>
                    As a supporter, you'll help disadvantaged communities build lasting infrastructure and economic
                    opportunity. Your contribution enables projects that create jobs, improve education access, and
                    establish local markets, helping communities achieve self-sufficiency and break the cycle of
                    poverty.
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
    font-size: 1.3rem;
    color: #333;
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
    color: #111;
    margin-bottom: 1.5rem;
}

.link-wrapper {
    margin-top: auto;
    width: 100%;
    text-align: center;
}

.learn-more {
    display: inline-block;
    font-size: 1rem;
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
    font-size: 1.5rem;
    margin-left: 0.25rem;
}

.cta-section {
    padding: 2rem 0;
}

.cta-heading {
    font-size: 1.6rem;
    font-weight: 800;
    color: #333;
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
        margin-top: 0;

    }

    .cta-section {
        padding: 0.2rem 0;
        margin-top: 0;


    }

    .section-title {
        font-size: 1.6rem;
    }

    .focus-title {
        font-size: 1.2rem;
    }

    .learn-more {
        font-size: 0.9rem;
    }

    .arrow {
        font-size: 1.3rem;
    }
}
</style>