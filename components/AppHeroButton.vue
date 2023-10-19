<template>
  <button
      @click="buttonClick"
      class="wrap w-[353px] h-[67px] max-sm:w-[266px] max-sm:h-[50px] relative cursor-pointer bg-[radial-gradient(119.98%_176.69%_at_84%_-4.95%,_rgba(170,_214,_255,_0.81)_0%,_rgba(170,_214,_255,_0.81)_0.01%,_#0066fe_100%)]">
      <NuxtImg preload
          format="webp"
          src="/img/btn-texture.webp"
          loading="lazy"
          class="absolute left-0 top-0 w-full object-cover mix-blend-color-burn h-full" />
      <div  class="inner-border absolute inset-1"></div>
      <div :class="['flex justify-center items-center', {'gap-5 max-sm:gap-2': $slots.icon}]">
          <span class="font-rfdewi text-sm font-bold"><slot></slot></span>
          <slot name="icon"></slot>
      </div>
  </button>
</template>

<script setup lang="ts">
/* btn-texture.webp */

const props = defineProps({
  sm: Boolean
})

const emit = defineEmits(['click'])

function buttonClick() {
emit('click')
}

const rb = computed(() => {
  return props.sm ?"10px" : "20px";
});

</script>

<style scoped>
button.wrap {
  --rb: v-bind(rb);
  clip-path: polygon(
      var(--rb) 0,
      100% 0,
      100% calc(100% - var(--rb)),
      calc(100% - var(--rb)) 100%,
      0 100%,
      0 var(--rb)
  );

}
div.inner-border {
  --rb: v-bind(rb);
  --wb: 2px;
  clip-path: polygon(
      0% var(--rb),
      var(--rb) 0%,
      100% 0%,
      100% calc(100% - var(--rb)),
      calc(100% - var(--rb)) 100%,
      0% 100%,
      var(--wb) calc(100% - var(--wb)),
      calc(100% - var(--rb)) calc(100% - var(--wb)),
      calc(100% - var(--wb)) calc(100% - var(--rb)),
      calc(100% - var(--wb)) var(--wb),
      calc(var(--rb)) var(--wb),
      var(--wb) calc(var(--rb)),
      var(--wb) calc(100% - var(--wb)),
      0% 100%
  );
  background-color: #7379ff;
}
</style>
