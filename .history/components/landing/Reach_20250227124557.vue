<template>
    <section class="impact-metrics-section">
        <div class="metrics-container">
            <div class="metrics-header">
                <h2 class="headline">5,000+</h2>
                <div class="location-badge">across Nigeria</div>
            </div>

            <div class="metrics-map">
                <!-- Nigerian map SVG with random states highlighted -->
                <svg viewBox="0 0 500 500" class="nigeria-map">
                    <!-- Base Nigeria outline -->
                    <path
                        d="M250,100 C330,110 390,170 410,240 C430,310 410,380 350,420 C290,460 210,460 150,420 C90,380 70,310 90,240 C110,170 170,110 250,100 Z"
                        fill="#f5f5f5" stroke="#e0e0e0" stroke-width="2" />

                    <!-- Random highlighted states -->
                    <path
                        d="M160,240 C180,220 210,220 230,240 C250,260 250,290 230,310 C210,330 180,330 160,310 C140,290 140,260 160,240 Z"
                        fill="#00B28A" fill-opacity="0.8" />
                    <path
                        d="M290,180 C310,160 340,160 360,180 C380,200 380,230 360,250 C340,270 310,270 290,250 C270,230 270,200 290,180 Z"
                        fill="#00B28A" fill-opacity="0.7" />
                    <path
                        d="M310,300 C325,285 350,285 365,300 C380,315 380,340 365,355 C350,370 325,370 310,355 C295,340 295,315 310,300 Z"
                        fill="#00B28A" fill-opacity="0.6" />
                    <path
                        d="M190,170 C205,155 225,155 240,170 C255,185 255,205 240,220 C225,235 205,235 190,220 C175,205 175,185 190,170 Z"
                        fill="#00B28A" fill-opacity="0.9" />
                    <path
                        d="M250,350 C265,335 285,335 300,350 C315,365 315,385 300,400 C285,415 265,415 250,400 C235,385 235,365 250,350 Z"
                        fill="#00B28A" fill-opacity="0.75" />
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
    padding: 3rem 1rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
}

.metrics-container {
    max-width: 1200px;
    margin: 0 auto;
}

.metrics-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.5rem;
    margin-bottom: 2.5rem;
}

.headline {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0;
    color: #333;
}

.location-badge {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 1rem;
    padding: 0.25rem 0.75rem;
    font-size: 0.875rem;
    color: #00B28A;
}

.metrics-map {
    width: 100%;
    margin: 0 auto 3rem;
    max-width: 600px;
}

.nigeria-map {
    width: 100%;
    height: auto;
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
    color: #00B28A;
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
        font-size: 3rem;
    }
}
</style>