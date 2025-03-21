<template>
    <section class="focus-section">
        <h3 class="section-title">What We Focus On</h3>

        <div class="focus-grid">
            <!-- Skill Development Column -->
            <div class="focus-column">
                <div class="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                </div>
                <h3 class="focus-title">Skill Empowerment</h3>
                <p>
                    Individuals rebuilding their lives after incarceration face significant barriers to reintegration.
                    Our skills training programs, in collaboration with the Nigerian Correctional Service, provide
                    practical education in carpentry, tailoring, technology, and other self-sustainable skills.
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon">
                        <path
                            d="M12 2a8 8 0 018 8v6.764a2 2 0 01-1.106 1.789l-6 3a2 2 0 01-1.788 0l-6-3A2 2 0 014 16.764V10a8 8 0 018-8z" />
                        <path d="M12 13a3 3 0 100-6 3 3 0 000 6z" />
                    </svg>
                </div>
                <h3 class="focus-title">Community Wellness</h3>
                <p>
                    Access to healthcare and clean water transforms communities. Our medical and water projects address
                    immediate needs while building sustainable health infrastructure. These initiatives help communities
                    overcome daily struggles and create environments where families can thrive.
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon">
                        <path
                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                </div>
                <h3 class="focus-title">Sustainable Development</h3>
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
    font-size: 2rem;
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
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
}

.icon {
    width: 100%;
    height: 100%;
    color: #009976;
}

.focus-title {
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    color: #333;
}

p {
    font-size: 1.1rem;
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
    margin-top: 2rem;
    padding: 2rem 0;
    border-top: 1px solid #eaeaea;
}

.cta-heading {
    font-size: 1.8rem;
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
        font-size: 1.6rem;
    }

    .section-title {
        font-size: 1.8rem;
    }

    .focus-title {
        font-size: 1.4rem;
    }
}
</style>