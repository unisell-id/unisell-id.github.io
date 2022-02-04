<template>
  <!-- blum interaktif? on progres? -->
  <div>
    <div class="">
      <div class="bg-red-900 text-white p-4 font-bold flex justify-start">
        <ArrowDown />
        <p class="px-2">Apa yang dapat Unisell berikan kepada reseller ?</p>
      </div>
      <div class="bg-white">
        <slot></slot>
      </div>
      <div class="bg-red-900 text-white p-4 font-bold flex justify-start">
        <ArrowRight class="w-6" />
        <p class="px-2">Apakah ada platform fee untuk menggunakan Unisell ?</p>
      </div>

      <div class="bg-red-900 text-white p-4 font-bold flex justify-start">
        <ArrowRight class="w-6" />
        <p class="px-2">FAQ</p>
      </div>

      <div class="bg-red-900 text-white p-4 font-bold flex justify-start">
        <ArrowRight class="w-6" />
        <p class="px-2">FAQ</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import ArrowDown from "../components/icons/ArrowDown.vue";
import ArrowRight from "../components/icons/ArrowRight.vue";
import ArrowRight1 from "../components/icons/ArrowRight.vue";
</script>
