<template>
  <div
    id="pictures-section"
    class="tw-bg-white tw-px-4 sm:tw-px-12 tw-pt-24 tw-pb-72 lg:tw-pb-80 xxl:tw-pb-96 lg:tw-py-32"
  >
    <div class="container md:tw-flex">
      <div class="md:tw--mr-16">
        <img class="tw-mx-auto" src="@/assets/img/picture1.svg" loading="lazy" alt="position" />
      </div>
      <div class="tw-relative tw-z-20">
        <img class="tw-mx-auto" src="@/assets/img/picture2.svg" loading="lazy" alt="position" />
      </div>
      <div class="md:tw--ml-16">
        <img class="tw-mx-auto" src="@/assets/img/picture3.svg" loading="lazy" alt="position" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#pictures-section {
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
