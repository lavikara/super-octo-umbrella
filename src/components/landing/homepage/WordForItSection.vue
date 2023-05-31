<template>
  <div id="wordforit-section" class="tw-bg-gray-bg3 tw-px-4 tw-py-24 lg:tw-py-32">
    <div class="container">
      <h3
        class="tw-font-extrabold tw-text-4xl tw-leading-snug xs:tw-text-5xl xs:tw-leading-snug md:tw-text-5xl md:tw-leading-snug lg:tw-text-6xl lg:tw-leading-normal xxl:tw-text-7xl xxl:tw-leading-normal"
      >
        Don’t Take Our <span class="tw-text-pink">Word</span> For It
      </h3>
      <p class="tw-text-purple-bg1 tw-text-sm lg:tw-text-base tw-mb-8 lg:tw-mb-16 xxl:tw-mb-40">
        Listen to testimonials from Ardilla users building wealth
      </p>
      <Carousel
        :autoplay="5000"
        :transition="500"
        :wrap-around="true"
        :items-to-show="screenSize <= 767 ? 1.2 : 3"
      >
        <Slide v-for="(slide, index) in slides" :key="slide.id + index">
          <div class="card">
            <span class="before tw-relative">
              <img
                class="tw-w-8 tw-cursor-pointer"
                src="@/assets/img/play.svg"
                loading="lazy"
                alt="play"
              />
              <div class="tw-absolute tw-bottom-4 tw-left-4 tw-text-white">
                <p class="tw-text-left tw-text-sm md:tw-text-sm">{{ slide.name }}</p>
                <p class="tw-text-left tw-text-[0.5rem] md:tw-text-[0.6rem]">{{ slide.content }}</p>
              </div>
            </span>
            <div class="overlay"></div>
            <img class="tw-w-full" :src="slide.url" loading="lazy" alt="product" />
          </div>
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import testimonial1 from '@/assets/img/testimonial1.svg'
import testimonial2 from '@/assets/img/testimonial2.svg'

const store = useStore()

let slides = reactive([
  {
    id: 'testimonial1',
    header: 'Save',
    url: testimonial1,
    name: 'MD - Miss Oyinye Dallas',
    content: 'What is Ardila and it benefits?'
  },
  {
    id: 'testimonial2',
    header: 'Learn',
    url: testimonial2,
    name: 'Sandra Ali',
    content: 'What is Ardila and it benefits?'
  },
  {
    id: 'testimonial3',
    header: 'Budget',
    url: testimonial1,
    name: 'MD - Miss Oyinye Dallas',
    content: 'What is Ardila and it benefits?'
  },
  {
    id: 'testimonial2',
    header: 'Learn',
    url: testimonial2,
    name: 'Sandra Ali',
    content: 'What is Ardila and it benefits?'
  },
  {
    id: 'testimonial1',
    header: 'Save',
    url: testimonial1,
    name: 'Sandra Ali',
    content: 'What is Ardila and it benefits?'
  }
])

const screenSize = computed(() => {
  return store.state.screenSize
})
</script>

<style lang="scss" scoped>
#wordforit-section {
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

    .card {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2), 2px 2px 5px rgba(0, 0, 0, 0.2);
      border-radius: 20px;
      transition: 0.5s ease all;
      -moz-transition: 0.5s ease all;
      -webkit-transition: 0.5s ease all;

      .before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        background-image: linear-gradient(
          360deg,
          #030303 8.46%,
          rgba(3, 3, 3, 0) 100%,
          rgba(3, 3, 3, 0.38) 100%
        );
        opacity: 0;
        transition: 0.5s ease all;
        -moz-transition: 0.5s ease all;
        -webkit-transition: 0.5s ease all;
        z-index: 10;
      }

      &:hover {
        .before {
          opacity: 1;
        }
      }

      .overlay {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        border-radius: 20px;
      }

      img {
        border-radius: 20px;
      }
    }
  }
}
</style>
