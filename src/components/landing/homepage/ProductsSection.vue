<template>
  <div id="products-section">
    <div class="tw-bg-gray-bg1 tw-rounded-t-3xl tw-px-4">
      <div
        class="gsapContainer container md:tw-h-screen tw-overflow-hidden tw-pt-14 md:tw-pt-24 xxl:tw-pt-28"
      >
        <h3 class="tw-font-extrabold tw-text-3xl xxs:tw-text-4xl xs:tw-text-5xl xxl:tw-text-7xl">
          Products
        </h3>
        <div class="tw-grid md:tw-grid-cols-2 tw-gap-4 tw-px-4 xxl:tw-px-16 tw-pt-12 md:tw-pt-20">
          <div>
            <div class="tw-hidden md:tw-block">
              <div v-for="(slide, index) in slides" :key="slide.id + index" class="tw-relative">
                <div
                  class="tw-absolute"
                  :class="{
                    'gsapSave tw-opacity-1': index === 0,
                    'gsapLearn tw-opacity-0': index === 1,
                    'gsapBudget tw-opacity-0': index === 2,
                    'gsapInvest tw-opacity-0': index === 3,
                    'gsapInsurance tw-opacity-0': index === 4
                  }"
                >
                  <h3 class="tw-text-pink tw-text-4xl font-bold">{{ slide.header }}</h3>
                  <p class="tw-text-lg tw-font-normal tw-mt-4">{{ slide.text1 }}</p>
                  <p
                    class="tw-text-gray-bg2 tw-text-xs tw-leading-loose xl:tw-text-sm xl:tw-leading-loose tw-mt-4"
                  >
                    {{ slide.text2 }}
                  </p>
                </div>
              </div>
            </div>
            <ul class="md:tw-pt-52">
              <li
                v-for="(point, index) in productPoints"
                :key="'point' + index"
                class="tw-flex tw-items-center tw-text-sm tw-font-normal tw-mb-8"
              >
                <img
                  class="tw-mr-4 xl:tw-mr-8"
                  src="@/assets/img/pink-check.svg"
                  loading="lazy"
                  alt="profile"
                />
                {{ point }}
              </li>
            </ul>
          </div>
          <div class="tw-hidden md:tw-block">
            <div ref="products" class="gsapScrollContainer">
              <img
                class="gsapSaveImg md:tw-pt-20 tw-pb-64"
                :src="save"
                loading="lazy"
                alt="product"
              />
              <img class="gsapLearnImg tw-mb-64" :src="learn" loading="lazy" alt="product" />
              <img class="gsapBudgetImg tw-mb-64" :src="budget" loading="lazy" alt="product" />
              <img class="gsapInvestImg tw-mb-64" :src="invest" loading="lazy" alt="product" />
              <img class="gsapInsuranceImg" :src="insurance" loading="lazy" alt="product" />
            </div>
          </div>
          <div class="md:tw-hidden">
            <div v-for="(slide, index) in slides" :key="slide.id + index">
              <div v-if="slideIndex === index">
                <h3 class="tw-text-left tw-text-pink tw-text-4xl font-bold">
                  {{ slide.header }}
                </h3>
                <p class="tw-text-left tw-text-lg tw-font-normal tw-mt-4">
                  {{ slide.text1 }}
                </p>
                <p
                  class="tw-text-left tw-text-gray-bg2 tw-text-xs tw-leading-loose xl:tw-text-sm xl:tw-leading-loose tw-mt-4"
                >
                  {{ slide.text2 }}
                </p>
              </div>
            </div>
            <Carousel
              :autoplay="5000"
              :transition="500"
              :wrap-around="true"
              @slide-start="handleSlideStart"
            >
              <Slide v-for="(slide, index) in slides" :key="slide.id + index">
                <img class="tw-w-full" :src="slide.url" loading="lazy" alt="product" />
              </Slide>
              <template #addons>
                <Pagination />
              </template>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { useStore } from 'vuex'
import save from '@/assets/img/save.svg'
import learn from '@/assets/img/learn.svg'
import budget from '@/assets/img/budget.svg'
import invest from '@/assets/img/invest.svg'
import insurance from '@/assets/img/insurance.svg'
import gsap from '@/utils/gsap.js'

const store = useStore()

const products = ref()
let slideIndex = ref(0)
let productPoints = reactive([
  'Create Unlimted savings plans',
  'Withdraw anytime',
  'Save with Friends with SAN ID',
  'Be better at saving',
  'Accountability profile',
  'Activity and report'
])
let slides = reactive([
  {
    id: 'img1',
    header: 'Save',
    text1: 'Save at your own pace!',
    text2: 'Save your money daily, weekly, or monthly. No pressure. We work at your pace',
    url: save
  },
  {
    id: 'img2',
    header: 'Learn',
    text1: 'Financial freedom begins with You and Ardilla',
    text2:
      'Ardila offers wealth-building tips from great financial minds to help you get to where you need to be.',
    url: learn
  },
  {
    id: 'img4',
    header: 'Budget',
    text1: 'Plan your money',
    text2: 'Every good budget starts with a good plan for your money',
    url: budget
  },
  {
    id: 'img3',
    header: 'Invest',
    text1: 'Multiply your finances',
    text2: 'Investment opportunities that gets you closer to financial freedom',
    url: invest
  },
  {
    id: 'img5',
    header: 'Insurance',
    text1: 'Protect your interest',
    text2: 'Stay protected, live freely',
    url: insurance
  }
])

const screenSize = computed(() => {
  return store.state.screenSize
})

onMounted(() => {
  animateProductSection()
})

const animateProductSection = () => {
  if (screenSize.value < 768) {
    return
  }
  setTimeout(() => {
    const scrollHeight = products.value.offsetHeight
    gsap
      .gsapClass()
      .timeline({
        scrollTrigger: {
          trigger: '.gsapContainer',
          scrub: 1,
          start: 'top -40%',
          end: scrollHeight / 1.2
        }
      })
      .to('.gsapSave', { opacity: 0 })
      .to('.gsapLearn', { opacity: 1 })
      .to('.gsapLearn', { opacity: 0 })
      .to('.gsapBudget', { opacity: 1 }, '<+=50%')
      .to('.gsapBudget', { opacity: 0 })
      .to('.gsapInvest', { opacity: 1 })
      .to('.gsapInvest', { opacity: 0 })
      .to('.gsapInsurance', { opacity: 1 })

    gsap.yAxisPin('.gsapScrollContainer', '.gsapContainer', -scrollHeight, scrollHeight)
  }, 1000)
}

const handleSlideStart = (data) => {
  if (screenSize.value > 768) {
    return
  }
  switch (data.slidingToIndex) {
    case 5:
      slideIndex.value = 0
      break
    case -1:
      slideIndex.value = 4
      break

    default:
      slideIndex.value = data.slidingToIndex
      break
  }
}
</script>

<style lang="scss" scoped>
#products-section {
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
