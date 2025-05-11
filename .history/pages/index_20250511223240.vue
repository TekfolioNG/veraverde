<script setup lang="ts">
definePageMeta({
  layout: "landing"
});

useSeoMeta({
  title: 'PPIL | Premium Projects Infrastructure Limited',
  ogTitle: 'PPIL | Premium Projects Infrastructure Limited',
  twitterCard: 'summary_large_image',
  twitterTitle: 'PPIL | Premium Projects Infrastructure Limited',
  twitterDescription: 'PPIL | Premium Projects Infrastructure Limited',

  ogImage: {
    url: '/PPIL-og-image.png',
    width: 1200,
    height: 630,
    alt: 'PPIL | Premium Projects Infrastructure Limited',
  },
  twitterImage: '/PPIL-og-image.png'

})
</script>

<template>
  <LandingContainer>
    <LandingHero></LandingHero>
    <LandingFeatures></LandingFeatures>
    <LandingOurFocus></LandingOurFocus>
    <LandingSupport></LandingSupport>
    <LazyLandingReach></LazyLandingReach>
    <LandingCta></LandingCta>
    </LandingContainer>
</template>
