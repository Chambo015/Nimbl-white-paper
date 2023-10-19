<template>
  <div @click.self="closeMenu" class="fixed inset-x-0 top-0 bottom-0 z-[999] bg-white/50 ">
    <div class="bg-white flex flex-col gap-10 py-10 ">
      <ul class=" flex flex-col items-center gap-[20px]  [&>li:hover]:text-[#7E7E7E] [&>li]:cursor-pointer">
            <li @click="closeMenu"><a href="#Introduction">Introduction</a></li>
            <li  @click="closeMenu"><a href="#problem">The Problem</a></li>
            <li  @click="closeMenu"><a href="#solution">The Solution</a></li>
            <li  @click="closeMenu"><a href="#stakes">Stakes</a></li>
            <li  @click="closeMenu"><a href="#partners">Partners</a></li>
            <li @click="closeMenu"><a href="#future">Future Plans</a></li>
            <li  @click="closeMenu"><a href="#conclusion">Conclusion</a></li>
          </ul>
          <AppHeroButton class="w-[331px] h-[62px] mx-auto">
            <p class="font-rfdewi text-base font-semibold max-sm:text-sm text-white ">NIMBL’S WEBSITE</p>
            <template #icon><iconsFiveDots class="w-[37px] h-[37px]" /></template>
          </AppHeroButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close'])

const closeMenu = () => {
  emit('close')
}
</script>

<style scoped>

</style>