<script setup lang="ts">
definePageMeta({
  layout: "landing"
});

useSeoMeta({
  title: 'The OakTree Empowerment Intiative',
  ogTitle: 'The OakTree Empowerment Intiative',
  titleTemplate: 'The OakTree Empowerment Intiative',
  description: 'Rebuilding Lives & Communities',
  ogDescription: 'Rebuilding Lives & Communities',

  twitterCard: 'summary_large_image',
  twitterTitle: 'The OakTree Empowerment Intiative',
  twitterDescription: 'Rebuilding Lives & Communities',

  ogImage: {
    url: 'https://oaktreeinitiative.org/toei-empowerment.jpg',
    width: 1200,
    height: 630,
    alt: 'The OakTree Empowerment Intiative - Rebuilding Lives & Communities'
  },
  twitterImage: 'https://oaktreeinitiative.org/toei-empowerment.jpg'
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
    <LandingCookiesPopup></LandingCookiesPopup>
  </LandingContainer>
</template>
