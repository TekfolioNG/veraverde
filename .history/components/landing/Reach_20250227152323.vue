<template>
    <section class="impact-metrics-section">
        <div class="metrics-container">
            <div class="metrics-header">
                <h2 class="headline">25,000+ people reached</h2>
                <div class="location-badge">across Nigeria</div>
            </div>

            <div class="metrics-map">
                <!-- Nigerian map SVG - simplified outline -->
                <svg viewBox="0 0 400 400" class="nigeria-map">
                    <path
                        d="M200,100 C260,110 300,150 320,200 C340,250 330,300 290,330 C250,360 190,370 150,340 C110,310 90,260 100,210 C110,160 140,110 200,100 Z"
                        fill="#009976" stroke="#00B28A" stroke-width="1" />
                </svg>
            </div>

            <div class="metrics-grid">
                <div class="metric-card">
                    <h3 class="metric-value">5,000+</h3>
                    <p class="metric-description">donors have given directly</p>
                    <a href="#" class="metric-link">Give now →</a>
                </div>

                <div class="metric-card">
                    <h3 class="metric-value">95%</h3>
                    <p class="metric-description">of donations delivered to those in need, after costs</p>
                    <a href="#" class="metric-link">See how →</a>
                </div>

                <div class="metric-card">
                    <h3 class="metric-value">₦320M+</h3>
                    <p class="metric-description">delivered to people across Nigeria's 6 geo-political zones</p>
                </div>

                <div class="metric-card">
                    <h3 class="metric-value">15+</h3>
                    <p class="metric-description">academic studies on our programs</p>
                    <a href="#" class="metric-link">Read the research →</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
.impact-metrics-section {
    padding: 2rem 1rem;
}

.metrics-container {
    max-width: 1200px;
    margin: 0 auto;
}

.metrics-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.headline {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
}

.location-badge {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 1rem;
    padding: 0.25rem 0.75rem;
    font-size: 0.875rem;
    color: #086452;
}

.metrics-map {
    width: 100%;
    margin-bottom: 2rem;
}

.nigeria-map {
    width: 100%;
    height: auto;
    max-height: 300px;
}

.metrics-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    background-color: #ffffff;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.metric-card {
    padding: 1.5rem;
    border-bottom: 1px solid #f0f0f0;
}

.metric-card:last-child {
    border-bottom: none;
}

.metric-value {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
    color: #333;
}

.metric-description {
    font-size: 0.875rem;
    color: #666;
    margin: 0 0 0.75rem 0;
}

.metric-link {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    color: #086452;
    text-decoration: none;
}

/* Responsive adjustments */
@media (min-width: 768px) {
    .metrics-grid {
        grid-template-columns: repeat(4, 1fr);
    }

    .metric-card {
        border-bottom: none;
        border-right: 1px solid #f0f0f0;
    }

    .metric-card:last-child {
        border-right: none;
    }

    .headline {
        font-size: 1.75rem;
    }
}
</style>