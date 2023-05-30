<template>
  <div id="accessmore-section" class="tw-bg-purple-bg5 tw-px-4 tw-pt-24 lg:tw-pt-32">
    <div class="container tw-text-white">
      <h3
        class="tw-font-extrabold tw-text-4xl tw-leading-snug xs:tw-text-5xl xs:tw-leading-snug md:tw-text-5xl md:tw-leading-snug lg:tw-text-6xl lg:tw-leading-normal xxl:tw-text-7xl xxl:tw-leading-normal"
      >
        Access More With Your Money
      </h3>
      <p class="tw-max-w-screen-md tw-text-base tw-leading-loose tw-mt-6">
        Earn, learn, parlay, and grow financially. With Ardilla, you have more opportunities than
        ever at your finger tips. Why not take advantage today?
      </p>
      <BtnComponent
        class="tw-w-full sm:tw-w-[18rem] tw-border tw-border-white tw-rounded-full tw-py-4 tw-mt-12 tw-mb-32"
        title="Learn more about savings"
        :btnStyle="getStartedBtnStyle"
        :comingSoonIcon="true"
        comingSoonIconColor="#8807F7"
        comingSoonIconBg="#FFFFFF"
      />
      <div
        class="info-container tw-grid md:tw-grid-cols-2 lg:tw-gap-x-20 lg:tw-gap-y-12 xxl:tw-gap-x-36 xxl:tw-gap-y-16 tw-bg-purple-bg6 tw-border-x tw-border-t tw-border-purple-bg2 tw-rounded-t-xl tw-pb-16"
      >
        <div
          v-for="(info, index) in infos"
          :key="info.id + index"
          class="tw-flex tw-px-4 tw-pt-16"
          :class="{ ' tw-justify-end': index === 0, 'tw-justify-end': index === 2 }"
        >
          <div
            class="md:tw-relative md:tw-max-w-sm hover:tw-bg-purple-bg7 tw-rounded-xl tw-px-4 tw-py-8"
            :class="{ 'md:tw-pb-36': index === 3, 'md:tw-pb-16': index === 1 }"
          >
            <img class="tw-mb-8" :src="info.url" loading="lazy" alt="info" />
            <h4 class="tw-text-2xl tw-font-bold tw-mb-6">{{ info.header }}</h4>
            <p class="tw-text-base tw-leading-7 tw-mb-12 md:tw-mb-0">{{ info.text1 }}</p>
            <p class="md:tw-absolute md:tw-bottom-4 tw-font-bold">Learn More</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import BtnComponent from '@/components/general/BtnComponent.vue'
import accessicon1 from '@/assets/img/accessicon1.svg'
import accessicon2 from '@/assets/img/accessicon2.svg'
import accessicon3 from '@/assets/img/accessicon3.svg'
import accessicon4 from '@/assets/img/accessicon4.svg'

const getStartedBtnStyle = reactive({
  backgroundColor: '#1B0132',
  color: '#FFFFFF',
  hoverColor: '#FFFFFF',
  hoverBgColor: '#43027E'
})

let infos = reactive([
  {
    id: 'infoImg3',
    header: 'DIB',
    text1:
      'Nothing beats an emergency quite like an emergency fund. With Ardilla you can get started building that emergency fund.',
    url: accessicon3
  },
  {
    id: 'infoImg4',
    header: 'Dreams',
    text1:
      'Helping you make your dreams a reality is important to us. We have helped so many others. We can help you as well.',
    url: accessicon4
  },
  {
    id: 'infoImg2',
    header: 'Vault',
    text1:
      "Lock away excess funds you don't know what to do with. We can help you safeguard it till you are ready. It definitely beats spending it and wondering where all that money went to.",
    url: accessicon2
  },
  {
    id: 'infoImg1',
    header: 'Grit',
    text1: 'Become a VIP when you save more money with us. Enjoy better benefits.',
    url: accessicon1
  }
])
</script>

<style lang="scss" scoped>
#accessmore-section {
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
    .info-container {
      box-shadow: 0px 10px 35px rgba(6, 46, 253, 0.25), 0px 15px 70px rgba(251, 64, 64, 0.25),
        0px 30px 90px rgba(136, 7, 247, 0.5);
    }
  }
}
</style>
