<template>
  <div id="value-section" class="tw-bg-gray-bg7 tw-px-4 sm:tw-px-12 tw-py-24 lg:tw-py-32">
    <div class="container">
      <h3
        class="tw-text-purple-bg1 tw-font-bold tw-text-3xl tw-leading-normal md:tw-text-4xl md:tw-leading-normal lg:tw-text-5xl lg:tw-leading-normal xl:tw-text-4xl"
      >
        Our Values
      </h3>
      <p class="tw-max-w-xl tw-leading-9 tw-text-purple-bg1 tw-text-sm tw-mt-8">
        At Ardilla, our mission is to help people across the continent build wealth and achieve well
        thought out financial goals. However, we cannot do it alone.
      </p>
      <div
        class="tw-flex tw-flex-col sm:tw-grid sm:tw-grid-cols-2 lg:tw-grid-cols-4 lg:tw-gap-8 tw-items-center tw-mt-12"
      >
        <div class="tw-mb-12 sm:tw-mb-0">
          <img class="" src="@/assets/img/value1.svg" loading="lazy" alt="value" />
        </div>
        <div class="lg:tw-pt-[3.4rem] xl:tw-pt-[4.4rem] tw-mb-12 sm:tw-mb-0">
          <img class="" src="@/assets/img/value2.svg" loading="lazy" alt="value" />
        </div>
        <div class="lg:tw-pt-[3.4rem] xl:tw-pt-[4.4rem] tw-mb-12 sm:tw-mb-0">
          <img class="" src="@/assets/img/value3.svg" loading="lazy" alt="value" />
        </div>
        <div>
          <img class="" src="@/assets/img/value4.svg" loading="lazy" alt="value" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#value-section {
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
