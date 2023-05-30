<template>
  <div id="select-input" class="tw-relative tw-w-full tw-max-w-sm tw-flex tw-flex-col">
    <label :for="label" class="tw-text-gray-bg2">
      {{ showLabel ? label : '' }}
    </label>
    <select
      class="tw-text-sm tw-text-white tw-rounded-lg tw-p-4 tw-cursor-pointer focus:tw-border-purplebg2 tw-mt-4"
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
import ChevronSolidDown from '@/components/icons/ChevronSolidDown.vue'

defineProps({
  list: { type: Array, default: () => [], required: true },
  defaltOption: { type: String, default: () => '', required: true },
  label: { type: String, default: () => '', required: true },
  showLabel: { type: Boolean, default: () => false },
  showChevronDown: { type: Boolean, default: () => false }
})
</script>

<style lang="scss" scoped></style>
