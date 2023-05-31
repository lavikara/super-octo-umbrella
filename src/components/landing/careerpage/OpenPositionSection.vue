<template>
  <div id="openposition-section" class="tw-bg-white tw-px-4 sm:tw-px-12 tw-py-24 lg:tw-py-32">
    <div class="container">
      <h3
        class="tw-text-purple-bg1 tw-font-bold tw-text-3xl tw-leading-normal md:tw-text-4xl md:tw-leading-normal lg:tw-text-5xl lg:tw-leading-normal xl:tw-text-4xl"
      >
        Open Positions
      </h3>
      <div
        class="tw-flex tw-flex-col lg:tw-grid lg:tw-grid-cols-2 tw-gap-12 tw-items-center tw-mt-24"
      >
        <img
          class="tw-mb-12 lg:tw-mb-0"
          src="@/assets/img/position1.svg"
          loading="lazy"
          alt="position"
        />
        <img
          class="tw-mb-12 lg:tw-mb-0"
          src="@/assets/img/position2.svg"
          loading="lazy"
          alt="position"
        />
        <img
          class="tw-mb-12 lg:tw-mb-0"
          src="@/assets/img/position3.svg"
          loading="lazy"
          alt="position"
        />
        <img class="" src="@/assets/img/position4.svg" loading="lazy" alt="position" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#openposition-section {
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
