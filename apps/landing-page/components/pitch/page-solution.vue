<script setup lang="ts"></script>

<template>
  <PitchMain>
    <div
      class="flex h-full w-full flex-col items-center gap-8 p-4 px-2 md:px-12 lg:pt-12">
      <span class="font-display text-3xl"> Rethinking Email </span>
      <div class="flex flex-col items-center gap-2 px-4">
        <span class="text-center text-2xl">
          A modern communication platform
        </span>
        <span class="text-center text-2xl">
          modeled after productivity and chat tools
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
              class="font-display text-3xl"
              name="i-ph-users-three" />
            <span class="font-display text-center text-2xl">Collaborative</span>
            <span class="text-center text-xl">Conversational threads</span>
            <span class="text-center text-xl">
              External messages & internal comments
            </span>
            <span class="text-center text-xl">
              Assignees, collaborators, watchers
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
              name="i-ph-arrows-merge" />
            <span class="font-display text-center text-2xl">
              Limitless Workflows
            </span>
            <span class="text-center text-xl">
              Statuses, labels & custom fields
            </span>
            <span class="text-center text-xl">
              Conversation in multiple flows
            </span>
            <span class="text-center text-xl">
              Integrations & automations
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
              name="i-ph-line-segments" />
            <span class="font-display text-center text-2xl">
              Untethered Standards
            </span>
            <span class="text-center text-xl">
              Taking the best of modern workflows
            </span>
            <span class="text-center text-xl">
              Full control over handling and transformation
            </span>
            <span class="text-center text-xl">
              Translation to legacy email systems
            </span>
          </div>
        </ULandingCard>
      </div>
    </div>
  </PitchMain>
</template>
