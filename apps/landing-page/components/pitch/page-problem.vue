<script setup lang="ts"></script>

<template>
  <PitchMain>
    <div
      class="flex h-full w-full flex-col items-center justify-start gap-12 py-12 lg:grid lg:grid-cols-1 lg:grid-rows-2 lg:justify-center lg:gap-0 lg:px-32">
      <div
        class="flex h-fit w-full flex-col items-center gap-2 px-4 pb-40 md:px-12 lg:h-full">
        <span class="font-display text-center text-3xl">
          Email is the biggest business communication channel
        </span>
        <div
          class="grid w-full grid-cols-1 grid-rows-3 items-center gap-4 p-8 lg:grid-cols-3 lg:grid-rows-1">
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
                name="i-ph-envelope" />
              <span class="font-display text-center text-2xl">360 Billion</span>
              <span class="text-xl">emails are sent every day</span>
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
                name="i-ph-chart-donut" />
              <span class="font-display text-center text-2xl">92%</span>
              <span class="text-xl">business &lt;&gt; consumer emails</span>
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
                name="i-ph-chart-line-up" />
              <span class="font-display text-center text-2xl">5%</span>
              <span class="text-xl">year-on-year growth</span>
            </div>
          </ULandingCard>
        </div>
      </div>
      <div
        class="flex h-fit w-full flex-col items-center gap-2 px-8 md:px-12 lg:h-full">
        <span class="font-display text-3xl">but its very restrictive</span>
        <div
          class="grid w-full grid-cols-1 grid-rows-3 items-center gap-4 p-4 lg:grid-cols-3 lg:grid-rows-1">
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
                name="i-ph-user-minus" />
              <span class="font-display text-2xl">Inbox per User</span>
              <span class="text-xl">not collaborative</span>
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
                name="i-ph-link-break" />
              <span class="font-display text-center text-2xl"
                >Limited Flexibility</span
              >
              <span class="text-xl">old standards</span>
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
                name="i-ph-megaphone" />
              <span class="font-display text-2xl">Too Much Noise</span>
              <span class="text-xl">miss important emails</span>
            </div>
          </ULandingCard>
        </div>
      </div>
    </div>
  </PitchMain>
</template>
