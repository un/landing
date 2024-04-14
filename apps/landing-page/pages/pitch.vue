<script setup lang="ts">
  definePageMeta({
    layout: 'pitch'
  });
  useSeoMeta({
    title:
      'UnInbox - Modern email for teams and professionals. 100% Open Source.',
    ogSiteName: 'UnInbox',
    ogDescription:
      'Modern email for teams and professionals. 100% Open Source.',
    twitterCard: 'summary_large_image'
  });

  defineOgImageComponent('Landing', {
    title: 'UnInbox',
    description: 'Modern email for teams and professionals. 100% Open Source.'
  });

  const items = [
    {
      title: ''
    },
    {
      title: 'Business email is a chaotic experience',
      tagline: 'The Problem'
    },
    {
      title: 'Business communication need have changed',
      tagline: 'What we realized'
    },
    {
      title: 'Modern email for teams & professionals',
      tagline: 'The Solution'
    },
    {
      title: 'Email platform + app',
      tagline: 'The Product'
    },
    {
      title: 'Email platform + app',
      tagline: 'The Product'
    },
    {
      title: 'So Far',
      tagline: 'Traction'
    },
    {
      title: 'Managed + Self-hosted',
      tagline: 'Business Model'
    },
    {
      title: 'Who are the players',
      tagline: 'Competitors'
    },
    {
      title: 'Where we are now',
      tagline: 'Current Focus'
    },
    {
      title: "Where we'll be in 1 year",
      tagline: 'Next Focus'
    },
    {
      title: 'What does the future hold',
      tagline: 'Vision'
    },
    {
      title: 'Who are we',
      tagline: 'Team'
    },
    {
      title: 'Lets chat',
      tagline: 'Contact'
    }
  ];

  const caro = ref(null);

  const currentPage = computed(() => (caro.value ? caro.value.page : 1));
  const totalPages = computed(() => (caro.value ? caro.value.pages : 1));
  const pagesLabel = computed(() => `${currentPage.value}/${totalPages.value}`);
  defineShortcuts({
    arrowleft: {
      handler: () => {
        caro.value.prev();
      }
    },
    arrowright: {
      handler: () => {
        caro.value.next();
      }
    }
  });
</script>

<template>
  <div class="h-full w-full">
    <UCarousel
      v-slot="{ item, index }"
      ref="caro"
      :items="items"
      :ui="{ item: 'basis-full', container: 'h-full lqala', wrapper: 'h-full' }"
      class=""
      arrows>
      <div class="h-full w-full flex-col gap-0 p-0">
        <div
          class="bg-sand-2 absolute top-0 z-10 flex w-full flex-col items-center justify-center gap-0 p-4">
          <span class="text-sand-11 text-lg font-medium leading-none">
            {{ item.tagline }}
          </span>
          <span class="font-display text-sand-12 text-4xl leading-none">
            {{ item.title }}
          </span>
        </div>
        <div class="h-full w-full overflow-hidden">
          <PitchPageTitle v-if="index === 0" />
          <PitchPageProblem v-if="index === 1" />
          <PitchPageRealize v-if="index === 2" />
          <PitchPageSolution v-if="index === 3" />
          <PitchPageProductImage v-if="index === 4" />
          <PitchPageProduct v-if="index === 5" />
          <PitchPageTraction v-if="index === 6" />
          <PitchPageBusiness v-if="index === 7" />
          <PitchPageCompetitors v-if="index === 8" />
          <PitchPageFocusNow v-if="index === 9" />
          <PitchPageFocusNext v-if="index === 10" />
          <PitchPageVision v-if="index === 11" />
          <PitchPageTeam v-if="index === 12" />
          <PitchPageCall v-if="index === 13" />
        </div>
      </div>
    </UCarousel>
    <div
      class="fixed bottom-4 flex w-full flex-row items-center justify-center">
      <div
        class="bg-sand-3 ring-sand-7 flex flex-row gap-4 rounded-full p-2 ring-1">
        <UButton
          square
          size="md"
          color="gray">
          <div class="flex flex-row items-center justify-center gap-0">
            <span class="text-center">{{ currentPage }}</span>
            <span class="text-sand-11 text-center text-xs"
              >/{{ totalPages }}</span
            >
          </div>
        </UButton>

        <UTooltip text="Back to top">
          <UButton
            square
            icon="i-ph-share-network"
            size="md"
            color="gray" />
        </UTooltip>
        <UTooltip text="Video">
          <UButton
            square
            icon="i-ph-play"
            size="md"
            color="gray"
            @click="caro.select(1)" />
        </UTooltip>
        <UTooltip text="Call">
          <UButton
            square
            icon="i-ph-calendar"
            size="md"
            color="gray"
            @click="caro.select(14)" />
        </UTooltip>
        <UTooltip text="Previous">
          <UButton
            square
            icon="i-ph-arrow-left"
            size="md"
            color="gray"
            @click="caro.prev()" />
        </UTooltip>
        <UTooltip text="next">
          <UButton
            square
            icon="i-ph-arrow-right"
            size="md"
            color="gray"
            @click="caro.next()" />
        </UTooltip>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .customGrid {
    display: grid;
    grid-template-rows: 2fr 1fr;
  }
</style>
