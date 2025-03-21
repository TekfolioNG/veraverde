<template>
    <section class="impact-metrics-section">
        <div class="metrics-container">
            <!-- Header with adjusted font sizes -->
            <div class="metrics-header">
                <h2 class="headline">25K+ people reached</h2>
                <div class="location-badge">across Nigeria</div>
            </div>

            <div class="metrics-map">
                <!-- Using client-only to handle the datawrapper -->
                <client-only>
                    <div style="min-height:400px" id="datawrapper-vis-rpG4X" ref="datawrapperContainer">
                        <!-- Script will be loaded in the onMounted hook -->
                        <img v-if="!scriptLoaded" src="https://datawrapper.dwcdn.net/rpG4X/full.png"
                            alt="World map showing impact" />
                    </div>
                </client-only>
            </div>

            <div class="metrics-grid">
                <div class="metric-card">
                    <div class="metric-content">
                        <h3 class="metric-value">5,000+</h3>
                        <p class="metric-description"><strong>Lives Touched</strong></p>
                    </div>
                </div>

                <div class="metric-card">
                    <div class="metric-content">
                        <h3 class="metric-value">25+</h3>
                        <p class="metric-description"><strong>Communities</strong></p>
                    </div>
                </div>

                <div class="metric-card">
                    <div class="metric-content">
                        <h3 class="metric-value">12+</h3>
                        <p class="metric-description"><strong>Years of Service</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const datawrapperContainer = ref(null)
const scriptLoaded = ref(false)

onMounted(() => {
    // Load the Datawrapper script programmatically
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.defer = true
    script.src = 'https://datawrapper.dwcdn.net/rpG4X/embed.js'
    script.charset = 'utf-8'
    script.dataset.target = '#datawrapper-vis-rpG4X'

    script.onload = () => {
        scriptLoaded.value = true
    }

    document.head.appendChild(script)
})
</script>

<style scoped>
.impact-metrics-section {
    padding: 2rem 1rem;
    background-color: #f5f5f5;
    /* Consistent light grey background */
}

.metrics-container {
    max-width: 1000px;
    /* Reduced from 1200px to make entire section smaller */
    margin: 0 auto;
}

/* Improved header styling with adjusted font sizes */
.metrics-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    justify-content: center;
}

.headline {
    font-size: 3.875rem;
    /* Reduced size to match location badge */
    font-weight: 700;
    margin: 0;
    color: #333;
}

.location-badge {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    /* Increased padding around text */
    font-size: 0.875rem;
    color: #086452;
    font-weight: 600;
}

.metrics-map {
    width: 100%;
    margin-bottom: 1.5rem;
    border-radius: 8px;
    overflow: hidden;
    background-color: #f5f5f5;
    /* Same light grey background */
    /* Reduced map height by changing min-height in div style */
}

.metrics-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    padding: 1rem;
}

.metric-card {
    padding: 1rem;
    text-align: center;
    background-color: #fff;
    /* White backgrounds for differentiation */
    border-radius: 0.75rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.metric-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

.metric-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.metric-value {
    font-size: 1.5rem;
    /* Reduced text size */
    font-weight: 700;
    margin: 0 0 0.25rem 0;
    color: #086452;
    line-height: 1.1;
}

.metric-description {
    font-size: 0.875rem;
    /* Reduced text size */
    color: #555;
    margin: 0;
    font-weight: 500;
}

.metric-description strong {
    color: #333;
}

/* Responsive adjustments */
@media (min-width: 768px) {
    .metrics-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .metrics-header {
        justify-content: flex-start;
    }

    .headline {
        font-size: 0.875rem;
        /* Keeping the same size as location badge */
    }

    .metric-value {
        font-size: 1.75rem;
    }
}

/* Additional improvements for desktop */
@media (min-width: 1024px) {
    .impact-metrics-section {
        padding: 3rem 1.5rem;
        /* Reduced padding */
    }

    .headline {
        font-size: 0.875rem;
        /* Keeping the same size as location badge */
    }

    .metric-value {
        font-size: 2rem;
        /* Reduced from 2.5rem */
    }
}
</style>