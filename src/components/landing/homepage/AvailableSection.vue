<template>
  <div id="available-section" class="tw-bg-gray-bg4 tw-px-4 tw-py-24 lg:tw-py-32">
    <div class="container">
      <div
        class="tw-grid tw-grid-cols-2 sm:tw-grid-cols-4 tw-justify-items-center tw-items-center md:tw-px-24"
      >
        <div>
          <img
            class="tw-cursor-pointer"
            src="@/assets/img/zikoko.svg"
            loading="lazy"
            alt="product"
          />
        </div>
        <div>
          <img
            class="tw-cursor-pointer"
            src="@/assets/img/techcrunchlogo.svg"
            loading="lazy"
            alt="product"
          />
        </div>
        <div>
          <img
            class="tw-cursor-pointer"
            src="@/assets/img/theguardian.svg"
            loading="lazy"
            alt="product"
          />
        </div>
        <div class="tw-w-full tw-flex tw-justify-center tw-text-bg1 tw-border-l-2 tw-border-l-gray">
          <a
            class="hover:tw-underline tw-underline-offset-4"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Press reviews</a
          >
        </div>
      </div>
      <div class="tw-bg-gray-bg3 tw-rounded-xl tw-px-4 md:tw-mx-24 tw-mt-24">
        <h3 class="tw-text-center tw-text-3xl tw-font-extrabold tw-pt-16">
          Also Available on the Web
        </h3>
        <p class="tw-max-w-md tw-text-sm tw-text-center tw-mx-auto tw-mt-6 tw-mb-12">
          Increase your bread & butter on the app or on the web.The Ardilla app services are also
          available on the web.
        </p>
        <div class="tw-flex tw-justify-center">
          <img
            class="tw-cursor-pointer"
            src="@/assets/img/availablesection.svg"
            loading="lazy"
            alt="product"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#available-section {
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
