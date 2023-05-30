<template>
  <div id="howitworks-section" class="tw-bg-white tw-px-4 sm:tw-px-12 tw-py-24 lg:tw-py-32">
    <div class="container">
      <h3
        class="tw-text-purple-bg1 tw-font-bold tw-text-3xl tw-leading-normal md:tw-text-4xl md:tw-leading-normal lg:tw-text-5xl lg:tw-leading-normal xl:tw-text-4xl"
      >
        How It Works
      </h3>
      <div class="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-mt-12">
        <div class="tw-mb-12 md:tw-mb-0">
          <img class="" src="@/assets/img/plan1.svg" loading="lazy" alt="plan" />
        </div>
        <div class="md:tw-px-8 tw-mb-12 md:tw-mb-0">
          <img class="" src="@/assets/img/plan2.svg" loading="lazy" alt="plan" />
        </div>
        <div>
          <img class="" src="@/assets/img/plan3.svg" loading="lazy" alt="plan" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#howitworks-section {
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
