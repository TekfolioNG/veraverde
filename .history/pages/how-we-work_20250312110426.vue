<template>
    <section class="impact-section">
        <div class="impact-background">
            <div class="container">
                <div class="content-wrapper">
                    <h2 class="impact-title">Impact that lasts</h2>
                    <p class="impact-subtitle">programs that enable <span class="highlight">REBUILDING LIVES,
                            TRANSFORMING COMMUNITIES</span></p>

                    <div class="impact-card">
                        <div class="card-content">
                            <p class="impact-fact">
                                <strong>It's a fact:</strong> Without access to skills and opportunities, individuals
                                face barriers to self-sustaining futures...
                            </p>

                            <div class="divider"></div>

                            <p class="impact-description">
                                ...and the cycle of hardship continues. With your support, The Oaktree Empowerment
                                Initiative works to rebuild lives and transform communities with long-term, customized
                                programs that create lasting change for individuals and communities across Nigeria.
                            </p>

                            <h3 class="impact-subheading">Empowerment positively impacts individual development and
                                community well-being</h3>

                            <div class="impact-text-wrapper">
                                <div class="image-accent">
                                    <img src="@/assets/img/toei-our-impact.png" alt="Our impact in communities"
                                        class="impact-accent-image">
                                </div>

                                <p class="impact-text">
                                    Individuals facing challenges typically lack proper skills, healthcare, and support
                                    systems. They're also more likely to be exposed to economic instability and limited
                                    opportunities. All of this can impair personal development, negatively impacting
                                    long-term physical and mental well-being.
                                </p>

                                <p class="impact-text">
                                    TOEI contributors invest in the lives of individuals, helping them acquire the
                                    education, skills and confidence they need to build self-sustaining futures. The
                                    force of our combined efforts starts a powerful multiplier effect that empowers
                                    people to change their own lives and futures, transforming their families and
                                    communities too.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.impact-section {
    padding: 8rem 2rem 4rem;
    /* Added more top padding to avoid navbar overlap */
    position: relative;
}

.impact-background {
    background-color: #f8faf7;
    padding: 1rem;
    border-radius: 12px;
}

.container {
    max-width: 1000px;
    margin: 0 auto;
}

.content-wrapper {
    position: relative;
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

.impact-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
    padding: 2rem;
    position: relative;
}

.card-content {
    max-width: 850px;
    margin: 0 auto;
}

.divider {
    height: 2px;
    background-color: #CEE377;
    margin: 1.5rem 0;
    width: 100%;
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

.impact-text-wrapper {
    position: relative;
}

.image-accent {
    float: right;
    width: 40%;
    margin: 0 0 1.5rem 1.5rem;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    shape-outside: margin-box;
}

.impact-accent-image {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
}

.image-accent:hover .impact-accent-image {
    transform: scale(1.02);
}

.impact-text {
    font-size: 1.05rem;
    line-height: 1.7;
    color: #4b5563;
    margin-bottom: 1.5rem;
}

@media (max-width: 992px) {
    .impact-section {
        padding: 7rem 1.5rem 3rem;
    }

    .image-accent {
        width: 50%;
        margin: 0 0 1rem 1rem;
    }
}

@media (max-width: 768px) {
    .impact-section {
        padding: 6rem 1.25rem 2.5rem;
    }

    .impact-card {
        padding: 1.5rem;
    }

    .impact-title {
        font-size: 2rem;
    }

    .impact-subheading {
        font-size: 1.3rem;
    }

    .image-accent {
        float: none;
        width: 100%;
        max-width: 450px;
        margin: 0 auto 2rem;
        display: block;
    }
}

@media (max-width: 480px) {
    .impact-section {
        padding: 5rem 1rem 2rem;
    }

    .impact-card {
        padding: 1.25rem;
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

    .impact-text {
        font-size: 1rem;
    }
}
</style>

<script setup lang="ts">
definePageMeta({
    layout: "landing"
});

</script>