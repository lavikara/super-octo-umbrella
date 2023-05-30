<template>
  <div id="landing-view">
    <TopNav class="tw-fixed tw-hidden lg:tw-block tw-z-50" />
    <MobileNav class="tw-fixed lg:tw-hidden tw-z-50" />
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" class="tw-bg-purple" />
      </transition>
    </router-view>
    <FooterComponent />
  </div>
</template>

<script setup>
import TopNav from '@/layout/navigation/TopNav.vue'
import MobileNav from '@/layout/navigation/MobileNav.vue'
import FooterComponent from '@/layout/navigation/FooterComponent.vue'
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
