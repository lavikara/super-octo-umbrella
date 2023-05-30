<template>
  <div id="career-page-hero-section" class="tw-px-4 tw-py-48 md:tw-py-72">
    <div class="container">
      <div class="xs:tw-max-w-sm md:tw-max-w-2xl lg:tw-max-w-4xl xl:tw-max-w-[60em] tw-mx-auto">
        <h3
          class="tw-w-[18rem] md:tw-w-[36rem] lg:tw-w-[48rem] tw-bg-yellow tw-text-white tw-text-3xl md:tw-text-5xl lg:tw-text-7xl tw-pb-4 tw-pt-10"
        >
          Join us in shaping..
        </h3>
        <div class="tw-flex tw-justify-end tw--mt-1">
          <h3
            class="tw-w-[15rem] md:tw-w-[24rem] lg:tw-w-[32rem] tw-bg-pink tw-text-white tw-text-3xl md:tw-text-5xl lg:tw-text-7xl tw-pb-4 tw-pt-10"
          >
            The Future..
          </h3>
        </div>
        <div class="tw-relative tw--mt-1 tw-z-10">
          <h3
            class="tw-w-[15rem] md:tw-w-[28rem] lg:tw-w-[36rem] tw-bg-green tw-text-white tw-text-3xl md:tw-text-5xl lg:tw-text-7xl tw-pb-4 tw-pt-10"
          >
            Of Finance..
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#career-page-hero-section {
  .container {
    @media (min-width: 1024px) {
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
}
</style>
