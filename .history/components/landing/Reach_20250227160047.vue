<template>
    <section class="impact-metrics-section">
        <div class="metrics-container">
            <!-- Updated single-line header with consistent font size -->
            <div class="metrics-header">
                <h2 class="headline">25K+ people reached</h2>
                <div class="location-badge">across Nigeria</div>
            </div>
        </div>

        <div class="metrics-map">
            <!-- Using client-only to handle the datawrapper -->
            <client-only>
                <div style="min-height:350px" id="datawrapper-vis-rpG4X" ref="datawrapperContainer">
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
    padding: 1.5rem 1rem;
    /* Reduced padding for overall smaller section */
    background-color: #f5f5f5;
}

.metrics-container {
    max-width: 900px;
    /* Reduced from 1000px to make section smaller */
    margin: 0 auto;
}

/* Updated header styling for single-line h3-sized heading */
.metrics-header {
    text-align: center;
    margin-bottom: 1.25rem;
}

.headline {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
    color: #333;
    display: inline-block;
}

.location-badge {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 1rem;
    padding: 0.4rem 0.8rem;
    font-size: 1.25rem;
    color: #086452;
    font-weight: 600;
}

.metrics-map {
    width: 100%;
    margin-bottom: 0.75rem;
    /* Reduced margin between map and metrics */
    border-radius: 8px;
    overflow: hidden;
    background-color: #f5f5f5;
}

.metrics-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 0.75rem;
    /* Reduced gap between cards */
    padding: 0.75rem;
    /* Reduced padding */
}

.metric-card {
    padding: 0.75rem;
    text-align: center;
    background-color: #fff;
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
    font-weight: 700;
    margin: 0 0 0.25rem 0;
    color: #086452;
    line-height: 1.1;
}

.metric-description {
    font-size: 0.875rem;
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

    .headline {
        font-size: 1.5rem;
        /* Slightly larger h3 on tablet */
    }

    .metric-value {
        font-size: 1.75rem;
    }
}

/* Additional improvements for desktop */
@media (min-width: 1024px) {
    .impact-metrics-section {
        padding: 2.5rem 1.5rem;
        /* Reduced from 3rem */
    }

    .headline {
        font-size: 1.75rem;
        /* Slightly larger h3 on desktop */
    }

    .metric-value {
        font-size: 2rem;
    }
}
</style>