<template>
  <div id="traction-section" class="tw-bg-purple-bg5 tw-px-4 tw-pt-24 lg:tw-pt-32 tw-pb-80">
    <div class="container">
      <h3
        class="tw-text-white tw-text-center tw-font-extrabold tw-text-4xl tw-leading-snug xs:tw-text-5xl xs:tw-leading-snug md:tw-text-5xl md:tw-leading-snug lg:tw-text-6xl lg:tw-leading-normal xxl:tw-text-7xl xxl:tw-leading-normal"
      >
        Traction
      </h3>
      <p
        class="tw-text-white tw-text-center tw-text-xs tw-leading-loose sm:tw-text-base sm:tw-leading-loose"
      >
        Our products and investments grossed 1.1 billion in 2022
      </p>
      <div class="md:tw-grid md:tw-grid-cols-3 md:tw-gap-4 lg:tw-gap-8 xl:tw-px-32 tw-mt-32">
        <div
          class="tw-relative tw-flex tw-flex-col tw-items-center tw-max-w-xs md:tw-w-full tw-bg-green-bg1 tw-rounded-t-[4rem] tw-rounded-bl-[4rem] tw-py-44 tw-mb-12 md:tw-mb-0 tw-mx-auto"
        >
          <div>
            <p class="tw-text-xl tw-text-green-bg-2 tw-font-bold">
              Investment in
              <span class="tw-bg-green-bg2 tw-text-white tw-rounded-md tw-p-1">2022</span>
            </p>
            <h3 class="tw-text-green-bg3 tw-font-extrabold tw-text-5xl lg:tw-text-6xl tw-mt-4">
              ₦ 100 M
            </h3>
          </div>
          <img
            class="tw-absolute tw-w-full tw-bottom-0 tw-left-0 tw-right-0"
            src="@/assets/img/spiro.svg"
            loading="lazy"
            alt="traction"
          />
        </div>
        <div
          class="tw-relative tw-flex tw-flex-col tw-items-center tw-max-w-xs md:tw-w-full tw-bg-purple-bg8 tw-rounded-t-[4rem] tw-rounded-br-[4rem] tw-py-44 tw-mb-12 md:tw-mb-0 tw-mx-auto"
        >
          <div>
            <p class="tw-text-xl tw-font-bold">
              Risk <span class="tw-bg-blue tw-text-white tw-rounded-md tw-p-1">Management</span>
            </p>
            <h3 class="tw-text-green-bg3 tw-font-extrabold tw-text-5xl lg:tw-text-6xl tw-mt-4">
              0% Risk
            </h3>
          </div>
          <img
            class="tw-absolute tw-w-full tw-bottom-0 tw-left-0 tw-right-0"
            src="@/assets/img/spiro.svg"
            loading="lazy"
            alt="traction"
          />
        </div>
        <div
          class="tw-relative tw-flex tw-flex-col tw-items-center tw-max-w-xs md:tw-w-full tw-bg-gray-bg5 tw-rounded-t-[4rem] tw-rounded-br-[4rem] tw-py-44 tw-mx-auto"
        >
          <div>
            <p class="tw-text-xl tw-font-bold">
              Investment
              <span class="tw-bg-gray-bg6 tw-text-white tw-rounded-md tw-p-1">paid back</span>
            </p>
            <h3 class="tw-text-green-bg3 tw-font-extrabold tw-text-5xl lg:tw-text-6xl tw-mt-4">
              ₦ 100 M
            </h3>
          </div>
          <img
            class="tw-absolute tw-w-full tw-bottom-0 tw-left-0 tw-right-0"
            src="@/assets/img/spiro.svg"
            loading="lazy"
            alt="traction"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#traction-section {
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
