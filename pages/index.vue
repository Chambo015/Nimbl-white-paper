<template>
  <div>
    <header class="bg-[#f6f6f68b] backdrop-blur h-[90px] max-sm:h-[50px] max-2xl:h-[70px] inset-x-0 fixed top-0 z-50">
      <div class="container h-full flex items-center justify-between">
        <a href="#" class="flex-grow-0"><NuxtImg preload format="webp" src="/img/logo.png" width="50" height="50" class="flex-grow-0" /></a>
        <ul class="flex items-center gap-[70px] max-2xl:gap-10 max-sm:hidden [&>li:hover]:text-[#7E7E7E] [&>li]:cursor-pointer">
          <li><a href="#Introduction">Introduction</a></li>
          <li><a href="#problem">The Problem</a></li>
          <li><a href="#solution">The Solution</a></li>
          <li><a href="#stakes">Stakes</a></li>
          <li><a href="#partners">Partners</a></li>
          <li><a href="#future">Future Plans</a></li>
          <li><a href="#conclusion">Conclusion</a></li>
        </ul>
        <AppHeroButton class="!w-[331px] !h-[62px] max-sm:hidden max-2xl:!w-[250px] max-2xl:!h-[55px]">
          <p class="font-rfdewi text-base font-semibold  max-2xl:text-sm text-white ">NIMBL’S WEBSITE</p>
          <template #icon><iconsFiveDots class="w-[37px] h-[37px] max-2xl:w-[25px] max-2xl:h-[25px]" /></template>
        </AppHeroButton>
        <AppHeroButton @click="isOpenMenu = true" sm class="!w-[70px] !h-[40px] max-sm:block hidden">
          <div class="flex flex-col gap-1"><span class="w-5 h-[1px] bg-white"></span> <span class="w-5 h-[1px] bg-white"></span> <span class="w-5 h-[1px] bg-white"></span></div>
        </AppHeroButton>
      </div>
    </header>
    <main class="pt-[90px] max-2xl:pt-[70px]">
      <SectionHero />
      <SectionIntroduction />
      <SectionTheProblem />
      <SectionReimagination />
      <SectionStakes />
      <SectionNimblToken />
      <SectionUltimate />
      <SectionRewards />
      <SectionPartners />
      <SectionWhatNext />
      <SectionConclusion />
    </main>
  </div>
  <MobileMenu v-if="isOpenMenu" @close="isOpenMenu = false" :isOpen="isOpenMenu"/>
</template>

<script setup lang="ts">
const isOpenMenu = ref(false)
</script>

<style scoped>
</style>
