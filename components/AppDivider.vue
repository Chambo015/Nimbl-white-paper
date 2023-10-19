<template>
  <div class="w-[140px] h-[1px] flex">
    <span class=" flex-grow h-full" :class="[white ? 'bg-[#E2D0FF]' : 'bg-[#DED7FF]']"></span><span class="bg-[#4C4C4C] flex-grow-[3] ml-2 h-full" :class="[white ? 'bg-[#4C4C4C]/30' : 'bg-[#4C4C4C]']"></span>
  </div>
</template>
<script setup>
defineProps({
  white: Boolean
})
</script>
