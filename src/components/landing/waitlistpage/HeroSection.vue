<template>
  <div id="waitlist-page-hero-section" class="tw-relative tw-pt-28 tw-pb-72 tw-px-4 lg:tw-py-56">
    <div class="container">
      <h1
        class="tw-max-w-sm lg:tw-max-w-md xxl:tw-max-w-xl tw-text-white tw-text-center tw-font-extrabold tw-text-4xl tw-leading-normal xxs:tw-text-5xl xxs:tw-leading-normal xs:tw-text-6xl xs:tw-leading-normal lg:tw-text-7xl lg:tw-leading-normal xxl:tw-text-8xl xxl:tw-leading-[7rem] tw-mx-auto"
      >
        Your portal to
        <span class="tw-relative">
          more
          <img
            class="tw-absolute tw--bottom-4 tw-right-0"
            src="@/assets/img/waitlistdash.svg"
            loading="lazy"
            alt="profile"
          />
        </span>
      </h1>
      <p
        class="sm:tw-max-w-lg tw-text-white tw-text-center tw-text-sm tw-leading-loose tw-mt-12 tw-mx-auto"
      >
        Wealth building is possible. You just need the right partner. With better financial tools,
        Ardilla has made it so much easier for you to start building wealth. Take advantage of the
        Ardilla platform by signing up with your email address.
      </p>
      <TextInput class="sm:tw-w-[30rem] tw-mt-12 tw-mx-auto" />
      <img
        class="tw-w-52 lg:tw-w-72 xl:tw-w-96 xxxl:tw-w-[28rem] tw-absolute tw-bottom-00 lg:tw--bottom-44 tw-right-0"
        src="@/assets/img/waitlistimg.svg"
        loading="lazy"
        alt="profile"
      />
    </div>
  </div>
</template>

<script setup>
import TextInput from '@/components/general/TextInput.vue'
</script>

<style lang="scss" scoped>
#waitlist-page-hero-section {
  background: url(@/assets/img/waitlistherobackground.svg);
  background-position: center;
  background-clip: border-box;

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
