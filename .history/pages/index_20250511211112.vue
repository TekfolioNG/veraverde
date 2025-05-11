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
    url: 'https://res.cloudinary.com/tekfoliong/image/upload//l_image:upload:PPIL_Logo_kmasnb/c_scale,fl_relative,w_0.30/o_100/fl_layer_apply,g_north_east,x_0.03,y_0.04/v1746992414/PPIL3_hxfrc6.jpg',
    width: 1200,
    height: 630,
    alt: 'PPIL | Premium Projects Infrastructure Limited',
  },
  twitterImage: 'https://res.cloudinary.com/tekfoliong/image/upload//l_image:upload:PPIL_Logo_kmasnb/c_scale,fl_relative,w_0.30/o_100/fl_layer_apply,g_north_east,x_0.03,y_0.04/v1746992414/PPIL3_hxfrc6.jpg'

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
