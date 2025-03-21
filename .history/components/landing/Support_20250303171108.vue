<template>
    <section class="parallax-hero">
        <div class="parallax-container" ref="parallaxContainer">
            <div class="parallax-image" ref="parallaxImage"></div>
            <div class="overlay"></div>
            <div class="content-container">
                <div class="caption-box">
                    <h2 class="caption-title">Empowering Communities</h2>
                    <p class="caption-text">Building sustainable futures through compassionate action and innovative
                        solutions.</p>
                    <div class="cta-container">
                        <NuxtLink to="/about" class="primary-cta">Learn Our Story</NuxtLink>
                        <NuxtLink to="/donate" class="secondary-cta">Support Our Mission</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const parallaxContainer = ref(null);
const parallaxImage = ref(null);
let scrollHandler = null;

onMounted(() => {
    // Set the background image using the asset from the folder
    if (parallaxImage.value) {
        parallaxImage.value.style.backgroundImage = "url('/assets/img/toei_hero.jpg')";
    }

    // Initialize parallax effect
    scrollHandler = () => {
        if (!parallaxContainer.value || !parallaxImage.value) return;

        const scrollPosition = window.pageYOffset;
        const containerTop = parallaxContainer.value.offsetTop;
        const containerHeight = parallaxContainer.value.offsetHeight;

        // Check if the parallax element is in view
        if (scrollPosition + window.innerHeight >= containerTop &&
            scrollPosition <= containerTop + containerHeight) {
            // Calculate parallax offset - move at 40% of scroll speed
            const offset = (scrollPosition - containerTop) * 0.4;
            parallaxImage.value.style.transform = `translateY(${offset}px)`;
        }
    };

    // Add scroll event listener
    window.addEventListener('scroll', scrollHandler);

    // Trigger once on load to ensure proper positioning
    scrollHandler();
});

onUnmounted(() => {
    // Clean up event listener
    if (scrollHandler) {
        window.removeEventListener('scroll', scrollHandler);
    }
});
</script>

<style scoped>
.parallax-hero {
    width: 100%;
    overflow: hidden;
}

.parallax-container {
    position: relative;
    height: 80vh;
    min-height: 500px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.parallax-image {
    position: absolute;
    top: -20%;
    left: 0;
    width: 100%;
    height: 120%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1;
    will-change: transform;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6));
    z-index: 2;
}

.content-container {
    position: relative;
    width: 100%;
    max-width: 1200px;
    padding: 0 2rem;
    z-index: 3;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.caption-box {
    background: rgba(8, 100, 82, 0.8);
    /* Using the brand teal color with transparency */
    backdrop-filter: blur(8px);
    border-radius: 8px;
    padding: 2.5rem;
    max-width: 550px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transform: translateY(0);
    transition: transform 0.4s ease;
}

.caption-box:hover {
    transform: translateY(-5px);
}

.caption-title {
    color: #ffffff;
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
    line-height: 1.2;
}

.caption-text {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.125rem;
    line-height: 1.6;
    margin: 0 0 1.5rem 0;
}

.cta-container {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.primary-cta,
.secondary-cta {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.3s ease;
}

.primary-cta {
    background-color: #ffffff;
    color: #086452;
    border: 2px solid #ffffff;
}

.primary-cta:hover {
    background-color: transparent;
    color: #ffffff;
}

.secondary-cta {
    background-color: transparent;
    color: #ffffff;
    border: 2px solid #ffffff;
}

.secondary-cta:hover {
    background-color: rgba(255, 255, 255, 0.2);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .parallax-container {
        height: 70vh;
    }

    .content-container {
        justify-content: center;
        text-align: center;
    }

    .caption-box {
        padding: 2rem;
        max-width: 90%;
    }

    .caption-title {
        font-size: 2rem;
    }

    .caption-text {
        font-size: 1rem;
    }

    .cta-container {
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .parallax-container {
        min-height: 450px;
    }

    .caption-box {
        padding: 1.5rem;
    }

    .caption-title {
        font-size: 1.75rem;
    }

    .primary-cta,
    .secondary-cta {
        width: 100%;
        text-align: center;
    }
}
</style>