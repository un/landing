<script setup lang="ts"></script>

<template>
  <PitchMain>
    <div class="mt-10 flex h-full w-full flex-col items-center">
      <UCard class="hidden h-0 max-h-full lg:block lg:h-fit">
        <img
          src="/images/comp-dark.png?url"
          class="invisible h-0 rounded-md object-scale-down p-8 sm:max-w-screen-sm md:max-w-screen-md lg:invisible lg:max-w-screen-lg dark:h-full dark:lg:visible" />
        <img
          src="/images/comp.png?url"
          class="invisible h-full rounded-md object-scale-down p-8 sm:max-w-screen-sm md:max-w-screen-md lg:visible lg:max-w-screen-lg dark:h-0 dark:lg:invisible" />
      </UCard>
      <UCard class="visible h-fit max-h-full lg:invisible lg:h-0">
        <div class="lala flex flex-col items-center justify-center gap-4">
          <UIcon
            class="text-sand-12 text-6xl"
            name="i-ph-device-rotate" />
          <span class="text-sand-12">Please rotate your device</span>
        </div>
      </UCard>
    </div>
  </PitchMain>
</template>
