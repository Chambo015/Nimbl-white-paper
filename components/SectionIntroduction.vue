<template>
  <section id="Introduction" class="bg-[#161617] bg-[url('/img/noise.png')]">
    <div class="container flex items-center justify-between max-sm:flex-col max-sm:pt-[50px]">
      <div>
        <h2 class="text-white">INTRODUCTION</h2>
        <div class="text-white text-2xl max-sm:text-base max-w-[870px] mt-8 space-y-4 max-2xl:text-xl">
          <p>Long gone are the days when social media was just a platform for sharing updates and photos.</p>
          <AppDivider />
          <p>
            Enter Nimbl, a state-of-the-art, video-first social platform with community chats, where users can trade
            influencer stakes.
          </p>
          <AppDivider />
          <p>
            Nimbl isn't just another app; it's a comprehensive ecosystem designed to solve the inherent problems of
            content monetization, and it's set to become the most advanced, aesthetically pleasing, and engaging social
            media application ever designed.
          </p>
        </div>
      </div>
      <div class="flex-shrink-0 pt-[90px] max-sm:pt-5">
        <NuxtImg
          format="webp"
          src="/img/right-phone.png"
          loading="lazy"
          width="560"
          height="893"
          :placeholder="[250, 398, 20, 2]"
          class="flex-shrink-0 w-[560px] h-[893px] max-sm:w-full max-sm:h-auto max-2xl:h-[600px] max-2xl:w-[376px] max-2xl:mr-10 max-md:mr-0" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
