<script setup lang="ts"></script>

<template>
  <PitchMain>
    <div
      class="flex h-full w-full grid-rows-2 flex-col items-center justify-start lg:justify-center">
      <div
        class="flex h-full w-full flex-col items-center justify-start gap-8 p-2 py-4 md:px-12 lg:mt-20">
        <div class="flex flex-col items-center gap-0">
          <span class="font-display text-3xl"> UnInbox </span>
          <span class="text-2xl">
            We have built a 0 dependency standalone email system,
          </span>
          <span class="text-2xl">
            translating legacy emails to our new standards
          </span>
        </div>
        <div
          class="flex w-full flex-col items-center gap-4 p-8 lg:grid lg:grid-cols-3">
          <ULandingCard
            color="primary"
            :ui="{
              container: 'h-0 w-full',
              wrapper: 'h-full w-full flex flex-col justify-center'
            }">
            <div
              class="flex h-full w-full flex-col items-center justify-center gap-4 pb-8 pt-4">
              <UIcon
                class="font-display text-2xl"
                name="i-ph-rectangles-two-bold" />
              <span class="font-display text-center text-3xl">
                Alone or Together
              </span>
              <span class="text-center text-xl">
                UnInbox as the only mail system
              </span>
              <span class="text-center text-xl">
                In tandem with another email provider
              </span>
              <span class="text-center text-xl">1 person or whole team</span>
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
                class="font-display text-2xl"
                name="i-ph-arrows-in-cardinal" />
              <span class="font-display text-center text-3xl">
                Full Control
              </span>
              <span class="text-center text-xl">
                Addresses detached from users or inboxes
              </span>
              <span class="text-center text-xl">
                Configurable inbound mail parsing and routing
              </span>
              <span class="text-center text-xl">
                Limitless data hierarchy and flexibility
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
                class="font-display text-2xl"
                name="i-ph-terminal" />
              <span class="font-display text-center text-3xl"
                >Open & Extensible</span
              >
              <span class="text-center text-xl">Open source (AGPLv3)</span>
              <span class="text-center text-xl"
                >Code written in Typescript</span
              >
              <span class="text-center text-xl"
                >Available as headless platform</span
              >
            </div>
          </ULandingCard>
        </div>
      </div>
    </div>
  </PitchMain>
</template>
