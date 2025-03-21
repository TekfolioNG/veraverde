<template>
    <section class="impact-metrics-section">
        <div class="metrics-container">
            <!-- Removed header as requested -->

            <div class="metrics-map">
                <!-- Using client-only to handle the datawrapper -->
                <client-only>
                    <div style="min-height:558px" id="datawrapper-vis-rpG4X" ref="datawrapperContainer">
                        <!-- Script will be loaded in the onMounted hook -->
                        <img v-if="!scriptLoaded" src="https://datawrapper.dwcdn.net/rpG4X/full.png"
                            alt="Data visualization" />
                    </div>
                </client-only>
            </div>

            <div class="metrics-grid">
                <div class="metric-card">
                    <h3 class="metric-value">5,000+</h3>
                    <p class="metric-description"><strong>Lives Touched</strong></p>
                </div>

                <div class="metric-card">
                    <h3 class="metric-value">25+</h3>
                    <p class="metric-description"><strong>Communities</strong></p>
                </div>

                <div class="metric-card">
                    <h3 class="metric-value">12+</h3>
                    <p class="metric-description"><strong>Years of Service</strong></p>
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
}

.metrics-container {
    max-width: 1200px;
    margin: 0 auto;
}

.metrics-map {
    width: 100%;
    margin-bottom: 2rem;
}

.metrics-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    background-color: #f5f5f5;
    /* Light grey background as requested */
    border-radius: 1rem;
    /* Rounded edges as requested */
    overflow: hidden;
    padding: 1rem;
}

.metric-card {
    padding: 1.5rem;
    text-align: center;
    background-color: #f5f5f5;
    border: none;
}

.metric-value {
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
    color: #333;
}

.metric-description {
    font-size: 1rem;
    color: #444;
    margin: 0;
}

/* Responsive adjustments */
@media (min-width: 768px) {
    .metrics-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .metric-card {
        border: none;
    }

    .metric-value {
        font-size: 2rem;
    }
}
</style>