<template>
  <nav>
    <div class="section lg-up h-16">
      <router-link to="#!" class="flex items-center">
        <BrandTypography class="w-24 h-24" />
      </router-link>
    </div>

    <div class="section lg-down h-16">
      <router-link to="#!" class="flex items-center">
        <BrandLogoOnly class="w-12 h-12" />
      </router-link>
    </div>

    <ul class="section lg-up">
      <li
        v-for="{ label, ...el } in CenterNavItems"
        :key="el.label"
        class="item"
      >
        <router-link
          class="btn"
          v-bind="el"
        >
          {{ label }}
        </router-link>
      </li>
    </ul>

    <ul class="section lg-up">
      <li class="item">
        <a
          :href="ContactPerson.whatsappLink"
          class="btn"
        >
          <PhoneIcon class="w-4 h-4" />
          <span>Hubungi Kami</span>
        </a>
      </li>
    </ul>

    <ul class="section lg-down">
      <li class="item">
        <a
          :href="ContactPerson.whatsappLink"
          class="btn"
        >
          <PhoneIcon class="w-5 h-5" />
        </a>
      </li>

      <li class="item">
        <button class="btn">
          <MenuIcon class="w-5 h-5" />
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { PhoneIcon, MenuIcon } from '@heroicons/vue/solid'
import BrandTypography from '../components/BrandTypography.vue';
import BrandLogoOnly from '../components/BrandLogoOnly.vue';
import { ContactPerson } from '../utils/contactPerson'

const CenterNavItems = [
  {
    label: 'Beranda',
    to: '#!',
  },
  {
    label: 'Tentang',
    to: '#!',
  },
  {
    label: 'Cara kerja',
    to: '#!',
  },
  {
    label: 'FAQ',
    to: '#!',
  },
];
</script>

<style lang="sass" scoped>
nav
  @apply sticky flex z-50 top-0 px-4 bg-white justify-between items-stretch shadow

  .section
    @apply flex px-2 items-stretch gap-x-2

    &.lg-up
      @apply hidden lg:flex

    &.lg-down
      @apply lg:hidden

  .item
    @apply flex px-4 py-2 justify-center items-center
    :hover
      @apply bg-gray-100

  .btn
    @apply flex items-center font-semibold text-stone-700 gap-x-2
</style>
