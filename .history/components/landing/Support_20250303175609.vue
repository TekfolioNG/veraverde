<template>
    <section class="parallax-section">
        <div class="parallax-image" :style="{ backgroundImage: `url(${imageUrl})` }"></div>
        <div class="overlay">
            <div class="caption">
                <h2 class="caption-title">Empowering Lives, Building Futures</h2>
                <p class="caption-text">Join us in creating lasting change for individuals and communities across
                    Nigeria.</p>
                <NuxtLink to="/get-involved" class="cta-button">Get Involved</NuxtLink>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            imageUrl: require('~/assets/img/toei_hero.jpg'),
        };
    },
};
</script>

<style scoped>
.parallax-section {
    position: relative;
    height: 500px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.parallax-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('~/assets/img/toei_hero.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    z-index: 1;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
}

.caption {
    text-align: center;
    color: white;
    max-width: 800px;
    padding: 0 20px;
}

.caption-title {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.caption-text {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.cta-button {
    display: inline-block;
    background-color: #009976;
    color: white;
    padding: 0.8rem 2rem;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

.cta-button:hover {
    background-color: #00B28A;
}

@media (max-width: 768px) {
    .caption-title {
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }

    .caption-text {
        font-size: 1rem;
        margin-bottom: 1.5rem;
    }

    .cta-button {
        padding: 0.6rem 1.5rem;
        font-size: 0.9rem;
    }
}
</style>