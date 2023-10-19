<template>
  <section class="bg-[#161617] bg-[url('/img/noise.png')]">
    <div class="container py-[100px] max-sm:py-[50px]">
      <h2 class=" text-white ">Layers of Rewards  <br/> and Recognition:</h2>
      <dl class="mt-12 max-w-[85%] max-sm:max-w-full">
          <dt class="first_before">Bounty Campaign Seasons</dt>
          <dd >Special events where users can earn unique digital perks and tokens by participating in platform-specific tasks.</dd>
          <AppDivider  />
          <dt class="airdrops">Airdrops</dt>
          <dd >Random airdrops add an element of surprise, offering free tokens to keep the community engaged and excited.</dd>
          <AppDivider  />
          <dt class="digitalperks">Digital Perks</dt>
          <dd >Custom badges, unique emoticons, and more help to increase user interaction and loyalty.</dd>
          <AppDivider  />
          <dt class="badges">Badges and Check Marks</dt>
          <dd >These act as a reputation system that rewards quality interaction.</dd>
          <AppDivider  />
          <dt class="nimblultra">Nimbl Ultra Giveaways</dt>
          <dd >Opportunities to win a free subscription to our premium service keep users consistently active and engaged.</dd>
          <AppDivider  />
          <dt class="experientialrewards">Experiential Rewards</dt>
          <dd >Beyond the screen, real-world experiences can be unlocked through platform interaction.</dd>
        </dl>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
dt {
  @apply text-white/50 font-rfdewi  flex items-center text-[40px] max-sm:text-[30px] leading-tight
}
dt:not(:first-of-type) {
 @apply mt-7
}
dd {
  @apply text-white text-2xl leading-tight mt-7 mb-6 max-sm:text-base
}

dt::before {
  @apply mr-4 h-[50px] w-[50px]
}
.first_before::before {
  content: url("/img/BountyCampaignSeasons.png");
}
.airdrops::before {
content: url("/img/icon_airdrops.png");
}
.digitalperks::before {
  content: url("/img/DigitalPerks.png");
}
.badges::before {
  content: url("/img/Badges.png");
}
.nimblultra::before {
  content: url("/img/NimblUltra.png");
}
.experientialrewards::before {
  content: url("/img/ExperientialRewards.png");
}
</style>