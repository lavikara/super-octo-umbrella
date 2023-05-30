<template>
  <div
    id="interest-calculator-page-hero-section"
    class="tw-pt-28 tw-px-4 lg:tw-px-8 md:tw-pt-36 lg:tw-pt-56"
  >
    <div
      class="container md:tw-grid md:tw-grid-cols-2 tw-justify-items-center tw-gap-4 lg:tw-gap-8"
    >
      <div>
        <div>
          <h1
            class="tw-text-white tw-font-bold tw-text-3xl tw-leading-normal md:tw-text-2xl md:tw-leading-normal lg:tw-text-3xl lg:tw-leading-normal xl:tw-text-4xl tw-mb-14"
          >
            Calculate Your Interests
          </h1>
          <div class=""></div>
          <SelectInput
            defaltOption="Select frequency"
            :list="options"
            label="How often are you saving?"
            :showLabel="true"
            :showChevronDown="true"
          />
        </div>
        <div class="tw-mt-12">
          <NumberInputFloat label=" How much are you saving?" />
        </div>
        <div class="tw-mt-12">
          <NumberInputFloat label="How long are you saving for? (In months)" />
        </div>
      </div>
      <div
        class="tw-bg-white tw-rounded-t-3xl tw-px-4 tw-py-8 md:tw-p-8 lg:tw-px-16 lg:tw-py-12 tw-mt-20 md:tw-mt-0"
      >
        <div class="tw-mb-10">
          <p class="tw-text-gray-bg2 tw-text-sm">Total Balance</p>
          <h3 class="tw-font-bold tw-text-2xl">6,600</h3>
        </div>
        <div class="tw-mb-10">
          <p class="tw-text-gray-bg2 tw-text-sm">Interest</p>
          <div class="tw-flex tw-items-center">
            <h3 class="tw-font-bold tw-text-2xl">6,600</h3>
            <span class="tw-ml-2">(2%)</span>
          </div>
        </div>
        <div class="tw-mb-10">
          <p class="tw-text-gray-bg2 tw-text-sm">Total Savings</p>
          <div class="tw-flex tw-items-center">
            <h3 class="tw-font-bold tw-text-2xl">6,600</h3>
            <span class="tw-ml-2">(2%)</span>
          </div>
        </div>
        <img class="" src="@/assets/img/graph.svg" loading="lazy" alt="graph" />
        <BtnComponent
          class="tw-w-full lg:tw-w-52 tw-text-sm tw-rounded-full tw-py-4 tw-px-12 tw-mt-16"
          title="Start Saving Now"
          :btnStyle="getStartedBtnStyle"
          @click="router.push({ name: 'CreateAccountPage' })"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import SelectInput from '@/components/general/SelectInput.vue'
import NumberInputFloat from '@/components/general/NumberInputFloat.vue'
import BtnComponent from '@/components/general/BtnComponent.vue'

let options = reactive(['Daily', 'Weakly', 'Monthly'])

const getStartedBtnStyle = reactive({
  backgroundColor: '#8807F7',
  color: '#FFFFFF',
  hoverColor: '#FFFFFF',
  hoverBgColor: '#1B0132'
})
</script>

<style lang="scss" scoped>
#interest-calculator-page-hero-section {
  background: url(@/assets/img/calculatorpagebg.svg);
  background-position: center;
  background-clip: border-box;
  background-repeat: no-repeat;

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
