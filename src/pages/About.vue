<template>
  <Navbar />
  <section class="relative w-full h-[80vh] bg-orange-100"></section>

  <section class="relative w-full h-[80vh] bg-amber-500"></section>

  <section class="relative w-full h-[80vh] bg-orange-100"></section>

  <footer class="bg-stone-900 p-8 lg:py-12 lg:px-10">
    <div class="flex flex-row space-x-32 justify-between md:max-w-full">
      <div>
        <img src="Unisell-Brand_Typo.svg" alt="logo" class="w-1/2" />
        <p class="text-stone-300">
          &copy; 2022 Unisell Indonesia <br />
          All right reserved.
        </p>
      </div>
      <div class="flex flex-col space-y-2 text-white max-w-lg">
        <h5 class="text-xs text-stone-300">Navigasi</h5>
        <router-link to="/" class="block w-full hover:underline"
          >Beranda</router-link
        ><br />
        <router-link to="/tentang" class="bock w-full hover:underline"
          >Tentang</router-link
        ><br />
        <router-link to="/" class="block w-full hover:underline"
          >Katalog</router-link
        ><br />
      </div>
      <div class="flex flex-col space-y-2 text-white">
        <h5 class="text-xs text-stone-300">Media Sosial</h5>

        <div class="flex justify-start">
          <Instagram class="w-6" />
          <a href="#!" class="px-2 block w-full hover:underline">unisell.id</a>
        </div>
      </div>

      <div class="flex flex-col space-y-2 text-white w-1/2">
        <span class="text-xs text-stone-300">Alamat</span>
        <address>
          Jalan Kolonel Sutarto Nomor 150K, Jebres, Surakarta, Jawa Tengah 57126
        </address>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
</script>
