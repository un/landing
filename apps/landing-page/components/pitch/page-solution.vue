<script setup lang="ts"></script>

<template>
  <PitchMain>
    <div
      class="flex h-full w-full grid-rows-2 flex-col items-center justify-start lg:justify-center">
      <div
        class="mt-32 flex h-full w-full flex-col items-center justify-start gap-8 overflow-scroll px-8 py-32 pt-12 md:px-12 lg:justify-center">
        <span class="font-display text-3xl"> Rethinking Email </span>
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
                class="font-display text-3xl"
                name="i-ph-users-three" />
              <span class="font-display text-center text-2xl"
                >Collaborative</span
              >
              <span class="text-center text-xl">Conversational threads</span>
              <span class="text-center text-xl"
                >Assignees, collaborators, watchers</span
              >
              <span class="text-center text-xl"
                >Route inbound to one, or many</span
              >
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
                name="i-ph-line-segments" />
              <span class="font-display text-center text-2xl"
                >Untethered Standards</span
              >
              <span class="text-center text-xl">Chat based experience</span>
              <span class="text-center text-xl"
                >Full control for in/out routing</span
              >
              <span class="text-center text-xl"
                >Connection to email standards</span
              >
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
                name="i-ph-chat-centered-dots" />
              <span class="font-display text-center text-2xl"
                >Focus on conversations</span
              >
              <span class="text-center text-xl">Filter noise elsewhere</span>
              <span class="text-center text-xl"
                >Extract context from emails</span
              >
              <span class="text-center text-xl">Automations and workflows</span>
            </div>
          </ULandingCard>
        </div>
        <div class="flex flex-col items-center gap-0">
          <span class="text-2xl"
            >An open source email platform and client;</span
          >
          <span class="text-2xl"
            >built for collaboration, automatability and expansion</span
          >
        </div>
      </div>
    </div>
  </PitchMain>
</template>
