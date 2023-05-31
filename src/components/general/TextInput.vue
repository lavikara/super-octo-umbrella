<template>
  <div id="text-input">
    <div class="tw-relative">
      <input
        class="tw-w-full tw-bg-white tw-rounded-full tw-p-6"
        :class="{
          'tw-border-red tw-shadow-inner tw-shadow-red': showError === true
        }"
        @input="setInput"
        @keyup.enter="validate"
        @blur="validate"
        :type="type"
        :placeholder="placeHolder"
        :required="required"
        :name="name"
        :id="id"
        v-model="textData"
      />
      <button
        class="tw-absolute tw-top-[0.8rem] tw-right-[0.6rem] md:tw-top-[0.3rem] md:tw-right-[0.4rem] tw-flex tw-items-center tw-bg-purple-bg2 tw-rounded-full hover:tw-bg-purple-bg1 tw-px-4 tw-py-2 md:tw-px-8 md:tw-py-4"
      >
        <span v-if="screenSize >= 768" class="tw-text-sm tw-text-white tw-mb-1"> Access More </span>
        <img class="tw-w-8" src="@/assets/img/send.svg" loading="lazy" alt="profile" />
      </button>
      <p class="tw-text-red tw-text-sm tw-absolute tw--bottom-00 tw-left-8">
        {{ errorMsg }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { emailValidation } from '@/utils/helpers'

const store = useStore()

const emit = defineEmits(['set', 'valid'])

const props = defineProps({
  name: { type: String, default: () => '', required: true },
  id: { type: String, default: () => '', required: true },
  required: { type: Boolean, default: () => true },
  placeHolder: { type: String, default: () => '', required: true },
  type: { type: String, default: () => 'text', required: true }
})

let textData = ref('')
let textDataValid = ref()
let showError = ref(false)
let errorMsg = ref('')

const screenSize = computed(() => {
  return store.state.screenSize
})

const validate = () => {
  if (textData.value.length === 0) return
  switch (props.type) {
    case 'email':
      textDataValid.value = emailValidation(textData.value)
      if (textDataValid.value === null) {
        showError.value = true
        errorMsg.value = 'Email is invalid'
      }
      emit('valid', textDataValid.value)
      break

    default:
      break
  }
}

const setInput = () => {
  showError.value = false
  errorMsg.value = ''
  emit('set', textData.value)
}
</script>

<style lang="scss" scoped>
#text-input {
  input::placeholder {
    color: #9ca3af;
  }
}
</style>
