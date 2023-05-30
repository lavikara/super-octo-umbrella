<template>
  <div id="footer" class="tw-bg-purple-bg2 tw-px-4 sm:tw-px-8 lg:tw-px-16">
    <div class="container tw-relative">
      <div
        class="sub-footer tw-max-w-3xl tw-absolute tw-left-0 tw-right-0 tw--top-52 sm:tw--top-28 tw-rounded-3xl sm:tw-grid sm:tw-grid-cols-2 tw-px-4 md:tw-px-8 tw-pt-8 tw-mx-auto"
      >
        <div>
          <h3
            class="tw-max-w-sm tw-text-center sm:tw-text-left tw-font-bold tw-text-white tw-text-2xl tw-leading-normal lg:tw-text-4xl lg:tw-leading-normal tw-mb-8 tw-mx-auto"
          >
            Download for free Start saving Today
          </h3>
          <BtnComponent
            class="tw-w-full sm:tw-w-36 tw-text-xs tw-rounded-lg tw-p-6"
            title="Download for free"
            :btnStyle="getStartedBtnStyle"
          />
        </div>
        <img class="tw-mt-12 tw-mx-auto" src="@/assets/img/footer.svg" loading="lazy" alt="phone" />
      </div>
      <div
        class="tw-bg-purple-bg2 tw-text-white md:tw-grid md:tw-grid-cols-3 lg:tw-grid-cols-4 xl:tw-grid-cols-5 tw-pt-80 sm:tw-pt-44 md:tw-pt-60"
      >
        <div class="tw-mb-12">
          <h3 class="tw-font-extrabold tw-text-sm tw-mb-4">Products</h3>
          <FooterMenu class="tw-mb-4" title="Savings" />
          <FooterMenu class="tw-mb-4" title="Dilla" />
          <FooterMenu class="tw-mb-4" title="Financial Coach" />
          <FooterMenu class="tw-mb-4" title="Halal" />
          <FooterMenu class="tw-mb-4" title="Budgetting" :comingSoon="true" />
          <FooterMenu class="tw-mb-4" title="Investment" :comingSoon="true" />
          <FooterMenu class="tw-mb-4" title="Insurance" :comingSoon="true" />
        </div>
        <div class="tw-mb-12">
          <h3 class="tw-font-extrabold tw-text-sm tw-mb-4">Company</h3>
          <FooterMenu class="tw-mb-4" title="About us" />
          <FooterMenu class="tw-mb-4" title="Careers" />
          <FooterMenu class="tw-mb-4" title="FAQS" />
          <FooterMenu class="tw-mb-4" title="Press" />
        </div>
        <div class="tw-mb-12">
          <h3 class="tw-font-extrabold tw-text-sm tw-mb-4">Transparency</h3>
          <FooterMenu class="tw-mb-4" title="Terms & conditions" />
          <FooterMenu class="tw-mb-4" title="Information security policy" />
          <FooterMenu class="tw-mb-4" title="Privacy policy" />
          <FooterMenu class="tw-mb-4" title="Interest Tool" />
        </div>
        <div class="tw-mb-12">
          <h3 class="tw-font-extrabold tw-text-sm tw-mb-4">Developer</h3>
          <FooterMenu class="tw-mb-4" title="Connect API" :comingSoon="true" />
        </div>
        <div class="tw-mb-12">
          <h3 class="tw-font-extrabold tw-text-sm tw-mb-4">Address</h3>
          <FooterMenu class="tw-mb-4" title="33B, Ogundana street, Allen, Ikeja." />
          <h3 class="tw-font-extrabold tw-text-sm tw-my-4">Contact</h3>
          <FooterMenu class="tw-mb-4" title="support@ardilla.africa" />
          <FooterMenu class="tw-mb-4" title="(234)801 000 1234" />
        </div>
      </div>
      <div
        class="lg:tw-flex lg:tw-justify-between tw-text-white tw-border-t tw-border-white tw-pt-4 tw-pb-12"
      >
        <div>
          <p class="tw-text-sm tw-mb-4">© 2023 Ardilla. All right reserved</p>
          <p class="tw-max-w-2xl tw-text-xs tw-leading-loose">
            Ardilla operates under the coorperative license of Ardilla Multipurpose Cooperative
            Society, LSC 18245, We provide Savings and Fixed deposit services to our users
          </p>
        </div>
        <div class="tw-flex tw-mt-8">
          <img
            class="tw-mr-4"
            src="@/assets/img/instagramlogo.svg"
            loading="lazy"
            alt="instagram"
          />
          <img class="tw-mr-4" src="@/assets/img/facebooklogo.svg" loading="lazy" alt="facebook" />
          <img class="tw-mr-4" src="@/assets/img/linkedinlogo.svg" loading="lazy" alt="linkedin" />
          <img class="tw-mr-4" src="@/assets/img/twitterlogo.svg" loading="lazy" alt="twitter" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import FooterMenu from '@/components/navigation/FooterMenu.vue'
import BtnComponent from '@/components/general/BtnComponent.vue'

const getStartedBtnStyle = reactive({
  backgroundColor: '#FFFFFF',
  color: '#3D0072',
  hoverColor: '#FFFFFF',
  hoverBgColor: '#8807F7'
})
</script>

<style lang="scss" scoped>
#footer {
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

    .sub-footer {
      background: url(@/assets/img/footerbackground.svg);
      background-position: center;
      background-clip: border-box;
    }
  }
}
</style>
