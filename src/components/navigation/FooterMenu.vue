<template>
  <div id="footer-menu">
    <router-link :to="{ name: routeName }">
      <span class="tw-text-xs">
        {{ title }}
      </span>
      <span
        v-if="comingSoon"
        class="tw-text-xs tw-border tw-border-white tw-rounded-full tw-px-1 tw-ml-2"
      >
        Coming Soon
      </span>
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: () => '', required: true },
  comingSoon: { type: Boolean, default: () => false },
  routeName: { type: String, default: () => '' }
})
</script>

<style lang="scss" scoped></style>
