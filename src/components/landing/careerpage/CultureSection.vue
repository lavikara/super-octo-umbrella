<template>
  <div id="culture-section" class="tw-bg-white tw-py-24 lg:tw-py-32">
    <div class="container tw-px-4 sm:tw-px-12">
      <h3
        class="tw-text-purple-bg1 tw-font-bold tw-text-3xl tw-leading-normal md:tw-text-4xl md:tw-leading-normal lg:tw-text-5xl lg:tw-leading-normal xl:tw-text-4xl"
      >
        The Ardilla Culture
      </h3>
    </div>
    <div
      class="lg:tw-grid lg:tw-grid-cols-3 tw-items-center tw-gap-4 tw-px-4 sm:tw-px-12 lg:tw-px-0 tw-pt-24 xl:tw-pt-44"
    >
      <div class="tw-mb-8 lg:tw-mb-0">
        <img
          class="tw-w-full tw-rounded-r-md tw-rounded-l-md md:tw-rounded-l-none"
          src="@/assets/img/culture1.svg"
          loading="lazy"
          alt="culture"
        />
      </div>
      <div>
        <div class="tw-mb-8 lg:tw-mb-2">
          <img
            class="tw-w-full tw-rounded-md"
            src="@/assets/img/culture2.svg"
            loading="lazy"
            alt="culture"
          />
        </div>
        <div class="tw-mb-8 lg:tw-mb-2">
          <img
            class="tw-w-full tw-rounded-md"
            src="@/assets/img/culture4.svg"
            loading="lazy"
            alt="culture"
          />
        </div>
      </div>
      <div>
        <img
          class="tw-w-full tw-rounded-l-md tw-rounded-r-md md:tw-rounded-r-none"
          src="@/assets/img/culture3.svg"
          loading="lazy"
          alt="culture"
        />
      </div>
    </div>
    <div class="container lg:tw-grid lg:tw-grid-cols-2 lg:tw-gap-8 tw-px-4 sm:tw-px-12 tw-pt-12">
      <div class="tw-mb-16">
        <h3
          class="tw-font-bold tw-text-purple-bg1 tw-text-xl xxs:tw-text-2xl md:tw-text-3xl tw-mb-4"
        >
          Experienced professionals
        </h3>
        <p class="md:tw-max-w-lg tw-text-purple-bg1 tw-text-sm tw-leading-9">
          Experienced financial analysts and coaches. Who have been vetted and have a wealth of
          experience. They will guide you through your wealth-building journey.
        </p>
        <p class="md:tw-max-w-lg tw-text-purple-bg1 tw-text-sm tw-leading-9 tw-mt-6">
          We have a great team of diverse and talented professionals who share the values of the
          company. Because of the size of our dream, we need more hands on deck and you are always
          welcome to apply.
        </p>
      </div>
      <div>
        <h3
          class="tw-font-bold tw-text-purple-bg1 tw-text-xl xxs:tw-text-2xl md:tw-text-3xl tw-mb-4"
        >
          We give the best
        </h3>
        <p class="md:tw-max-w-lg tw-text-purple-bg1 tw-text-sm tw-leading-9">
          We know work can be quite dreadful, so we try to make it fun, as much as we can. We also
          offer competitive salaries as well as great packages.
        </p>
        <p class="md:tw-max-w-lg tw-text-purple-bg1 tw-text-sm tw-leading-9 tw-mt-6">
          At Ardilla, dedication and excellence are always rewarded. No politics and no funny
          business.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#culture-section {
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
