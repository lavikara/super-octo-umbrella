<template>
  <div id="landing-view">
    <TopNav class="tw-fixed tw-hidden lg:tw-block tw-z-50" />
    <MobileNav class="tw-fixed lg:tw-hidden tw-z-50" />
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <FooterComponent v-if="route.name !== 'WaitlistPage'" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import TopNav from '@/layout/navigation/TopNav.vue'
import MobileNav from '@/layout/navigation/MobileNav.vue'
import FooterComponent from '@/layout/navigation/FooterComponent.vue'

const route = useRoute()
</script>

<style lang="scss" scoped>
#landing-view {
  @include fadeIn;

  // .container {
  //   @media (min-width: 1024px) {
  //     max-width: 1280px;
  //     margin-left: auto;
  //     margin-right: auto;
  //     -ms-overflow-style: none; /* IE and Edge */
  //     scrollbar-width: none;

  //     &::-webkit-scrollbar {
  //       display: none;
  //     }
  //   }
  // }
}
</style>
