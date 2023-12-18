<template>
  <div @click.self="closeMenu" class="fixed inset-x-0 h-screen w-screen top-0 bottom-0 z-[999] bg-black/50">
    <div
      @touchstart="startDrag"
      @touchmove="onDrag"
      @touchend="stopDrag"
      class="bg-white flex flex-col gap-10 py-10 relative will-change-transform inner"
      :style="styleCardPos">
      <ul class="flex flex-col items-center gap-[20px] [&>li:hover]:text-[#7E7E7E] [&>li]:cursor-pointer">
        <li @click="closeMenu"><a href="#Introduction">Introduction</a></li>
        <li @click="closeMenu"><a href="#problem">The Problem</a></li>
        <li @click="closeMenu"><a href="#solution">The Solution</a></li>
        <li @click="closeMenu"><a href="#stakes">Stakes</a></li>
        <li @click="closeMenu"><a href="#partners">Partners</a></li>
        <li @click="closeMenu"><a href="#future">Future Plans</a></li>
        <li @click="closeMenu"><a href="#conclusion">Conclusion</a></li>
      </ul>
      <AppHeroButton class="w-[331px] h-[62px] mx-auto">
        <p class="font-rfdewi text-base font-semibold max-sm:text-sm text-white">NIMBL’S WEBSITE</p>
        <template #icon><iconsFiveDots class="w-[25px] h-[25px]" /></template>
      </AppHeroButton>
      <div class="w-[40%] h-[5px] bg-black/20 absolute bottom-2 left-1/2 -translate-x-1/2 rounded-3xl"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({isOpen: Boolean});
const emit = defineEmits(['close']);

const closeMenu = () => {
  emit('close');
};

const isMounted = ref(false);
const isShouldClose = ref(false);
const isDragging = ref(false);
const start = reactive({x: 0, y: 0});
const yPos = ref(0);
const overflowHtml = computed(() =>  isShouldClose.value ? 'scroll' : 'hidden')
const styleCardPos = computed(() => {
  if (isDragging.value && yPos.value < -10) {
    return {transform: `translateY(${yPos.value}px)`, transition: 'transform 0.2s'};
  } else if (isMounted.value && !isShouldClose.value) {
    return {transform: `translateY(0px)`, transition: 'transform 1s'};
  } else if (isMounted.value && isShouldClose.value) {
    return {transform: `translateY(-100%)`, transition: 'transform .5s'};
  } else {
    return {transform: `translateY(-100%)`, transition: 'transform .5s'};
  }
});

function startDrag(e) {
  console.log('start');
  e = e.changedTouches ? e.changedTouches[0] : e;
  isDragging.value = true;
  start.x = e.pageX;
  start.y = e.pageY;
}

function onDrag(e) {
  e = e.changedTouches ? e.changedTouches[0] : e;
  if (isDragging.value) {
    yPos.value = e.pageY - start.y;
  }
}

function stopDrag() {
  if (isDragging.value) {
    isDragging.value = false;
    yPos.value = 0;
  }
}

onMounted(() => {
  setTimeout(() => {
    isMounted.value = true;
  }, 0);
  document.documentElement.style.overflow = 'hidden'
});

onUnmounted(() => {
  document.documentElement.style.overflow = 'auto'
})

watch(yPos, (y) => {
  if(y < -200) {
    isShouldClose.value = true
    setTimeout(() => emit('close'), 500)
    
  }
})
</script>

<style scoped>

</style>
