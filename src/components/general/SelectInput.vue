<template>
  <div id="select-input" class="tw-relative tw-w-full tw-max-w-sm tw-flex tw-flex-col">
    <label :for="label" class="tw-text-gray-bg2">
      {{ showLabel ? label : '' }}
    </label>
    <select
      class="tw-text-sm tw-text-white tw-rounded-lg tw-p-4 tw-cursor-pointer focus:tw-border-purplebg2 tw-mt-4"
      @change="setInput"
      @keyup.enter="validate"
      @blur="validate"
      :name="name"
      :id="id"
      v-model="optionData"
      :required="required"
    >
      <option value="" disabled selected>
        {{ defaltOption }}
      </option>
      <option v-for="(item, index) in list" :value="item" :key="index">
        <p>
          {{ item }}
        </p>
      </option>
    </select>
    <ChevronSolidDown v-if="showChevronDown" class="tw-absolute tw-right-2 tw-bottom-6 tw-z-10" />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import ChevronSolidDown from '@/components/icons/ChevronSolidDown.vue'
import { selectValidation } from '@/utils/helpers'

const emit = defineEmits(['set', 'valid'])

const props = defineProps({
  list: { type: Array, default: () => [], required: true },
  defaltOption: { type: String, default: () => '', required: true },
  label: { type: String, default: () => '', required: true },
  showLabel: { type: Boolean, default: () => false },
  name: { type: String, default: () => '', required: true },
  id: { type: String, default: () => '', required: true },
  required: { type: Boolean, default: () => true },
  showChevronDown: { type: Boolean, default: () => false },
  reset: { type: Boolean, default: () => false }
})

let optionData = ref('')
let optionDataValid = ref()
let showError = ref(false)
let errorMsg = ref('')

const resetInput = computed(() => {
  return props.reset
})

const validate = () => {
  if (optionData.value.length === 0) return

  optionDataValid.value = selectValidation(optionData.value, props.list)
  if (optionData.value === null) {
    showError.value = true
    errorMsg.value = 'Invalid email'
    optionDataValid.value = false
  }
  emit('valid', { value: optionDataValid.value, inputName: props.name })
}

const setInput = () => {
  showError.value = false
  errorMsg.value = ''
  emit('set', { value: optionData.value, inputName: props.name })
  validate()
}

watch(resetInput, (newVal, oldVal) => {
  if (oldVal !== newVal) optionData.value = ''
})
</script>

<style lang="scss" scoped></style>
