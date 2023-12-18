<template>
  <div>
    <client-only>
      <Vue3Lottie
      @click="onClick"
        animationLink="animation_mouse.json"
        :height="150"
        :autoPlay="true"
        ref="lottie"
        :loop="true"
        @on-complete="lottie.stop()"
        :width="100" />
    </client-only>
  </div>
</template>

<script setup lang="ts">
const options = reactive({
  minimizable: false,
  playerSize: 'standard',
  backgroundColor: '#fff',
  backgroundStyle: 'color',
  theme: {
    controlsView: 'standard',
    active: 'light',
    light: {
      color: '#3D4852',
      backgroundColor: '#fff',
      opacity: '0.7',
    },
    dark: {
      color: '#fff',
      backgroundColor: '#202020',
      opacity: '0.7',
    },
  },
});

const lottie = ref()

const onClick = () => {
  lottie.value.play()
}
</script>

<style scoped></style>
