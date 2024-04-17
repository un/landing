<script setup lang="ts">
  definePageMeta({
    layout: 'pitch'
  });
  useSeoMeta({
    title: 'UnInbox',
    ogSiteName: 'UnInbox',
    ogDescription: 'Open source: Modern email for teams and professionals',
    twitterCard: 'summary_large_image'
  });

  defineOgImageComponent('Landing', {
    title: 'UnInbox',
    description: 'Open source: Modern email for teams and professionals'
  });
</script>

<template>
  <div class="bg-sand-1 flex h-full w-full flex-col items-center gap-4 p-8">
    <div class="flex flex-col items-center gap-2">
      <span class="font-display text-7xl">UnInbox</span>
      <div class="flex flex-col items-center">
        <span class="text-4xl">Modern Email</span>
        <span class="text-lg">for Teams & Professionals</span>
      </div>
      <UButton
        class="mt-12"
        color="black"
        icon="i-ph-play"
        size="xl"
        to="https://www.youtube.com/watch?v=hVeGNz7G4NI"
        target="_blank">
        Watch the video
      </UButton>
    </div>
  </div>
</template>

<style scoped></style>
