<template>
  <div id="expect-section">
    <div class="tw-bg-gray-bg1 tw-rounded-t-3xl tw-px-4">
      <div class="container">
        <div class="tw-relative tw-top-20">
          <p
            class="tw-absolute tw-top-6 xxs:tw-top-7 tw-left-16 tw-text-white xxs:tw-text-xl tw-font-semibold tw-z-30"
          >
            What you can expect
          </p>
          <img
            class="tw-absolute tw-left-0 tw-top-0"
            src="@/assets/img/expecttextbg.svg"
            loading="lazy"
            alt="profile"
          />
        </div>
        <div class="tw-pt-60 xl:tw-pt-80 tw-pb-44">
          <Carousel
            :autoplay="5000"
            :transition="500"
            :wrap-around="true"
            :items-to-show="screenSize <= 767 ? 1.2 : 4"
          >
            <Slide v-for="(slide, index) in slides" :key="slide.id + index">
              <div class="tw-relative tw-text-white tw-mx-2">
                <p
                  class="tw-absolute tw-top-4 tw-left-4 tw-text-xl md:tw-text-xs lg:tw-text-md xl:tw-text-xl tw-font-semibold tw-text-left tw-pr-16"
                >
                  <span
                    :class="{
                      'tw-text-green-bg4': index === 0 || index === 5
                    }"
                  >
                    {{ slide.text1 }}
                  </span>
                </p>
                <img class="tw-w-full" :src="slide.url" loading="lazy" alt="product" />
              </div>
            </Slide>
            <template #addons>
              <Pagination />
            </template>
          </Carousel>
        </div>
        <div class="xs:tw-flex xs:tw-justify-between xs:tw-items-center tw-pb-8">
          <p class="tw-text-purple-bg2 tw-text-sm tw-mb-4 xs:tw-mb-0">
            © 2023 Ardilla. All right reserved
          </p>
          <div class="tw-flex">
            <img
              class="tw-cursor-pointer tw-mr-4"
              src="@/assets/img/facebookpurple.svg"
              loading="lazy"
              alt="instagram"
            />
            <img
              class="tw-cursor-pointer tw-mr-4"
              src="@/assets/img/instagrampurple.svg"
              loading="lazy"
              alt="facebook"
            />
            <img
              class="tw-cursor-pointer tw-mr-4"
              src="@/assets/img/twitterpurple.svg"
              loading="lazy"
              alt="linkedin"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import expectimg2 from '@/assets/img/expectimg2.svg'
import expectimg3 from '@/assets/img/expectimg3.svg'
import expectimg4 from '@/assets/img/expectimg4.svg'
import expectimg5 from '@/assets/img/expectimg5.svg'
import expectimg6 from '@/assets/img/expectimg6.svg'
import expectimg7 from '@/assets/img/expectimg7.svg'

const store = useStore()

let slides = reactive([
  {
    id: 'img1',
    header: 'Save',
    text1: 'Save at your own pace!',
    url: expectimg6
  },
  {
    id: 'img2',
    header: 'Learn',
    text1: 'More investment opportunities',
    url: expectimg2
  },
  {
    id: 'img3',
    header: 'Budget',
    text1: 'More Savings',
    url: expectimg3
  },
  {
    id: 'img4',
    header: 'Invest',
    text1: 'Join a passionate wealth building community',
    url: expectimg4
  },
  {
    id: 'img5',
    header: 'Insurance',
    text1: 'Free financial advice from vetted financial coaches',
    url: expectimg5
  },
  {
    id: 'img6',
    header: 'Invest',
    text1: 'Build wealth without compromising your belief',
    url: expectimg6
  },
  {
    id: 'img7',
    header: 'Invest',
    text1: 'Pro budgeting guide',
    url: expectimg7
  },
  {
    id: 'img8',
    header: 'Invest',
    text1: 'Get your unique San ID',
    url: expectimg3
  }
])

const screenSize = computed(() => {
  return store.state.screenSize
})
</script>

<style lang="scss" scoped>
#expect-section {
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
