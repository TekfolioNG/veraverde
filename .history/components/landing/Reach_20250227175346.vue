<template>
    <section
        class="impact-metrics-section bg-gray-100 relative w-screen py-10 sm:py-12 translate-x-[-5%] sm:translate-x-[-2.8%]">
        <div class="metrics-container">
            <!-- Updated single-line header with consistent font size -->
            <div class="metrics-header">
                <h2 class="headline">25K+ people and communities reached</h2>
                <div class="location-badge">across Nigeria</div>
            </div>

            <div class="metrics-layout">
                <!-- Map on the left (now larger) -->
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

                <!-- Metrics cards on the right (now smaller and more compact) -->
                <div class="metrics-grid">
                    <div class="metric-card">
                        <div class="metric-content">
                            <h3 class="metric-value">5,000+</h3>
                            <h5 class="metric-description"><strong>Lives Touched</strong></h5>
                        </div>
                    </div>

                    <div class="metric-card">
                        <div class="metric-content">
                            <h3 class="metric-value">25+</h3>
                            <h5 class="metric-description"><strong>Communities</strong></h5>
                        </div>
                    </div>

                    <div class="metric-card">
                        <div class="metric-content">
                            <h3 class="metric-value">12+</h3>
                            <h5 class="metric-description"><strong>Years of Service</strong></h5>
                        </div>
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
}

.metrics-container {
    max-width: 900px;
    margin: 0 auto;
}

/* For desktop layout - contains map and metrics in side-by-side layout */
.metrics-layout {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

}

.metrics-header {
    text-align: center;
    margin-bottom: 1rem;
    /* Reduced from 1.25rem */
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
    font-size: 1.7rem;
    margin-left: 0.5rem;
    display: inline-block;
    color: #086452;
    font-weight: 600;
}

.metrics-map {
    width: 100%;
    margin-bottom: 0.5rem;
    /* Reduced from 0.75rem for mobile */
    border-radius: 8px;
    overflow: hidden;
    background-color: #f5f5f5;
}

.metrics-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 0.5rem;
    /* Reduced from 0.75rem */
    padding: 0.5rem;
    /* Reduced from 0.75rem */
}

.metric-card {
    padding: 0.5rem;
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
    margin: 0 0 0.15rem 0;
    color: #086452;
    line-height: 1.1;
}

.metric-description {
    font-size: 1rem;
    color: #333;
    margin: 0;
    font-weight: 500;
}

.metric-description strong {
    color: #333;
}

/* Responsive adjustments */
@media (min-width: 768px) {
    .metrics-layout {
        flex-direction: row;
        /* Side by side for tablet and desktop */
        align-items: flex-start;
    }

    .metrics-map {
        flex: 3;
        /* Increased from 2 to make map larger */
        margin-bottom: 0;
        /* Remove bottom margin for side-by-side */
    }

    .metrics-grid {
        flex: 1;
        /* Keeps cards smaller compared to map */
        grid-template-columns: 1fr;
        /* Stack cards vertically */
        align-self: stretch;
        /* Stretch to match map height */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.4rem;
        /* Even more compact padding */
        gap: 0.4rem;
        /* Even more compact gap */
    }

    .metric-card {
        flex-grow: 1;
        display: flex;
        align-items: center;
        margin-left: 3rem;
    }

    .headline {
        font-size: 1.5rem;
    }

    .metric-value {
        font-size: 1.6rem;
        padding-top: 2px;

    }

    .metric-description {
        font-size: 0.8rem;

    }
}

/* Additional improvements for desktop */
@media (min-width: 1024px) {
    .impact-metrics-section {
        padding: 2.5rem 1.5rem;
    }

    .headline {
        font-size: 1.75rem;
    }

    .metrics-map {
        flex: 4;
        /* Even larger map on desktop */
    }

    .metric-value {
        font-size: 1.8rem;
        /* Slightly smaller than original 2rem */
    }
}
</style>