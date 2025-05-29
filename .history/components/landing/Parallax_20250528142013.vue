<template>
    <section class="parallax-hero w-screen max-w-full">
        <div class="parallax-container" ref="parallaxContainer">
            <div class="parallax-video" ref="parallaxVideo">
                <video
                    ref="videoElement"
                    autoplay
                    muted
                    loop
                    playsinline
                    preload="metadata"
                    class="video-background"
                >
                    <source src="~/assets/video/our-mission-xstrato.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="overlay"></div>
           
                <div class="caption-box">
                    <h3 class="caption-title">We rethink the ordinary, bringing fresh ideas and practical innovation to every project we take on.</h3>
                    <div class="cta-container">
                        <NuxtLink to="/who-we-do" class="primary-cta">Our Services</NuxtLink>
                        <NuxtLink to="/contact" class="secondary-cta">Contact Us</NuxtLink>
                    </div>
                </div>
            
        </div>
    </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const parallaxContainer = ref(null);
const parallaxVideo = ref(null);
const videoElement = ref(null);
let scrollHandler = null;

onMounted(() => {
    // Ensure video plays properly
    if (videoElement.value) {
        videoElement.value.play().catch(error => {
            console.log('Video autoplay failed:', error);
        });
    }

    scrollHandler = () => {
        if (!parallaxContainer.value || !parallaxVideo.value) return;

        const scrollPosition = window.pageYOffset;
        const containerTop = parallaxContainer.value.offsetTop;
        const containerHeight = parallaxContainer.value.offsetHeight;

        if (scrollPosition + window.innerHeight >= containerTop &&
            scrollPosition <= containerTop + containerHeight) {
            const offset = (scrollPosition - containerTop) * 0.6;
            parallaxVideo.value.style.transform = `translateY(${offset}px)`;
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
    width: 100vw;
    max-width: 100vw;
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
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
    margin: 0;
    padding: 0;
    left: 50%;
    transform: translateX(-50%);
}

.parallax-video {
    position: absolute;
    top: -10%;
    left: 0;
    width: 100%;
    height: 120%;
    z-index: 1;
    will-change: transform;
}

.video-background {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3));
    z-index: 2;
}


.caption-box {
    border-radius: 8px;
    padding: 2rem;
    max-width: 450px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transform: translateY(0);
    transition: transform 0.4s ease;
    margin-left: 3rem;
}

.caption-box:hover {
    transform: translateY(-5px);
}

.caption-title {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
    line-height: 1.2;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
    letter-spacing: 0.5px;
}

.cta-container {
    display: flex;
    flex-wrap: nowrap;
    gap: 1rem;
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
    white-space: nowrap;
}

.primary-cta {
    background-color: #ffffff;
    color: #002244;
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

@media (max-width: 768px) {
    .parallax-container {
        height: 70vh;
    }

    .content-container {
        justify-content: center;
        text-align: center;
        align-items: flex-end;
        padding-bottom: 3rem;
    }

    .caption-box {
        margin-left: 0;
        max-width: 90%;
    }

    .caption-title {
        font-size: 1.25rem;
    }

    .parallax-hero {
        margin-bottom: 2rem;
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
        font-size: 1.25rem;
    }

    .cta-container {
        flex-direction: column;
        align-items: center;
    }

    .primary-cta,
    .secondary-cta {
        width: 100%;
        max-width: 250px;
        margin-bottom: 0.75rem;
    }

    .content-container {
        padding-bottom: 2rem;
    }
}
</style>