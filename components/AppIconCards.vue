<template>
  <div class="w-[60px] h-[60px] relative">
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.6019 0.154325L42.0935 0.230162L59.3581 17.602L59.2823 42.0936L41.9105 59.3582L17.4188 59.2823L0.154268 41.9105L0.230106 17.4189L17.6019 0.154325Z"
        fill="white"
        fill-opacity="0.25" />
      <path
        d="M17.6019 0.154325L42.0935 0.230162L59.3581 17.602L59.2823 42.0936L41.9105 59.3582L17.4188 59.2823L0.154268 41.9105L0.230106 17.4189L17.6019 0.154325Z"
        fill="url(#paint0_radial_9279_24165)"
        fill-opacity="0.2" />
      <defs>
        <radialGradient
          id="paint0_radial_9279_24165"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(20.0708 6.16721) rotate(67.6774) scale(63)">
          <stop stop-color="white" />
          <stop offset="1" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
    <span v-if="num" class="font-semibold  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[24px] leading-none">{{ num }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  num: {
    type: String,
    required: false
  }
})
</script>

<style scoped>
span {
  background-color: rgba(255, 255, 255, 0.46);
  color: transparent;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.26);
  -webkit-background-clip: text;
     -moz-background-clip: text;
          background-clip: text;
}</style>
