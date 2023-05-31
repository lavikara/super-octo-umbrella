<template>
  <div id="number-input-float">
    <div class="input-container tw-relative tw-flex tw-flex-col">
      <label :for="id" class="tw-invisible">{{ label }}</label>
      <input
        class="input-field tw-text-3xl tw-text-white"
        :class="[
          showError === true
            ? 'tw-border-0 tw-border-b tw-border-b-red '
            : 'tw-border-0 tw-border-b tw-border-b-white'
        ]"
        ref="input"
        :type="type"
        :name="name"
        :id="id"
        v-model="numberData"
        @input="setInput"
        @blur="validate"
        @keydown.enter="validate"
        @focus="animateLabelOnFocus"
        required
      />
      <p class="floating-label tw-text-gray-bg2" for="name" ref="labelText" @click="input.focus()">
        {{ label }}
      </p>
      <p class="tw-text-red tw-text-sm tw-absolute tw--bottom-6 tw-left-2">
        {{ errorMsg }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { isNumber, addCommaToNumber } from '@/utils/helpers'

const emit = defineEmits(['set', 'valid', 'reset'])

const props = defineProps({
  label: { type: String, default: () => '', required: true },
  id: { type: String, default: () => '' },
  name: { type: String, default: () => '' },
  type: { type: String, default: () => '' },
  reset: { type: Boolean, default: () => false }
})

let labelText = ref()
let input = ref()
let numberData = ref(null)
let emittedNumberData = ref(null)
let numberDataValid = ref()
let showError = ref(false)
let errorMsg = ref('')

const resetInput = computed(() => {
  return props.reset
})

const validate = () => {
  numberDataValid.value = isNumber(emittedNumberData.value)
  if (numberDataValid.value === false) {
    showError.value = true
    errorMsg.value = 'Number is invalid'
  }
  if (numberData.value === null || numberData.value === '') {
    showError.value = true
    errorMsg.value = 'Number is invalid'
    numberDataValid.value = false
  }
  emit('valid', { value: numberDataValid.value, inputName: props.name })
}

const setInput = () => {
  if (numberData.value === '') return
  numberData.value = numberData.value.replace(/\,/g, '')
  numberData.value = parseInt(numberData.value, 10)
  if (isNaN(numberData.value)) {
    numberData.value = null
    return
  }
  emittedNumberData.value = numberData.value
  numberData.value = addCommaToNumber(numberData.value)
  showError.value = false
  errorMsg.value = ''
  emit('set', { value: emittedNumberData.value, inputName: props.name })
}

const animateLabelOnFocus = () => {
  labelText.value.classList.add('input-selected')
}

watch(resetInput, (newVal, oldVal) => {
  if (oldVal !== newVal) {
    numberData.value = null
    // emit('reset', { value: numberDataValid.value, inputName: props.name })
  }
})
</script>

<style lang="scss" scoped>
#number-input-float {
  .input-container {
    max-width: 24rem;
    .input-field {
      padding: 0.3rem 0 0.2rem 0.5rem;
    }

    .floating-label {
      position: absolute;
      bottom: 5px;
      left: 0;
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
    }

    //added with javascript
    .input-selected {
      bottom: 90%;
      padding-left: 0.5rem;

      span {
        visibility: hidden;
      }
    }

    input {
      outline: none;
      resize: none;
      appearance: none;
      -webkit-appearance: none;

      option {
        color: #ffffff;
      }
    }
  }
}
</style>
