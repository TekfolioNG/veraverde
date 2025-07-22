<script setup lang="ts">
definePageMeta({
  layout: "landing"
});

useHead({
  title: 'Vera Verde | Ignite a sustainable future',
  meta: [
    { property: 'og:title', content: 'VeraVerde | Eco-Smart Agriculture & Clean Energy Solutions' },
    { property: 'og:description', content: 'Driving climate-smart farming and sustainable biofuels across Africa. VeraVerde connects innovation with impact in agriculture and renewable energy.' },
    { property: 'og:image', content: '/veraverde-og.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'VeraVerde - Climate-Smart Agriculture & Clean Energy' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'VeraVerde | Eco-Smart Agriculture & Clean Energy Solutions' },
    { name: 'twitter:description', content: 'Driving climate-smart farming and sustainable biofuels across Africa.' },
    { name: 'twitter:image', content: '/veraverde-og.jpg' }
  ]
});

</script>

<template>
  <LandingContainer>
    <LandingHero></LandingHero>
  </LandingContainer>
  <LandingIntro></LandingIntro>
  <LandingStats></LandingStats>
  <LandingOurMission></LandingOurMission>
  <LandingServices></LandingServices>
  <LandingCta></LandingCta>
</template>