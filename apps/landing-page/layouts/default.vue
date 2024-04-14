<script setup lang="ts">
  import 'cal-sans';
  import '@fontsource-variable/inter';

  useHead({
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{ rel: 'icon', href: '/favicon.ico' }],
    htmlAttrs: {
      lang: 'en'
    }
  });

  useSeoMeta({
    ogSiteName: 'UnInbox',
    ogDescription:
      'Modern email for teams and professionals. 100% Open Source.',
    twitterCard: 'summary_large_image'
  });
</script>

<template>
  <div class="h-full w-full font-sans">
    <Header />
    <UMain>
      <slot />
    </UMain>
    <Footer />
    <UNotifications />
  </div>
</template>
