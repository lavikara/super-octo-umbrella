<template>
  <button
    ref="btnEl"
    type="submit"
    class="tw-flex tw-justify-center tw-items-center tw-text-white"
    :style="btnStyle"
    @mouseover="setHoverStyle"
    @mouseleave="resetStyle"
  >
    <span>{{ props.title }}</span>
    <ComingSoonIcon
      v-if="comingSoonIcon"
      class="tw-ml-2 xxs:tw-ml-4"
      :comingSoonIconColor="comingSoonIconColor"
      :comingSoonIconBg="comingSoonIconBg"
    />
  </button>
</template>

<script setup>
import { ref } from 'vue'
import ComingSoonIcon from '@/components/icons/ComingSoonIcon.vue'

const props = defineProps({
  title: String,
  btnStyle: { type: Object, required: true },
  comingSoonIcon: { type: Boolean, default: () => false },
  comingSoonIconColor: { type: String, default: () => '' },
  comingSoonIconBg: { type: String, default: () => '' }
})

const btnEl = ref()

const setHoverStyle = () => {
  btnEl.value.style.color = props.btnStyle.hoverColor
  btnEl.value.style.backgroundColor = props.btnStyle.hoverBgColor
  // btnEl.value.style.border = props.btnStyle.hoverBorder
}

const resetStyle = () => {
  btnEl.value.style.color = props.btnStyle.color
  btnEl.value.style.backgroundColor = props.btnStyle.backgroundColor
  // btnEl.value.style.border = props.btnStyle.resetHoverBorder
}
</script>

<style lang="scss" scoped></style>
