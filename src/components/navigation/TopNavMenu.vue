<template>
  <div id="topnav-menu" class="tw-relative">
    <div
      class="dropdown"
      @click="openSubMenu"
      @mouseover="setHoverStyle"
      @mouseleave="resetHoverStyle"
    >
      <router-link
        :to="{ name: routeName }"
        class="tw-flex tw-items-center tw-text-sm tw-cursor-pointer tw-transition-all hover:tw-text-gray"
        :class="{
          'tw-flex tw-justify-between': showChevronDown === true,
          'tw-w-full tw-text-2xl tw-font-bold': mobile === true,
          'tw-text-gray': focus === true,
          'tw-text-white': focus === false
        }"
        @click="emit('clicked', title)"
      >
        <span>
          {{ title }}
        </span>
        <span
          v-if="title === 'Business'"
          class="tw-text-xs tw-border tw-border-white tw-rounded tw-px-0.5 tw-ml-1"
          >Beta</span
        >
        <ChevronSolidDown v-if="showChevronDown" :focus="focus" :hover="hover" class="tw-ml-2" />
      </router-link>
      <div
        v-if="showSubMenu"
        ref="menu"
        class="menu tw-hidden md:tw-absolute md:tw-w-72 tw-bg-white tw-rounded-lg tw-shadow-md tw-p-4 lg:tw-px-8 tw-z-50"
      >
        <div>
          <div>
            <ul v-for="(menu, index) in subMenu" :key="index" class="tw-w-full">
              <li
                class="list tw-w-full tw-text-purple-bg1 tw-cursor-pointer tw-transition-all hover:tw-text-purple-bg2 tw-py-2 tw-my-2"
                @click="goToSubMenu(menu.routeName, menu.title)"
              >
                {{ menu.title }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import ChevronSolidDown from '@/components/icons/ChevronSolidDown.vue'

const router = useRouter()
const store = useStore()

const emit = defineEmits(['clicked'])
const props = defineProps({
  title: { type: String, default: () => '', required: true },
  focus: { type: Boolean, default: () => false },
  showSubMenu: { type: Boolean, default: () => false },
  showChevronDown: { type: Boolean, default: () => false },
  routeName: { type: String },
  mobile: { type: Boolean, default: () => false },
  subMenu: { type: Array }
})

let menu = ref()
let hover = ref(false)

const screenSize = computed(() => {
  return store.state.screenSize
})

const goToSubMenu = (routeName, title) => {
  menu.value.click = true
  router.push({ name: routeName })
  emit('clicked', title)
}

const openSubMenu = () => {
  if (!props.showSubMenu || screenSize.value >= 768) return
  menu.value.style.display === 'block'
    ? (menu.value.style.display = 'none')
    : (menu.value.style.display = 'block')
  menu.value.style.position === 'static'
    ? (menu.value.style.position = 'absolute')
    : (menu.value.style.position = 'static')
}

const setHoverStyle = () => {
  hover.value = true
}

const resetHoverStyle = () => {
  hover.value = false
}
</script>

<style lang="scss" scoped>
#topnav-menu {
  .dropdown {
    .menu {
      .list {
        transition: 0.3s ease all;
      }
    }

    &:hover .menu {
      display: block;
      position: absolute;
    }
  }
}
</style>
