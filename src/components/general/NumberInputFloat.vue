<template>
  <div id="number-input-float">
    <div class="input-container tw-relative tw-flex tw-flex-col">
      <label for="name" class="tw-invisible">{{ label }}</label>
      <input
        ref="input"
        type="text"
        name="name"
        id="name"
        class="input-field tw-text-3xl tw-text-white tw-border-2 tw-border-b-white"
        @focus="animateLabelOnFocus('amount')"
        required
      />
      <p class="floating-label tw-text-gray-bg2" for="name" ref="amount" @click="input.focus()">
        {{ label }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  label: { type: String, default: () => '', required: true }
})

let amount = ref()
let input = ref()

const animateLabelOnFocus = (label) => {
  switch (label) {
    case 'amount':
      amount.value.classList.add('input-selected')
      break

    default:
      break
  }
}
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
      border: none;
      outline: none;
      resize: none;
      border-bottom: 1px solid #ffffff;
      appearance: none;
      -webkit-appearance: none;

      option {
        color: #ffffff;
      }
    }
  }
}
</style>
