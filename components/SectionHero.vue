<template>
  <section>
    <div
      class="container flex justify-between items-center max-sm:flex-col pt-[40px] pb-[100px] max-sm:pt-5 max-sm:pb-14">
      <div>
        <h4>Whitepaper Nimbl</h4>
        <h1 class="font-rfdewi font-bold text-[80px] text-nimbl-black leading-tight max-sm:text-[40px] max-2xl:text-[70px]">
          The Future of <span class="whitespace-nowrap max-sm:whitespace-normal">Social-Fi Unveiled</span>
        </h1>
        <div class="mt-10 max-sm:hidden flex">
          <AppLottie />
        </div>
      </div>
      <div class="flex-shrink-0 max-sm:mt-5">
        <NuxtImg
          preload
          src="/img/nimbl-hero-img.png"
          width="778"
          height="783"
          :placeholder="[500, 500, 20, 2]"
          class="flex-shrink-0 w-[778px] h-[783px] max-sm:w-full max-sm:h-auto max-2xl:w-[600px] max-2xl:h-[605px] pointer-events-none select-none max-md:aspect-square" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
