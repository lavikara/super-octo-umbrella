<template>
  <div id="mobile-nav" class="tw-w-full">
    <nav
      class="navbar tw-flex tw-justify-between tw-items-center tw-bg-purple tw-p-4"
      :class="[
        route.name === 'WaitlistPage' ? 'tw-bg-purple-bg2' : '',
        route.name === 'InterestCalculatorPage' ? 'tw-bg-purple-bg9' : '',
        route.name === 'CareerPage' ? 'tw-bg-purple-bg2' : ''
      ]"
    >
      <div
        class="navbar-container tw-top-0 tw-flex tw-z-20 tw-items-center tw-w-full tw-justify-between tw-z-50"
      >
        <LogoIcon class="tw-cursor-pointer" @click="gotoHome" />
        <input
          class="tw-fixed tw-top-6 tw-right-5 md:tw-right-4 tw-opacity-0 tw-w-7 tw-h-5 tw-cursor-pointer tw-z-40"
          type="checkbox"
          name="mobileSidebar"
          id="mobile-sidebar"
          ref="mobileSidebar"
          @click="updateMenuState"
        />
        <HamburgerIcon
          v-if="menuState"
          class="tw-fixed tw-top-6 tw-right-5 md:tw-right-4 tw-flex tw-flex-col tw-w-7 tw-h-5 tw-justify-between tw-z-20"
        />
        <CloseIcon
          v-if="!menuState"
          class="tw-fixed tw-top-6 tw-right-5 md:tw-right-4 tw-flex tw-flex-col tw-w-7 tw-h-5 tw-justify-between tw-z-20"
        />
        <div
          class="menu-items tw-absolute tw-top-0 tw-left-0 tw-h-screen tw-w-full tw-flex tw-flex-col tw-bg-purple tw-pt-16 tw-px-4 tw-overflow-scroll tw-z-10"
        >
          <div
            class="tw-flex tw-justify-end tw-items-center tw-cursor-pointer tw-mb-6"
            @click="homePage"
          >
            <div class="tw-w-10 tw-h-10 tw-bg-purple-bg3 tw-rounded-full tw-px-2 tw-py-1.5">
              <img class="" src="@/assets/img/profile-img.png" loading="lazy" alt="profile" />
            </div>
            <ChevronDown class="tw-ml-1" />
          </div>
          <TopNavMenu
            class="tw-py-4"
            title="Product"
            :mobile="true"
            :subMenu="productSubMenu"
            :showChevronDown="true"
            :showSubMenu="true"
            @clicked="closeSidebar"
          />
          <TopNavMenu
            class="tw-py-4"
            title="Business"
            :mobile="true"
            routeName="BusinessPage"
            @clicked="closeSidebar"
          />
          <TopNavMenu
            class="tw-py-4"
            title="Company"
            :mobile="true"
            :subMenu="companySubMenu"
            :showChevronDown="true"
            :showSubMenu="true"
            @clicked="closeSidebar"
          />
          <TopNavMenu
            class="tw-py-4"
            title="Learn"
            :mobile="true"
            routeName="LearnPage"
            @clicked="closeSidebar"
          />
          <TopNavMenu
            class="tw-py-4"
            title="Sign In"
            :mobile="true"
            routeName="SignInPage"
            @clicked="closeSidebar"
          />
          <BtnComponent
            class="tw-rounded-full tw-py-4 tw-mt-8"
            title="Create Account"
            :btnStyle="createAccountBtnStyle"
            @click="gotoCreateAccountPage"
          />
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import LogoIcon from '@/components/icons/LogoIcon.vue'
import HamburgerIcon from '@/components/icons/CloseIcon.vue'
import CloseIcon from '@/components/icons/HamburgerIcon.vue'
import TopNavMenu from '@/components/navigation/TopNavMenu.vue'
import BtnComponent from '@/components/general/BtnComponent.vue'
import ChevronDown from '@/components/icons/ChevronDown.vue'

const route = useRoute()
const router = useRouter()

let mobileSidebar = ref()
let menuState = ref(false)
let companySubMenu = reactive([{ title: 'Career', routeName: 'CareerPage' }])
let productSubMenu = reactive([
  { title: 'Interest Calculator', routeName: 'InterestCalculatorPage' }
])
const createAccountBtnStyle = reactive({
  backgroundColor: '#8807F7',
  color: '#FFFFFF',
  border: '#CD4161',
  hoverColor: '#3D0072',
  hoverBgColor: '#FFFFFF'
})

const closeSidebar = (title) => {
  if (title === 'Product' || title === 'Company') {
    return
  }
  mobileSidebar.value.checked = false
  menuState.value = false
}

const homePage = () => {
  router.push({ name: 'HomePage' })
  mobileSidebar.value.checked = false
  menuState.value = false
}

const gotoHome = () => {
  switch (route.name) {
    case 'WaitlistPage':
      router.push({ name: 'HomePage' })
      break
    case 'HomePage':
      router.push({ name: 'WaitlistPage' })
      break

    default:
      router.push({ name: 'WaitlistPage' })
      break
  }
  mobileSidebar.value.checked = false
  menuState.value = false
}

const gotoCreateAccountPage = () => {
  router.push({ name: 'CreateAccountPage' })
  mobileSidebar.value.checked = false
  menuState.value = false
}

const updateMenuState = () => {
  menuState.value = !menuState.value
}
</script>

<style lang="scss" scoped>
#mobile-nav {
  .navbar-container .hamburger-lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.3s ease-in-out;
  }

  .navbar-container .hamburger-lines .line2 {
    transition: transform 0.2s ease-in-out;
  }

  .navbar-container .hamburger-lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.3s ease-in-out;
  }

  .navbar .menu-items {
    max-width: 28rem;
    transform: translate(-150%);
    transition: transform 0.5s ease-in-out;
  }

  .navbar .menu-items .faq-btn {
    left: 50%;
    transform: translate(-50%, 0);
  }

  .navbar-container input[type='checkbox']:checked ~ .menu-items {
    transform: translateX(-0%);
  }

  .navbar-container input[type='checkbox']:checked ~ .hamburger-lines .line1 {
    transform: rotate(38deg);
  }

  .navbar-container input[type='checkbox']:checked ~ .hamburger-lines .line2 {
    transform: scaleY(0);
  }

  .navbar-container input[type='checkbox']:checked ~ .hamburger-lines .line3 {
    transform: rotate(-38deg);
  }
}
</style>
