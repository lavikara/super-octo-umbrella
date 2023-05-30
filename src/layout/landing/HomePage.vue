<template>
  <div id="homepage" class="tw-bg-purple">
    <HeroSection />
    <ProductsSection />
    <TransparencySection />
    <OpportunitySection />
    <AccessMoreSection />
    <WordForItSection />
    <AvailableSection />
    <TractionSection />
  </div>
</template>

<script setup>
import HeroSection from '@/components/landing/homepage/HeroSection.vue'
import ProductsSection from '@/components/landing/homepage/ProductsSection.vue'
import TransparencySection from '@/components/landing/homepage/TransparencySection.vue'
import OpportunitySection from '@/components/landing/homepage/OpportunitySection.vue'
import AccessMoreSection from '@/components/landing/homepage/AccessMoreSection.vue'
import WordForItSection from '@/components/landing/homepage/WordForItSection.vue'
import AvailableSection from '@/components/landing/homepage/AvailableSection.vue'
import TractionSection from '@/components/landing/homepage/TractionSection.vue'
</script>

<style lang="scss" scoped></style>
<style lang="scss">
.carousel__slide {
  display: block;
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
