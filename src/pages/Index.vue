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
    <div
      class="flex flex-col lg:flex-row w-full max-w-screen-lg mx-auto gap-x-20 gap-y-10" >
      <h4 class="font-semibold text-2xl text-stone-700">
        Apakah hal-hal seperti ini menjadi keresahan anda?
      </h4>

      <ul class="list-disc text-lg font-semibold text-orange-500 space-y-3">
        <li >Kalau jualan aku nggak punya tempat buat menaruh daganganku 😫</li>
        <li>Eh cara jualan yang benar bagaimana ya? 😅</li>
        <li>
          Menjalani bisnis sendiri, seandainya aku punya tempat buat
          sharing-sharing kegiatan bisnis pasti seru 😁
        </li>
      </ul>
    </div>
  </section>

  <!-- samakan diatas -->
  <section class="bg-amber-500 py-32 px-16">
    <div
      class="flex flex-col lg:flex-row w-full max-w-screen-lg mx-auto gap-x-20 gap-y-10">
       <h4 class="font-semibold text-2xl text-stone-700">
        Atau.. mungkin keresahan anda seperti ini?
      </h4>
      <ul class="list-disc text-lg font-semibold text-white space-y-3">
        <li>Susah juga ya bikin produk sama jualan. &#128556</li>
        <li>
          Wah aku suka bikin kerajinan, tapi aku gak bisa <br />jualan 😅
          (*merasa tidak menghasilkan).
        </li>
        <li>Bisa tidak ya usahaku cuma fokus produksi aja?</li>
        <li>
          Mau meningkatkan produksi tapi kalau tidak terjual bagaimana ya? Niat
          cari untung lebih malah buntung.  &#128578
        </li>
      </ul>


    </div>
  </section>


  <section class="bg-orange-100 p-4  lg:py-32 lg:px-16  ">
    <!-- wrapper flex buat max-width -->
      <div class=" flex flex-col sm:flex-row w-full p-4 justify-center gap-x-4 gap-y-1 ">
        <img src="/img/BrandLogo.png " />
       </div>

    <div class="flex flex-col lg:flex-row w-full max-w-6xl mx-auto gap-x-4 gap-y-1 items-center ">


      <div class=" py-10 w-3/4">
        <h4 class="text-xl  text-stone-700">
        <b>Sekilas</b>
        </h4>
        <br>
        <div class=" text-stone-500 font-medium text-base w-3/5">

           Untuk anda yang ingin memulai bisnis maupun yang ingin
          mengembangkan bisnisnya (reseller dan supplier), Marketplace B2B
          yang menyediakan cara kerja yang simpel dan mudah sehingga
          meminimalisir usaha anda dalam menjalankan bisnis serta
          memasarkan produk anda.



      </div>

      </div>


        <div class="py-10 w-1/2  ">
          <h4 class="text-xl ">
            <b class="text-stone-700">Apa yang bukan kita?</b>
          </h4>
          <br>
          <div class="text-stone-500 text-base font-medium ">

              Kami bukan marketplace untuk berbelanja layaknya e-commerce pada umumnya. Sistem kita hanya menerima reseller dan
              supplier.
          </div>
            <div class="py-4  flex justify-between">
           <router-link
          to="#!"
          class="flex px-4 py-2 bg-amber-500 hover:bg-orange-500 text-white justify-center"
        >
          <span class="font-medium text-base">Pelajari Kita Lebih Lengkap</span>
          <ArrowRight class="w-6" />
        </router-link>
        </div>

        </div>

      </div>






  </section>

  <section class="bg-amber-500 text-2xl ">
    <h4 class="mx-20 py-8 text-white">
      <b>Bagaimana Cara Kita Bekerja</b>
    </h4>

    <h4 class="mx-20 py-6 text-amber-300 text-2xl">
      <b>Flow Here...</b>
    </h4>
  </section>

  <section class="bg-orange-100 p-8 lg:py-32 lg:px-16">
    <div class="flex flex-col lg:flex-row items-center gap-x-8 gap-y-4">
      <div class="flex flex-col w-full p-4 justify-center items-center">
        <h4 class="font-bold font-signika text-4xl text-center">
          <span class="text-gradient">FAQ</span>
        </h4>
      </div>

      <!-- blum ada spacing, rounded border -->
      <div class="rounded">
        <Accordion>


        <ul class=" py-6 px-6 list-disc space-y-3 text-stone-500"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea
          commodo consequat.
        </ul>


      </Accordion>
      </div>

    </div>
  </section>

  <!--  -->
  <footer class="bg-stone-900 p-8 lg:py-12 lg:px-10 ">
    <div class="flex flex-row space-x-32 justify-between md:max-w-full  ">
      <div>
        <img src="Unisell-Brand_Typo.svg" alt="logo" class="w-1/2" />
        <p class="text-stone-300">
          &copy; 2022 Unisell Indonesia <br />
          All right reserved.
        </p>
      </div>
      <div class="flex flex-col space-y-2 text-white max-w-lg" >
        <h5 class="text-xs text-stone-300">Navigasi</h5>
        <router-link to="/" class="block w-full hover:underline">Beranda</router-link><br />
        <router-link to="/tentang" class="bock w-full hover:underline">Tentang</router-link><br />
        <router-link to="/" class="block w-full hover:underline">Katalog</router-link><br />
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
