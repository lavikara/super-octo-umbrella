<template>
  <nav id="topnav" class="tw-w-full tw-bg-purple tw-p-4 tw-mx-auto">
    <div class="container tw-grid tw-grid-cols-2 tw-pb-">
      <div class="tw-grid tw-grid-cols-3 tw-items-center">
        <LogoIcon class="tw-cursor-pointer" @click="router.push({ name: 'HomePage' })" />
        <div class="tw-flex tw-items-center tw-mt-2">
          <TopNavMenu
            class="md:tw-mr-6 lg:tw-mr-16"
            title="Products"
            :focus="productsFocus"
            :subMenu="productSubMenu"
            :showSubMenu="true"
            :showChevronDown="true"
          />
          <TopNavMenu
            class="md:tw-mr-6 lg:tw-mr-16"
            title="Business"
            :focus="businessFocus"
            routeName="BusinessPage"
          />
          <TopNavMenu
            class="md:tw-mr-6 lg:tw-mr-16"
            title="Company"
            :focus="companyFocus"
            :subMenu="companySubMenu"
            :showSubMenu="true"
            :showChevronDown="true"
          />
          <TopNavMenu title="Learn" :focus="learnFocus" routeName="LearnPage" />
        </div>
      </div>
      <div class="tw-flex tw-justify-end tw-items-center tw-mt-2">
        <TopNavMenu class="tw-mr-4" title="Sign In" :focus="signInFocus" routeName="SignInPage" />
        <BtnComponent
          class="tw-rounded-full tw-px-8 tw-py-2"
          title="Create Account"
          :btnStyle="createAccountBtnStyle"
          @click="router.push({ name: 'CreateAccountPage' })"
        />
        <div class="tw-flex tw-items-center tw-cursor-pointer tw-ml-8">
          <div class="tw-w-10 tw-h-10 tw-bg-purple-bg3 tw-rounded-full tw-px-2 tw-py-1.5">
            <img class="" src="@/assets/img/profile-img.png" loading="lazy" alt="profile" />
          </div>
          <ChevronDown class="tw-ml-1" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, reactive, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import LogoIcon from '@/components/icons/LogoIcon.vue'
import TopNavMenu from '@/components/navigation/TopNavMenu.vue'
import BtnComponent from '@/components/general/BtnComponent.vue'
import ChevronDown from '@/components/icons/ChevronDown.vue'

const route = useRoute()
const router = useRouter()

let productsFocus = ref(false)
let businessFocus = ref(false)
let companyFocus = ref(false)
let learnFocus = ref(false)
let signInFocus = ref(false)
let companySubMenu = reactive([{ title: 'Career', routeName: 'CareerPage' }])
let productSubMenu = reactive([{ title: 'Interest Calculator', routeName: 'InterestCalculator' }])
const createAccountBtnStyle = reactive({
  backgroundColor: '#8807F7',
  color: '#FFFFFF',
  border: '#CD4161',
  hoverColor: '#3D0072',
  hoverBgColor: '#FFFFFF'
})

const setFocus = (route) => {
  productsFocus.value = false
  businessFocus.value = false
  companyFocus.value = false
  learnFocus.value = false
  signInFocus.value = false
  switch (route) {
    case 'BusinessPage':
      businessFocus.value = true
      break
    case 'InterestCalculator':
      productsFocus.value = true
      break
    case 'LearnPage':
      learnFocus.value = true
      break
    case 'SignInPage':
      signInFocus.value = true
      break
    case 'CareerPage':
      companyFocus.value = true
      break
  }
}

watchEffect(() => setFocus(route.name))
</script>

<style lang="scss" scoped>
#topnav {
  .container {
    @media (min-width: 1024px) {
      max-width: 1280px;
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
