<template>
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 0.036377L5 5.03638L10 0.036377H0Z"
      :fill="focus === true || hover === true ? '#a3a3a3' : '#FFFFFF'"
    />
  </svg>
</template>
<script setup>
defineProps({
  focus: { type: Boolean, default: () => false },
  hover: { type: Boolean, default: () => false }
})
</script>
