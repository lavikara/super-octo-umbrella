<template>
  <div id="text-input">
    <div class="pt-site-footer__submit tw-relative">
      <input
        class="tw-w-full tw-bg-white tw-rounded-full tw-p-6"
        type="email"
        placeholder="someone@example.com"
      />
      <button
        class="tw-absolute tw-top-[0.8rem] tw-right-[0.6rem] md:tw-top-[0.3rem] md:tw-right-[0.4rem] tw-flex tw-items-center tw-bg-purple-bg2 tw-rounded-full hover:tw-bg-purple-bg1 tw-px-4 tw-py-2 md:tw-px-8 md:tw-py-4"
      >
        <span v-if="screenSize >= 768" class="tw-text-sm tw-text-white tw-mb-1"> Access More </span>
        <img class="tw-w-8" src="@/assets/img/send.svg" loading="lazy" alt="profile" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const screenSize = computed(() => {
  return store.state.screenSize
})
</script>

<style lang="scss" scoped>
#text-input {
  input {
    // background: #8196aa;
    // border: 0;
    // color: white;
    // padding: 20px;
    // width: 100%;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: #9ca3af;
  }

  button {
    // background: #16bdae;
    // border: 0;
    // // border-radius: 7px;
    // color: white;
    // padding: 15px;
    // position: absolute;
    // right: 5px;
    // top: 5px;
  }

  .pt-site-footer__submit {
    // position: relative;
    // display: inline-block;
    // width: 50%;
  }
}
</style>
