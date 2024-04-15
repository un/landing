<script setup lang="ts"></script>

<template>
  <PitchMain>
    <div class="flex h-full w-full flex-col items-center py-8">
      <UCard
        class="invisible flex h-0 max-h-full flex-col items-center justify-center gap-2 lg:visible lg:h-fit">
        <div class="flex max-h-full flex-col items-center justify-center gap-4">
          <img
            src="/images/screen.png?url"
            class="rounded-md object-scale-down shadow-xl ring-1 ring-gray-300 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg dark:ring-gray-700" />

          <span class="text-xl">
            Live version available at
            <NuxtLink
              to="https://uninbox.com"
              :external="true"
              target="_blank">
              <span class="font-display">UnInbox.com</span>
            </NuxtLink>
          </span>
        </div>
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
