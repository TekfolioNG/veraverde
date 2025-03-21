<script setup lang="ts">
definePageMeta({
  layout: "landing"
});

useSeoMeta({
  title: 'Petabiz Nigeria Ltd',
  ogTitle: 'Petabiz Nigeria Ltd',
  titleTemplate: 'Petabiz Nigeria Ltd',
  description: 'Global OEM Solutions for Enterprise Success.',
  ogDescription: 'Global OEM Solutions for Enterprise Success',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Petabiz Nigeria Ltd',
  twitterDescription: 'Global OEM Solutions for Enterprise Success',

  ogImage: {
    url: 'https://petabiz-telco.com/Petabiz-Telco.png',
    width: 1200,
    height: 630,
    alt: 'Petabiz Nigeria Ltd - Trsuted Tech Partner'
  },
  twitterImage: 'https://petabiz-telco.com/Petabiz-Telco.png'
})
</script>

<template>
  <LandingContainer>
    <LandingHero></LandingHero>
    <LandingFeatures></LandingFeatures>
    <LandingOurFocus></LandingOurFocus>
    <LandingSupport></LandingSupport>
    <LandingReach></LandingReach>
    <LandingCta></LandingCta>
    <LandingCookiesPopup></LandingCookiesPopup>
  </LandingContainer>
</template>
