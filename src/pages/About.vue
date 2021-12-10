<template>
  <main class="min-h-screen bg-red-500"><div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          A better way to send money
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
      </div>

      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>

    <nav>
      <ArrowDown class="w-40 h-40" />
      <Instagram />

      <div>
        <button @click="isOpen = !isOpen" class="btn">tentang</button>
        <button @click="isOpen = !isOpen" class="btn">tentang</button>
        <button @click="isOpen = !isOpen" class="btn">tentang</button>
        <button @click="isOpen = !isOpen" class="btn !bg-red-500">tentang</button>
        <button @click="isOpen = !isOpen" class="btn">tentang</button>
        <button @click="isOpen = !isOpen" class="btn">tentang</button>
        <button @click="isOpen = !isOpen" class="btn">tentang</button>
        <button @click="isOpen = !isOpen" class="btn">tentang</button>

        <ul v-if="isOpen" class="bg-white">
          <li>profil</li>
          <li>team</li>
        </ul>
      </div>
    </nav>

    <article class="card">
      <div class="title">
        <h5>title</h5>
      </div>

      <div
        class="description"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
    </article>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/vue/outline';
import ArrowDown from '../components/icons/ArrowDown.vue';
import Instagram from '../components/icons/Instagram.vue';

const isOpen = ref(false);
const features = ref([
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon,
  },
]);
</script>

<style>
.btn {
  @apply p-4 bg-blue-500 active:bg-blue-600;
}

.card {
  @apply w-full max-w-sm m-4 p-4 flex flex-col shadow bg-white rounded;
}

.title {
  @apply font-bold text-xl text-gray-700;
}

.description {
  @apply text-gray-500;
}
</style>