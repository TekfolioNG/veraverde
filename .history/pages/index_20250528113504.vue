<script setup lang="ts">
definePageMeta({
  layout: "landing"
});

useHead({
  meta: [
    { property: 'og:title', content: 'PPIL | Premium Projects Infrastructure Limited' },
    { property: 'og:description', content: 'Excellence & Innovation in Infrastructure.' },
    { property: 'og:image', content: 'https://ppil.com.ng/PPIL-og-image.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'PPIL | Premium Projects Infrastructure Limited' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'PPIL | Premium Projects Infrastructure Limited' },
    { name: 'twitter:description', content: 'PPIL | Premium Projects Infrastructure Limited' },
    { name: 'twitter:image', content: 'https://ppil.com.ng/PPIL-og-image.png' }
  ]
});
</script>

<template>
  <LandingContainer>
    <LandingHero></LandingHero>
    <LandingIntro></LandingIntro>
    <LandingServices></LandingServices>
    <LandingSupport></LandingSupport>
    <LazyLandingReach></LazyLandingReach>
    <LandingCta></LandingCta>
    </LandingContainer>
</template>
