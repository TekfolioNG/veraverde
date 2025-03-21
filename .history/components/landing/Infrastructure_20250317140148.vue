<template>
    <div class="infrastructure-section">
        <div class="content-wrapper">
            <div class="image-container">
                <img src="@/assets/img/empowerment_toei.jpg" alt="Infrastructure program" class="infrastructure-image">
            </div>

            <div class="content-container">
                <h2 class="section-title">Infrastructure</h2>

                <div class="problem-section">
                    <h3 class="subsection-title problem-title">THE PROBLEM WE ARE SOLVING</h3>
                    <p class="problem-description">
                        Many communities lack the basic infrastructure needed for health, safety, and economic growth.
                        Inadequate roads, water systems, sanitation facilities, and public spaces limit access to
                        essential services and economic opportunities. Without proper infrastructure, communities
                        struggle with increased health risks, reduced mobility, and barriers to education and commerce,
                        perpetuating cycles of poverty and isolation.
                    </p>
                    <div class="divider"></div>
                </div>

                <div class="solution-section">
                    <h3 class="subsection-title solution-title">OUR SOLUTION</h3>
                    <div class="solution-content">
                        <p class="solution-description">
                            Through your sponsorship, you help develop sustainable infrastructure projects that improve
                            daily life and create opportunities. Our approach includes clean water systems, road
                            improvements, community centers, sanitation facilities, and renewable energy solutions that
                            are locally managed and maintained for long-term impact.
                        </p>

                        <div class="stats-container">
                            <div class="stats-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <rect x="2" y="12" width="4" height="8"></rect>
                                    <rect x="10" y="8" width="4" height="12"></rect>
                                    <rect x="18" y="4" width="4" height="16"></rect>
                                </svg>
                            </div>
                            <div class="stats-text">
                                <h4 class="stats-highlight">87%:</h4>
                                <p class="stats-description">Of communities report improved quality of life after
                                    infrastructure projects, with 65% reduction in waterborne illness and 40% increase
                                    in local economic activity</p>
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
    name: 'InfrastructureSection'
}
</script>

<style scoped>
.infrastructure-section {
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
    position: relative;
}

.infrastructure-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 100%;
    transform: translateY(-20%);
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
    font-weight: 700;
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