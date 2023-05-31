<template>
  <div id="people-section" class="tw-bg-white tw-px-4 sm:tw-px-12 tw-py-24 lg:tw-py-32">
    <div class="container">
      <h3
        class="tw-text-purple-bg1 tw-font-bold tw-text-3xl tw-leading-normal md:tw-text-4xl md:tw-leading-normal lg:tw-text-5xl lg:tw-leading-normal xl:tw-text-4xl"
      >
        People are what matters
      </h3>
      <div class="lg:tw-grid lg:tw-grid-cols-2 lg:tw-gap-8 tw-mt-20">
        <div
          v-for="(slide, index) in slides"
          :key="slide.id + index"
          class="sm:tw-grid sm:tw-grid-cols-2 sm:tw-gap-8"
        >
          <div class="card tw-mb-4 sm:tw-mb-12">
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
          <p
            class="tw-max-w-xs tw-text-gray-bg2 tw-text-sm tw-leading-loose sm:tw-pt-8 lg:tw-pt-4 tw-mb-12 xxs:tw-mb-20"
          >
            {{ slide.text1 }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import testimonial1 from '@/assets/img/testimonial1.svg'
import testimonial2 from '@/assets/img/testimonial2.svg'

let slides = reactive([
  {
    id: 'testimonial1',
    header: 'Save',
    text1: 'Working with Ardilla has exposed me to innovative ideas and advanced technology.',
    url: testimonial1,
    name: 'Aiyeola Mathew',
    content: 'Lead Designer'
  },
  {
    id: 'testimonial2',
    header: 'Learn',
    text1:
      'Ardilla places a premium on team work and collaboration which has helped me gain better insights and become better at my job',
    url: testimonial2,
    name: 'Oshodi David',
    content: 'Product Designer'
  },
  {
    id: 'testimonial3',
    header: 'Budget',
    text1:
      'At Ardilla, I get to work in an environment that is constantly pushing me to learn, develop, and be better.',
    url: testimonial1,
    name: 'Akindele Olamilekan',
    content: 'Front-end Engineer'
  },
  {
    id: 'testimonial2',
    header: 'Learn',
    text1: 'Although Ardilla is challenging, it is the type of challenge that gets you motivated.',
    url: testimonial2,
    name: 'Anita Ojieh',
    content: 'Product Manager'
  }
])
</script>

<style lang="scss" scoped>
#people-section {
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
      //   opacity: 0;
      transition: 0.5s ease all;
      -moz-transition: 0.5s ease all;
      -webkit-transition: 0.5s ease all;
      z-index: 10;
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
</style>
