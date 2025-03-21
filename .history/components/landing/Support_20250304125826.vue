<template>
    <section class="parallax-hero w-screen max-w-screen -mx-[5vw] sm:-mx-[2.8vw] overflow-x-hidden">
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
import heroImage from '~/assets/img/toei_hero.jpg';

const parallaxContainer = ref(null);
const parallaxImage = ref(null);
let scrollHandler = null;

onMounted(() => {
    if (parallaxImage.value) {
        parallaxImage.value.style.backgroundImage = `url(${heroImage})`;
    }

    scrollHandler = () => {
        if (!parallaxContainer.value || !parallaxImage.value) return;

        const scrollPosition = window.pageYOffset;
        const containerTop = parallaxContainer.value.offsetTop;
        const containerHeight = parallaxContainer.value.offsetHeight;

        if (scrollPosition + window.innerHeight >= containerTop &&
            scrollPosition <= containerTop + containerHeight) {
            const offset = (scrollPosition - containerTop) * 0.6;
            parallaxImage.value.style.transform = `translateY(${offset}px)`;
        }
    };

    window.addEventListener('scroll', scrollHandler);
    scrollHandler();
});

onUnmounted(() => {
    if (scrollHandler) {
        window.removeEventListener('scroll', scrollHandler);
    }
});
</script>

<style scoped>
.parallax-hero {
    width: 100%;
    margin-left: 0;
    padding-left: 0;
    overflow: hidden;
}

.parallax-container {
    position: relative;
    height: 80vh;
    min-height: 500px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100vw;
    margin: 1rem 0;
    padding: 0;
    left: 50%;
    transform: translateX(-50%);
}

.parallax-image {
    position: absolute;
    top: -20%;
    left: 0;
    width: 100%;
    height: 140%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1;
    will-change: transform;
}

/* Rest of the CSS remains the same as in the original component */
</style>