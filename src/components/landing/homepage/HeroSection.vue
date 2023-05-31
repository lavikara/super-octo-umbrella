<template>
  <div id="home-page-hero-section" class="tw-pt-28 tw-px-4 md:tw-pt-36 lg:tw-pt-56">
    <h1
      class="main-text tw-text-center tw-font-extrabold tw-text-4xl tw-leading-normal xxs:tw-text-5xl xxs:tw-leading-normal xs:tw-text-6xl xs:tw-leading-normal lg:tw-text-7xl xxl:tw-text-8xl"
    >
      Your Access To More
    </h1>
    <p
      class="tw-max-w-screen-md tw-text-white tw-text-center tw-text-base tw-leading-loose tw-mt-8 tw-mx-auto"
    >
      Ardilla helps you save and invest in achieving your financial goals, we have the most flexible
      and seamless way to grow your funds.
    </p>
    <div class="tw-flex tw-justify-center tw-mt-10">
      <BtnComponent
        class="tw-w-full sm:tw-w-48 tw-text-sm tw-rounded-full tw-py-4 tw-px-12"
        title="Get Started"
        :btnStyle="getStartedBtnStyle"
        @click="router.push({ name: 'CreateAccountPage' })"
      />
    </div>
    <div class="tw-flex tw-justify-center tw-mt-12">
      <img class="" src="@/assets/img/hero-img.svg" alt="profile" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import BtnComponent from '@/components/general/BtnComponent.vue'

const router = useRouter()

const getStartedBtnStyle = reactive({
  backgroundColor: '#FFFFFF',
  color: '#3D0072',
  hoverColor: '#FFFFFF',
  hoverBgColor: '#8807F7'
})
</script>

<style lang="scss" scoped>
#home-page-hero-section {
  background: url(@/assets/img/hero-background.svg);
  background-position: center;
  background-clip: border-box;
  background-repeat: no-repeat;

  .main-text {
    background-image: linear-gradient(45deg, #ffeb35, #19fd82);
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
}
</style>
