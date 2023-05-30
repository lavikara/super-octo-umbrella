<template>
  <div id="transparency-section" class="tw-bg-white tw-px-4 tw-py-24 lg:tw-py-32">
    <div class="container">
      <div class="tw-grid md:tw-grid-cols-2">
        <div>
          <h3
            class="tw-font-extrabold tw-text-4xl tw-leading-snug xs:tw-text-5xl xs:tw-leading-snug md:tw-text-5xl md:tw-leading-snug lg:tw-text-6xl lg:tw-leading-normal xxl:tw-text-7xl xxl:tw-leading-normal"
          >
            We’re Keen On <br /><span class="tw-text-pink">Transparency</span>
          </h3>
          <p class="xl:tw-text-lg tw-mt-4 lg:tw-mt-8">
            Calculate your interests everytime you save on our platform
          </p>
          <BtnComponent
            class="tw-w-full sm:tw-w-48 tw-text-sm tw-rounded-full tw-py-4 tw-px-12 tw-my-8 md:tw-my-4 lg:tw-my-8"
            title="Get Started"
            :btnStyle="getStartedBtnStyle"
            @click="router.push({ name: 'CreateAccountPage' })"
          />
        </div>
        <div class="tw-flex tw-justify-center tw-items-start">
          <img class="tw-w-full" src="@/assets/img/transparency.svg" loading="lazy" alt="profile" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import BtnComponent from '@/components/general/BtnComponent.vue'

const router = useRouter()

const getStartedBtnStyle = reactive({
  backgroundColor: '#8807F7',
  color: '#FFFFFF',
  hoverColor: '#FFFFFF',
  hoverBgColor: '#1B0132'
})
</script>

<style lang="scss" scoped>
#transparency-section {
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
