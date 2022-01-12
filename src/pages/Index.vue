<template>
  <Navbar />

  <!--header-->
  <header
    class="relative h-[75vh] bg-[url('/img/header-img.jpg')] bg-fixed bg-cover bg-no-repeat bg-left-bottom"
  >
    <div class="absolute inset-0 overlay" title="image by unsplash" />

    <div
      class="absolute inset-0 flex flex-col p-8 justify-center items-start lg:items-center gap-y-4"
    >
      <h1 class="max-w-prose font-extrabold text-5xl text-white lg:text-center">
        <span class="block">Mulai bisnismu dengan</span>
        <span class="block text-amber-300">usaha minimal</span>
      </h1>

      <p
        class="max-w-prose font-semibold text-lg lg:text-center text-stone-100"
      >
        Kami menyediakan platform untuk membantu anda dalam menemukan barang
        jual serta membantu para produsen memasarkan produk anda.
      </p>

      <div class="py-4">
        <router-link
          to="#!"
          class="flex px-4 py-2 bg-white hover:bg-gray-100 text-stone-800 justify-center"
        >
          <span class="font-medium">Pelajari selengkapnya</span>
        </router-link>
      </div>
    </div>
  </header>

  <section class="bg-orange-100 py-32 px-16">
    <div class="flex flex-col lg:flex-row w-full max-w-screen-lg mx-auto gap-x-20 gap-y-10">
      <h4 class="font-semibold text-2xl text-stone-700">
        Apakah hal-hal seperti ini menjadi keresahan anda?
      </h4>

      <ul class="list-disc text-lg font-semibold text-orange-500 space-y-3">
        <li>Mau bisnis tapi jualan apa ya? 🤔</li>
        <li>Aku udah punya ide jualan, tapi nggak punya modal 🙁</li>
        <li>Kalau jualan aku nggak punya tempat buat menaruh daganganku 😫</li>
        <li>Eh cara jualan yang benar bagaimana ya? 😅</li>
        <li>Menjalani bisnis sendiri, seandainya aku punya tempat buat sharing-sharing kegiatan bisnis pasti seru 😁</li>
      </ul>
    </div>
  </section>

  <!-- samakan diatas -->
  <section class="bg-amber-500">
    <div class="py-14 px-10 text-right">
      <h1 class="text-lg mx-20">
        <b class="text-stone-700">Atau.. mungkin keresahan anda seperti ini?</b>
      </h1>
      <br />
      <div class="text-white columns-2 text-left flex justify-start">
        <h3>
          <p>
            <b>
              - Susah juga ya bikin produk sama jualan.
              <br />- Wah aku suka bikin kerajinan, tapi aku gak bisa jualan
              (*merasa tidak menghasilkan). <br />- Bisa tidak ya usahaku cuma
              fokus produksi aja? <br />- Mau meningkatkan produksi tapi kalau
              tidak terjual <br />bagaimana ya? Niat cari untung lebih malah
              buntung.
            </b>
          </p>
        </h3>
      </div>
    </div>
  </section>

  <!-- layout kurang rapi, prefer flex. html kurang semantic -->
  <section class="bg-orange-100">
    <!-- wrapper flex buat max-width -->
    <div class="py-14 px-10 md:flex justify-center">
      <img src="/img/BrandLogo.png " />
    </div>

    <div class="py-4 px-10">
      <h1 class="text-lg">
        <b class="text-stone-700">Sekilas</b>
      </h1>
      <br />
      <!-- font weight blum sesuai -->
      <div class="flex justify-between">
        <p class="text-stone-500">
          Untuk anda yang ingin memulai bisnis maupun yang <br />ingin
          mengembangkan bisnisnya (reseller dan supplier), <br />Marketplace B2B
          yang menyediakan cara kerja yang <br />simpel dan mudah sehingga
          meminimalisir usaha anda <br />dalam menjalankan bisnis serta
          memasarkan produk anda.
        </p>

        <div>
          <p class="text-lg">
            <b class="text-stone-700">Apa yang bukan kita?</b>
          </p>
          <br />

          <div>
            <p class="text-stone-500">
              Kami bukan marketplace untuk berbelanja layaknya e-commerce
              <br />pada umumnya. Sistem kita hanya menerima reseller dan
              supplier.
              <br />
            </p>
          </div>
        </div>
      </div>
      <div class="py-4 flex justify-end">
        <router-link
          to="#!"
          class="flex px-4 py-2 bg-amber-500 hover:bg-orange-500 text-white-800 justify-center"
        >
          <span class="font-medium">Pelajari Kita Lebih Lengkap</span>
          <ArrowRight class="w-6" />
        </router-link>
      </div>
    </div>
  </section>

  <section class="bg-amber-500">
    <h1 class="mx-20 py-8 text-white">
      <b class="text-lg">Bagaimana Cara Kita Bekerja</b>
    </h1>

    <h1 class="mx-20 py-6 text-amber-300 text-lg">
      <b>Flow Here...</b>
    </h1>
  </section>

  <section class="bg-orange-100 p-8 lg:py-32 lg:px-16">
    <div class="flex flex-col lg:flex-row items-center gap-x-8 gap-y-4">
      <div class="flex flex-col w-full p-4 justify-center items-center">
        <h4 class="font-bold font-signika text-4xl text-center">
          <span class="text-gradient">FAQ</span>
        </h4>
      </div>

      <!-- blum ada spacing, rounded border -->
      <Accordion class="w-full">
        <br />
        <!-- what the heck? -->
        <p class="text-stone-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod<br />
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim<br />
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea<br />
          commodo consequat.
        </p>
      </Accordion>
    </div>
  </section>

  <!--  -->
  <footer class="bg-stone-900 px-24 py-12 flex flex-col">
    <div class="flex flex-row space-x-32 justify-between">
      <div>
        <img src="Unisell-Brand_Typo.svg" alt="logo" class="w-1/3" />
        <p class="text-stone-300">
          &copy; 2021 Unisell Indonesia <br />
          All right reserved.
        </p>
      </div>
      <div class="flex flex-col space-y-2 text-white">
        <h2 class="text-xs text-stone-300">Navigasi</h2>
        <a href="#" class="block w-full hover:underline">Beranda</a><br />
        <a href="#" class="bock w-full hover:underline">Tentang</a><br />
        <a href="#" class="block w-full hover:underline">Katalog</a><br />
      </div>
      <div class="flex flex-col space-y-2 text-white">
        <h2 class="text-xs text-stone-300">Media Sosial</h2>

        <div class="flex justify-start">
          <Instagram class="w-6" />
          <p class="px-2">unisell.id</p>
        </div>
      </div>

      <div class="flex flex-col space-y-2 text-white">
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
import Accordion from "../components/Accordion.vue";
import ArrowRight from "../components/icons/ArrowRight.vue";
import Instagram from "../components/icons/Instagram.vue";
</script>

<style lang="sass" scoped>
.overlay
  background-image: linear-gradient(180deg, rgba(28, 25, 23, 0.4) 0%, rgba(28, 25, 23, 0.35) 33.12%, rgba(28, 25, 23, 0.7) 69.58%), url(.jpg)

.text-gradient
  @apply bg-clip-text text-transparent
  background-image: linear-gradient(168.45deg, #ED2024 11.75%, #F99D1C 89.09%)
</style>
