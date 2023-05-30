<template>
  <div id="opportunity-section" class="tw-bg-gray-bg1 tw-px-4 tw-py-24 lg:tw-py-32">
    <div class="container">
      <h3
        class="tw-font-extrabold tw-text-4xl tw-leading-snug xs:tw-text-5xl xs:tw-leading-snug md:tw-text-5xl md:tw-leading-snug lg:tw-text-6xl lg:tw-leading-normal xxl:tw-text-7xl xxl:tw-leading-normal"
      >
        Unlimited <span class="tw-text-green">Investment <br />Opportunities</span>
      </h3>
      <p class="tw-max-w-screen-md xl:tw-text-2xl tw-leading-loose tw-mt-8">
        Plan towards your future by investing with ardilla, Grow your money confidently and securely
        with the available investment oppurtuinities
      </p>
      <BtnComponent
        class="tw-w-full sm:tw-w-[21rem] tw-border tw-border-purple-bg2 tw-rounded-full tw-py-4 tw-my-12"
        title="Invest with ardilla (Coming Soon)"
        :btnStyle="InvestBtnStyle"
        :comingSoonIcon="true"
        comingSoonIconColor="#FFFFFF"
        comingSoonIconBg="#8807F7"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import BtnComponent from '@/components/general/BtnComponent.vue'

const InvestBtnStyle = reactive({
  backgroundColor: '#FFFDF2',
  color: '#8807F7',
  hoverColor: '#FFFFFF',
  hoverBgColor: '#6005AE'
})
</script>

<style lang="scss" scoped>
#opportunity-section {
  background: url(@/assets/img/opportunity.svg);
  background-position: bottom;
  background-clip: border-box;
  background-repeat: no-repeat;
  background-size: cover;
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
