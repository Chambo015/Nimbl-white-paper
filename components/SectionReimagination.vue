<template>
  <section id="solution" class="bg-[#161617] bg-[url('/img/noise.png')]">
    <div :style="backgroundStyles" class="bg-right bg-no-repeat mix-blend-lighten max-sm:bg-top bg-[length:auto_100%]">
      <div class="container py-[100px] max-sm:py-[50px]">
        <h2 class=" text-white max-sm:!text-[30px]">
          Nimbl: A Radical <br class="3xl:hidden" /> Reimagination of <br class="max-sm:hidden" />
          Social Media
        </h2>
        <div class="mt-[30px] text-2xl max-sm:text-base leading-tight text-white max-w-[1200px] space-y-4 max-2xl:text-xl">
          <p class="text-white/50 font-rfdewi first_before flex items-center text-[40px] max-sm:text-xl max-2xl:text-4xl">Redefining Social Media</p>
          <p>
            No more clunky designs, confusing algorithms, or vague moderation policies. Nimbl is designed to be the
            pinnacle of user-friendly, community-driven platforms. With modern, eye-catching aesthetics and transparent
            policies, Nimbl sets the gold standard for what social media should be in the 21st century.
          </p>
          <AppDivider />
          <p class="text-white/50 font-rfdewi first_before flex items-center text-[40px] max-sm:text-xl max-2xl:text-4xl">Monetizing Influence</p>
          <p>
            Filling the financial void that creators have struggled with, Nimbl introduces Influencer "Stakes"—a
            revolutionary approach to monetizing online influence. Creators can now issue stakes that fans can buy into,
            opening up a new, exciting way to monetize that aligns with the future of short-form content.
          </p>
          <AppDivider />
          <p class="text-white/50 font-rfdewi first_before flex items-center text-[40px] max-sm:text-xl max-2xl:text-4xl">Engaging UX</p>
          <p>
            Fed up with endlessly scrolling through your feed with no sense of interaction? Nimbl elevates the user
            experience with its game-like interface. It's not just badges, skins, or themes—every interaction on Nimbl
            is designed to feel rewarding. You're not just viewing content; you're part of an engaging digital universe.
          </p>
          <AppDivider />
          <p class="text-white/50 font-rfdewi first_before flex items-center text-[40px] max-sm:text-xl max-2xl:text-4xl">Fan-Creator Bonds</p>
          <p>
            In the Nimbl ecosystem, Influencer "Stakes" serve as a unique expression of a creator's personal brand.
            These stakes offer a fresh way for fans to engage with creators, creating a deeper, more meaningful
            connection. Think of it as owning a piece of the magic that makes your favorite creators so engaging and
            influential, all without crossing into the realm of formal investment.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const img = useImage();
const backgroundStyles = computed(() => {
  const imgUrl = img('/img/bg-section.png', {format: 'webp'});
  return {backgroundImage: `url('${imgUrl}')`};
});
</script>

<style scoped></style>
