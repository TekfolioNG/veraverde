<template>
    <section class="ppil-advantage">
        <div class="container">
            <div class="logo-wrapper">
                <img src="~/assets/img/PPIL-Logo.svg" alt="PPIL Logo" class="advantage-logo" loading="lazy" />
            </div>
            <h2 class="section-title">The PPIL Advantage</h2>
            <div class="advantage-content">
                <p class="advantage-text">
                    Built for impact. Proven by results. At PPIL, we don't just build projects — we engineer trust,
                    performance, and long-term value. With a hybrid model that blends smart project execution,
                    technical depth, and a responsive team culture, the PPIL advantage lies in how we think,
                    plan, and deliver — every time.
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
// No script logic needed for this static component
</script>

<style scoped>
.ppil-advantage {
    padding: 4rem 1rem;
    background-color: #f8f8f8;
    text-align: center;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.logo-wrapper {
    margin-bottom: 1rem;
}

.advantage-logo {
    height: 60px;
    width: auto;
    opacity: 0.8;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;
}

.advantage-content {
    max-width: 800px;
    margin: 0 auto;
}

.advantage-text {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 0;
}

@media (max-width: 768px) {
    .ppil-advantage {
        padding: 3rem 1rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .advantage-text {
        font-size: 1.1rem;
    }
}
</style>