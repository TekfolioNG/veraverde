<template>
    <div class="focus-container">
        <h1>What We Focus On</h1>

        <section class="focus-section">
            <h2>Lasting Impact</h2>
            <p>
                Individuals and communities facing significant challenges often struggle to break the cycle of poverty
                and hardship. Your support during this critical time helps transform lives and communities for years to
                come.
            </p>
            <a href="/where-we-work" class="cta-link">LEARN MORE ABOUT WHERE WE WORK ▶</a>
        </section>

        <section class="focus-section">
            <h2>Empowerment Through Skills</h2>
            <p>
                Our programs provide individuals with the opportunity to learn marketable skills, enabling them to
                contribute positively to their families and communities. From carpentry to business management, we equip
                people with the tools they need to succeed.
            </p>
            <a href="/community-centers" class="cta-link">EXPLORE OUR COMMUNITY CENTERS ▶</a>
        </section>

        <section class="focus-section">
            <h2>Building Sustainable Communities</h2>
            <p>
                As a supporter, you’ll help disadvantaged individuals and communities overcome their biggest struggles:
                gaining access to healthcare, developing sustainable water sources, and building vital infrastructure.
            </p>
            <a href="/our-approach" class="cta-link">READ MORE ABOUT OUR APPROACH ▶</a>
        </section>

        <h3 class="call-to-action"><strong>Give hope to a life or community. Sponsor a project today.</strong></h3>
    </div>
</template>

<script>
export default {
    name: 'FocusSection',
};
</script>

<style scoped>
.focus-container {
    padding: 2rem;
    text-align: center;
    background-color: #f9f9f9;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #2c3e50;
}

.focus-section {
    margin-bottom: 3rem;
}

h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #34495e;
}

p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #666;
    margin-bottom: 1.5rem;
}

.cta-link {
    font-size: 1.1rem;
    color: #3498db;
    text-decoration: none;
    font-weight: bold;
}

.cta-link:hover {
    text-decoration: underline;
}

.call-to-action {
    font-size: 1.5rem;
    color: #e74c3c;
    margin-top: 2rem;
}
</style>