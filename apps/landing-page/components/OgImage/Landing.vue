<script lang="ts" setup>
  defineOptions({
    inheritAttrs: false
  });

  defineProps({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  });
</script>

<template>
  <div
    class="ogbg flex h-full w-full flex-col items-start justify-center p-8 text-center">
    <div class="relative">
      <h1 class="mb-4 text-8xl text-white">
        {{ title }}
      </h1>
      <p class="text-left text-5xl leading-tight text-gray-200">
        {{ description }}
      </p>
    </div>
  </div>
</template>
<style scoped>
  .ogbg {
    background-image: url('/images/og.png');
    background-size: cover;
    background-position: center;
  }
</style>
