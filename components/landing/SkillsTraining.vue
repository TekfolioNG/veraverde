<template>
    <div class="skills-training-section">
        <div class="content-wrapper">
            <div class="image-container">
                <img src="@/assets/img/toei-skills-training4.jpg" alt="Skills training session" class="skills-image">
            </div>

            <div class="content-container">
                <h2 class="section-title">Skills Training</h2>

                <div class="problem-section">
                    <h3 class="subsection-title problem-title">THE PROBLEM WE ARE SOLVING</h3>
                    <p class="problem-description">
                        In many communities, adults and youth lack the practical skills needed to secure stable
                        employment or start businesses. Without marketable skills, people struggle to earn reliable
                        income, leading to long-term poverty cycles. Traditional education often fails to provide
                        hands-on vocational training that connects to real market opportunities.
                    </p>
                    <div class="divider"></div>
                </div>

                <div class="solution-section">
                    <h3 class="subsection-title solution-title">OUR SOLUTION</h3>
                    <div class="solution-content">
                        <p class="solution-description">
                            Through your sponsorship, you help provide practical skills training that leads directly to
                            employment or entrepreneurship. Our programs include vocational training, business
                            development workshops, mentorship, and market-driven certification programs that match local
                            economic needs.
                        </p>

                        <div class="stats-container">
                            <div class="stats-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                </svg>
                            </div>
                            <div class="stats-text">
                                <h4 class="stats-highlight">84%:</h4>
                                <p class="stats-description">Of graduates from our skills training programs find
                                    employment or start businesses within 6 months, increasing household income by an
                                    average of 47%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SkillsTrainingSection'
}
</script>

<style scoped>
.skills-training-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding: 2rem 0;
}

.content-wrapper {
    width: 60%;
    margin: 0 auto;
}

.image-container {
    width: 100%;
    height: auto;
    overflow: hidden;
    margin-bottom: 1.5rem;
    max-height: 350px;

}

.skills-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.content-container {
    width: 100%;
}

.section-title {
    font-size: 1.75rem;
    color: #555;
    margin-bottom: 1.5rem;
    font-weight: 600;

}

.subsection-title {
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin-bottom: 1rem;
    color: #333;
}

.problem-title {
    color: #222;
    /* Increased darkness */
    font-weight: 700;
    /* Made more bold */
}

.solution-title {
    color: #065f46;
}

.problem-description,
.solution-description {
    font-size: 1rem;
    line-height: 1.6;
    color: #2a2a2a;
    margin-bottom: 1.5rem;
}

.divider {
    height: 1px;
    background-color: #e0e0e0;
    width: 100%;
    margin: 1.5rem 0;
}

.solution-section {
    margin-top: 1.5rem;
}

.solution-content {
    display: flex;
    flex-direction: column;
}

.stats-container {
    display: flex;
    align-items: flex-start;
    margin-top: 1rem;
}

.stats-icon {
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    margin-right: 1rem;
    color: #ffffff;
    background-color: #4a4a4a;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.stats-text {
    flex-grow: 1;
}

.stats-highlight {
    font-size: 1.5rem;
    font-weight: 600;
    color: #065f46;
    margin: 0 0 0.5rem 0;
}

.stats-description {
    font-size: 0.95rem;
    line-height: 1.5;
    color: #065f46;
    margin: 0;
}

@media (min-width: 768px) {
    .solution-content {
        flex-direction: row;
        gap: 2rem;
    }

    .solution-description {
        flex: 1;
        margin-bottom: 0;
    }

    .stats-container {
        flex: 1;
        margin-top: 0;
    }
}

@media (min-width: 1400px) {
    .content-wrapper {
        width: 60%;
    }
}

@media (max-width: 1399px) {
    .content-wrapper {
        width: 70%;
    }
}

@media (max-width: 992px) {
    .content-wrapper {
        width: 80%;
    }
}

@media (max-width: 768px) {
    .content-wrapper {
        width: 85%;
    }

    .section-title {
        font-size: 1.6rem;
        /* Adjusted for smaller screens */
    }

    .stats-highlight {
        font-size: 1.25rem;
    }

    .image-container {
        max-height: 300px;

    }
}

@media (max-width: 480px) {
    .content-wrapper {
        width: 90%;
    }

    .image-container {
        max-height: 250px;

    }
}
</style>