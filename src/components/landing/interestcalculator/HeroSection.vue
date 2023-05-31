<template>
  <div
    id="interest-calculator-page-hero-section"
    class="tw-pt-28 tw-px-4 lg:tw-px-8 md:tw-pt-36 lg:tw-pt-56"
  >
    <div
      class="container md:tw-grid md:tw-grid-cols-2 tw-justify-items-center tw-gap-4 lg:tw-gap-8"
    >
      <form @submit.prevent="calculateInterest">
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
            id="frequency"
            name="frequency"
            :reset="reset"
            :showLabel="true"
            :showChevronDown="true"
            @set="setInput"
            @valid="setValid"
          />
        </div>
        <div class="tw-mt-12">
          <NumberInputFloat
            label=" How much are you saving?"
            name="amount"
            type="text"
            id="amount"
            :reset="reset"
            @set="setInput"
            @valid="setValid"
          />
        </div>
        <div class="tw-mt-12">
          <NumberInputFloat
            :label="label"
            name="duration"
            type="text"
            id="duration"
            :reset="reset"
            @set="setInput"
            @valid="setValid"
          />
        </div>
      </form>
      <div
        class="tw-bg-white tw-rounded-t-3xl tw-px-4 tw-py-8 md:tw-p-8 lg:tw-px-16 lg:tw-py-12 tw-mt-20 md:tw-mt-0"
      >
        <div class="tw-mb-10">
          <p class="tw-text-gray-bg2 tw-text-sm">Total Balance</p>
          <h3 class="tw-font-bold tw-text-2xl">
            {{ formatAmountToDollar(totalSavings + interest, 2, 'NGN') }}
          </h3>
        </div>
        <div class="tw-mb-10">
          <p class="tw-text-gray-bg2 tw-text-sm">Interest</p>
          <div class="tw-flex tw-items-center">
            <h3 class="tw-font-bold tw-text-2xl">{{ formatAmountToDollar(interest, 2, 'NGN') }}</h3>
            <span class="tw-ml-2">({{ percentage }}%)</span>
          </div>
        </div>
        <div class="tw-mb-10">
          <p class="tw-text-gray-bg2 tw-text-sm">Total Savings</p>
          <div class="tw-flex tw-items-center">
            <h3 class="tw-font-bold tw-text-2xl">
              {{ formatAmountToDollar(totalSavings, 2, 'NGN') }}
            </h3>
            <span class="tw-ml-2">({{ percentage }}%)</span>
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
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import SelectInput from '@/components/general/SelectInput.vue'
import NumberInputFloat from '@/components/general/NumberInputFloat.vue'
import BtnComponent from '@/components/general/BtnComponent.vue'
import { formatAmountToDollar } from '@/utils/helpers'

const router = useRouter()

let frequency = ref('')
let amount = ref(0)
let duration = ref(0)
let totalDuration = ref(0)
let totalSavings = ref(0)
let reset = ref(false)
let label = ref('How long are you saving for? (In months)')
let payloadValid = reactive([])
let options = reactive(['Daily', 'Weekly', 'Monthly'])
let interest = ref(0)
let percentage = ref(0)
let payload = reactive({})

const getStartedBtnStyle = reactive({
  backgroundColor: '#8807F7',
  color: '#FFFFFF',
  hoverColor: '#FFFFFF',
  hoverBgColor: '#1B0132'
})

const checkDuration = () => {
  totalDuration.value = 0
  switch (frequency.value) {
    case 'Daily':
      totalDuration.value = duration.value / 30
      totalDuration.value >= 3 ? calculateInterest() : resetValue(frequency.value)
      break
    case 'Weekly':
      totalDuration.value = duration.value / 4
      totalDuration.value >= 3 ? calculateInterest() : resetValue(frequency.value)
      break
    case 'Monthly':
      totalDuration.value = duration.value
      totalDuration.value >= 3 ? calculateInterest() : resetValue(frequency.value)
      break

    default:
      break
  }
}

const resetValue = (value) => {
  switch (value) {
    case 'Daily':
      alert('Duration should be at least 90 days')
      break

    case 'Weekly':
      alert('Duration should be at least 12 weeks')
      break

    case 'Monthly':
      alert('Duration should be at least 3 months')
      break

    default:
      break
  }
  reset.value = !reset.value
  frequency.value = ''
  amount.value = 0
  duration.value = 0
  totalDuration.value = 0
}

const calculateInterest = () => {
  totalSavings.value = amount.value * duration.value
  if (totalDuration.value >= 3 && totalDuration.value < 6) {
    interest.value = (totalSavings.value / 100) * 2
    percentage.value = 2
  }
  if (totalDuration.value >= 6 && totalDuration.value < 9) {
    interest.value = (totalSavings.value / 100) * 5
    percentage.value = 5
  }
  if (totalDuration.value >= 9 && totalDuration.value < 12) {
    interest.value = (totalSavings.value / 100) * 9
    percentage.value = 9
  }
  if (totalDuration.value >= 12) {
    interest.value = (totalSavings.value / 100) * 13
    percentage.value = 13
  }
}

const setInput = (value) => {
  if (!value) return
  switch (value.inputName) {
    case 'frequency':
      frequency.value = value.value
      value.value === 'Daily' ? (label.value = `How long are you saving for? (In days)`) : ''
      value.value === 'Weekly' ? (label.value = `How long are you saving for? (In weeks)`) : ''
      value.value === 'Monthly' ? (label.value = `How long are you saving for? (In months)`) : ''
      break
    case 'amount':
      amount.value = value.value
      break
    case 'duration':
      duration.value = value.value
      break
    default:
      break
  }
}

const checkPayload = (keys) => {
  payloadValid = keys.map((key) => key in payload)
}

const setPayload = (value) => {
  if (!value) return
  switch (value.inputName) {
    case 'frequency':
      payload.frequency = frequency.value
      checkPayload(['amount', 'duration'])
      payloadValid.includes(false) ? '' : checkDuration()
      break
    case 'amount':
      payload.amount = amount.value
      checkPayload(['frequency', 'duration'])
      payloadValid.includes(false) ? '' : checkDuration()
      break
    case 'duration':
      payload.duration = duration.value
      checkPayload(['frequency', 'amount'])
      payloadValid.includes(false) ? '' : checkDuration()
      break
    default:
      break
  }
}

const setValid = (value) => {
  if (!value.value) {
    switch (value.inputName) {
      case 'frequency':
        delete payload.frequency
        break
      case 'amount':
        delete payload.amount
        break
      case 'duration':
        delete payload.duration
        break

      default:
        break
    }
    return
  } else {
    setPayload(value)
  }
}
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
