<script setup lang="ts"></script>

<template>
  <PitchMain>
    <div
      class="flex h-full w-full grid-rows-2 flex-col items-center justify-start lg:justify-center">
      <div
        class="mt-32 flex h-full w-full flex-col items-center justify-start gap-8 overflow-scroll px-8 py-32 pt-12 md:px-12 lg:justify-center">
        <div>
          <UIcon
            class="font-display text-5xl"
            name="i-ph-rocket" />
        </div>
        <NuxtLink
          to="https://www.producthunt.com/posts/uninbox"
          target="_blank">
          <img
            src="/images/ph-dark.svg"
            class="h-16 transition-transform hover:scale-110" />
        </NuxtLink>
        <div
          class="flex w-full flex-col items-center gap-4 p-8 lg:grid lg:grid-cols-4">
          <ULandingCard
            color="primary"
            :ui="{
              container: 'h-0 w-full',
              wrapper: 'h-full w-full flex flex-col justify-center'
            }">
            <div
              class="flex h-full w-full flex-col items-center justify-center gap-4 pb-8 pt-4">
              <UIcon
                class="font-display text-5xl"
                name="i-ph-users-three" />
              <span class="font-display text-5xl">1450</span>
              <span class="text-xl">Users</span>
            </div>
          </ULandingCard>
          <ULandingCard
            color="primary"
            :ui="{
              container: 'h-0 w-full',
              wrapper: 'h-full w-full flex flex-col justify-center'
            }">
            <div
              class="flex h-full w-full flex-col items-center justify-center gap-4 pb-8 pt-4">
              <UIcon
                class="font-display text-5xl"
                name="i-simple-icons-github" />
              <span class="font-display text-5xl">927</span>
              <span class="text-xl">Github Stars</span>
            </div>
          </ULandingCard>
          <ULandingCard
            color="primary"
            :ui="{
              container: 'h-0 w-full',
              wrapper: 'h-full w-full flex flex-col justify-center'
            }">
            <div
              class="flex h-full w-full flex-col items-center justify-center gap-4 pb-8 pt-4">
              <UIcon
                class="font-display text-5xl"
                name="i-ph-envelope" />
              <span class="font-display text-5xl">2000</span>
              <span class="text-xl">Messages handled</span>
            </div>
          </ULandingCard>
          <ULandingCard
            color="primary"
            :ui="{
              container: 'h-0 w-full',
              wrapper: 'h-full w-full flex flex-col justify-center'
            }">
            <div
              class="flex h-full w-full flex-col items-center justify-center gap-4 pb-8 pt-4">
              <UIcon
                class="font-display text-5xl"
                name="i-simple-icons-discord" />
              <span class="font-display text-5xl">400</span>
              <span class="text-xl">Community Members</span>
            </div>
          </ULandingCard>
        </div>
        <div class="flex flex-col items-center gap-0 pb-32">
          <span class="text-xl font-medium">Hardlaunch: 12th April 2024</span>
          <span class="text-xl">Softlaunch: 5th April 2024</span>
          <span class="text-sand-11 text-sm"
            >Last Updated: 04/15/24 @ 07:30pm UTC</span
          >
        </div>
      </div>
    </div>
  </PitchMain>
</template>
