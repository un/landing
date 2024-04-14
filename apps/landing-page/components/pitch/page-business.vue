<script setup lang="ts"></script>

<template>
  <PitchMain>
    <div
      class="flex h-full w-full grid-rows-2 flex-col items-center justify-start lg:justify-center">
      <div
        class="mt-32 flex h-full w-full flex-col items-center justify-start gap-8 overflow-scroll px-8 py-32 pt-12 md:px-12 lg:justify-center">
        <span class="font-display pt-12 text-3xl"> COSS </span>
        <span class="text-sand-11">
          Commercial Open Source Software / Open Core</span
        >
        <div
          class="grid h-full w-full grid-cols-1 items-center gap-4 p-8 pb-24 lg:grid-cols-2 lg:grid-rows-2">
          <ULandingCard
            color="primary"
            :ui="{
              container: 'h-0 w-full',
              wrapper: 'h-full w-full flex flex-col justify-center'
            }">
            <div
              class="flex h-full w-full flex-col items-center justify-center gap-4 pb-8 pt-4">
              <UIcon
                class="font-display text-3xl"
                name="i-ph-check" />
              <span class="font-display text-center text-2xl">
                Build open, grow the user base,
              </span>
              <span class="font-display text-center text-2xl">
                add enterprise features
              </span>
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
                class="font-display text-3xl"
                name="i-ph-currency-dollar" />
              <span class="font-display text-center text-2xl">
                Freemium tier and charge per seat
              </span>
              <span class="font-display text-center text-2xl">
                for advanced features
              </span>
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
                class="font-display text-3xl"
                name="i-ph-floppy-disk-back" />
              <span class="font-display text-center text-2xl">
                Fully self-hostable with
              </span>
              <span class="font-display text-center text-2xl">
                0 external dependencies
              </span>
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
                class="font-display text-3xl"
                name="i-ph-credit-card" />
              <span class="font-display text-center text-2xl">
                Enterprise features require subscription
              </span>
              <span class="font-display text-center text-2xl">
                for self-hosting
              </span>
            </div>
          </ULandingCard>
          <span class="pb-32"> </span>
        </div>
      </div>
    </div>
  </PitchMain>
</template>
