<template>
  <RouterView />
  <LoaderComp v-if="loading" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import LoaderComp from '@/components/general/LoaderComp.vue'
import 'vue3-carousel/dist/carousel.css'

const store = useStore()

let loading = ref(true)

onUnmounted(() => {
  document.removeEventListener('readystatechange', pageReady)
})

onMounted(() => {
  document.addEventListener('readystatechange', pageReady)
  // if (this.prevRoute !== 'home' && this.prevRoute !== undefined) {
  pageReady()
  // }
  store.dispatch('UpdateScreenSize', window.innerWidth)
})

const pageReady = (event) => {
  if (event?.target?.readyState === 'complete') {
    setTimeout(() => {
      loading.value = false
    }, 1000)
  }
}
</script>

<style scoped></style>
