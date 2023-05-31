<template>
  <div id="hire-section" class="tw-bg-gray-bg3 tw-px-4 sm:tw-px-12 tw-py-24 lg:tw-py-32">
    <div class="container">
      <h3
        class="tw-text-purple-bg1 tw-font-bold tw-text-3xl tw-leading-normal md:tw-text-4xl md:tw-leading-normal lg:tw-text-5xl lg:tw-leading-normal xl:tw-text-4xl"
      >
        How We Hire
      </h3>
      <div class="lg:tw-grid lg:tw-grid-cols-3 lg:tw-gap-4 tw-mt-16 lg:tw-mt-28">
        <div class="tw-mb-12">
          <img class="tw-mb-8" src="@/assets/img/hire1.svg" loading="lazy" alt="hire" />
          <h3 class="tw-text-purple-bg1 tw-font-bold tw-mb-4">Application</h3>
          <p class="tw-max-w-xs tw-text-purple-bg1 tw-text-sm tw-leading-9">
            Send in your applications and if you are a good fit, we will schedule an interview.
          </p>
        </div>
        <div class="tw-mb-12">
          <img class="tw-mb-8" src="@/assets/img/hire2.svg" loading="lazy" alt="hire" />
          <h3 class="tw-text-purple-bg1 tw-font-bold tw-mb-4">Hiring Managers Interview</h3>
          <p class="tw-max-w-xs tw-text-purple-bg1 tw-text-sm tw-leading-9">
            The interview comprises a chat or two with the hiring manager and your department team
            lead about your suitability and skills for the role.
          </p>
        </div>
        <div class="tw-mb-12">
          <img class="tw-mb-8" src="@/assets/img/hire3.svg" loading="lazy" alt="hire" />
          <h3 class="tw-text-purple-bg1 tw-font-bold tw-mb-4">Feedback</h3>
          <p class="tw-max-w-xs tw-text-purple-bg1 tw-text-sm tw-leading-9">
            When the process is complete, we give you feedback on your performance and we let you
            know if you have been selected.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#hire-section {
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
