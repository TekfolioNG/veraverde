<template>
    <section class="impact-section">
        <div class="container">
            <div class="content-grid">
                <div class="content-column">
                    <h2 class="impact-title">Impact that lasts</h2>
                    <p class="impact-subtitle">programs that enable <span class="highlight">REBUILDING LIVES,
                            TRANSFORMING COMMUNITIES</span></p>

                    <div class="divider"></div>

                    <p class="impact-fact">
                        <strong>It's a fact:</strong> Without access to skills and opportunities, individuals face
                        barriers to self-sustaining futures...
                    </p>

                    <div class="divider"></div>

                    <p class="impact-description">
                        ...and the cycle of hardship continues. With your support, The Oaktree Empowerment Initiative
                        works to rebuild lives and transform communities with long-term, customized programs that create
                        lasting change for individuals and communities across Nigeria.
                    </p>

                    <h3 class="impact-subheading">Empowerment positively impacts individual development and community
                        well-being</h3>

                    <p class="impact-text">
                        Individuals facing challenges typically lack proper skills, healthcare, and support systems.
                        They're also more likely to be exposed to economic instability and limited opportunities. All of
                        this can impair personal development, negatively impacting long-term physical and mental
                        well-being.
                    </p>

                    <p class="impact-text">
                        TOEI contributors invest in the lives of individuals, helping them acquire the education, skills
                        and confidence they need to build self-sustaining futures. The force of our combined efforts
                        starts a powerful multiplier effect that empowers people to change their own lives and futures,
                        transforming their families and communities too.
                    </p>
                </div>

                <div class="image-column">
                    <img src="@/assets/img/toei-our-impact.png" alt="Our impact in communities" class="impact-image">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.impact-section {
    padding: 4rem 2rem;
    background-color: #f8f9fa;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.content-grid {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 3rem;
    align-items: center;
}

.impact-title {
    font-size: 2.5rem;
    color: #333;
    text-align: center;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.impact-subtitle {
    text-align: center;
    color: #666;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
}

.highlight {
    color: #901F61;
    font-weight: 500;
}

.divider {
    height: 1px;
    background-color: #CEE377;
    margin: 1.5rem 0;
}

.impact-fact {
    font-size: 1.25rem;
    text-align: center;
    color: #333;
    margin: 1rem 0;
}

.impact-fact strong {
    color: #065f46;
    /* emerald-700 */
}

.impact-description {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    color: #4b5563;
}

.impact-subheading {
    font-size: 1.5rem;
    color: #065f46;
    /* emerald-700 */
    margin-bottom: 1.25rem;
    font-weight: 600;
}

.impact-text {
    font-size: 1.05rem;
    line-height: 1.7;
    color: #4b5563;
    margin-bottom: 1.5rem;
}

.impact-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@media (max-width: 992px) {
    .content-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .image-column {
        order: -1;
    }

    .impact-image {
        max-width: 100%;
        margin: 0 auto;
        display: block;
    }
}

@media (max-width: 768px) {
    .impact-section {
        padding: 3rem 1.5rem;
    }

    .impact-title {
        font-size: 2rem;
    }

    .impact-subheading {
        font-size: 1.25rem;
    }
}

@media (max-width: 480px) {
    .impact-section {
        padding: 2rem 1rem;
    }

    .impact-title {
        font-size: 1.75rem;
    }

    .impact-subtitle {
        font-size: 1rem;
    }

    .impact-fact {
        font-size: 1.1rem;
    }
}
</style>

<script setup>
definePageMeta({
    layout: "landing",
});
</script>