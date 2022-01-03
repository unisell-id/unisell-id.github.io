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

  <section class="bg-orange-100">
    <div class="py-14 px-10 text-left">
      <h1 class="text-lg mx-20">
        <b>Apakah hal-hal seperti ini menjadi keresahan anda?</b>
      </h1>
      <br />
      <div class="text-orange-500 columns-2 text-left flex justify-end">
        <h1 class="text-base">
          <p>
            <b>
              - Mau bisnis tapi jualan apa ya?
              <br />- Aku udah punya ide jualan, tapi nggak punya modal. <br />-
              Kalau jualan aku nggak punya tempat buat menaruh daganganku.
              <br />- Eh cara jualan yang benar bagaimana ya? <br />- Susah
              menjalani bisnis sendiri, seandainya aku punya <br />tempat buat
              sharing-sharing kegiatan bisnis pasti seru.
            </b>
          </p>
        </h1>
      </div>
    </div>
  </section>

  <section class="bg-amber-500">
    <div class="py-14 px-10 text-right">
      <h1 class="text-lg mx-20">
        <b>Atau.. mungkin keresahan anda seperti ini?</b>
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

  <section class="bg-orange-100">
    <div class="py-14 px-10 md:flex justify-center">


      <BrandLogoOnly />

    </div>

    <div class="py-4 px-10">
      <h1 class="text-lg">
        <b>Sekilas</b>
      </h1>
      <br />
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
            <b>Apa yang bukan kita?</b>
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

  <section class="bg-orange-100 col-2">
    <div class="py-12 px-12 md:flex justify-between">
      <ul class="py-48 px-72">
        <img src="/img/FAQ.png" />
      </ul>
      <Accordion>
        <br />
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

  <!--footer-->
  <footer class="bg-stone-900">
    <div class="p-4 bg-stone-900 text-white">
      <div class="max-w-7xl mx-auto flex justify-items-start">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:gird-cols-4 gap-2">
          <div class="w-36 mx-16">
            <img src="Unisell-Brand_Typo.svg " />
            &copy; 2021 Unisell Indonesia <br />
            <br />
            All right reserved.
          <div class="mb-5 w-48 mx-16">
            <BrandTypography />
            &copy; 2021 Unisell Indonesia <br />All right reserved.
          </div>
          <div class="mb-5 py-16 px-10 columns-2">
            <h1 class="text-gray-300 pb-2">Navigasi</h1>
            <ul class="py-4">
              <li class="pb-4">Beranda</li>
              <li class="pb-4">Tentang</li>
              <li class="pb-4">Katalog</li>
            </ul>
            <div class="px-4">
              <h1 class="text-gray-300 pb-10">Media Sosial</h1>
              <ul class="py-4">
                <li class="pb-4">Unisell Indonesia</li>
                <li class="pb-4">Unisell.id</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import BrandLogoOnly from "../components/BrandLogoOnly.vue";
import BrandTypography from '../components/BrandTypography.vue';
import Accordion from "../components/Accordion.vue";
import ArrowRight from "../components/icons/ArrowRight.vue";
</script>

<style lang="sass" scoped>
.overlay
  background: linear-gradient(180deg, rgba(28, 25, 23, 0.4) 0%, rgba(28, 25, 23, 0.35) 33.12%, rgba(28, 25, 23, 0.7) 69.58%), url(.jpg)
</style>
