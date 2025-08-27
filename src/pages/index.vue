<template>
  <div class="index-page">
    <Hero />
    <Stats />
    <About />
    <Services />
    <Features />
    <CallToAction />
    <FeatureDetails />
    <Portfolio />
    <Faq />
    <Team />
    <Pricing />
    <Contact />
  </div>
</template>

<script setup>
import Hero from '../components/Hero.vue';
import About from '../components/About.vue';
import Stats from '../components/Stats.vue';
import Services from '../components/Services.vue';
import Features from '../components/Features.vue';
import CallToAction from '../components/CallToAction.vue';
import FeatureDetails from '../components/FeatureDetails.vue';
import Portfolio from '../components/Portfolio.vue';
import Faq from '../components/Faq.vue';
import Team from '../components/Team.vue';
import Pricing from '../components/Pricing.vue';
import Contact from '../components/Contact.vue';

const goToAbout = () => {
  navigateTo('/about');
};
</script>

<style scoped>
.index-page {
  text-align: center;
}
</style>