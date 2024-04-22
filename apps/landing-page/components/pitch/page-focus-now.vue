<script setup lang="ts"></script>

<template>
  <PitchMain>
    <div
      class="flex h-full w-full grid-rows-2 flex-col items-center justify-start lg:justify-center">
      <div
        class="flex h-full w-full flex-col items-center justify-start gap-12 overflow-scroll px-8 py-32 pt-12 md:px-12 lg:justify-center">
        <div class="font-display text-center text-3xl">
          Grow initial product offering to encompass more business specific
          features
        </div>
        <div
          class="flex h-fit w-full flex-col items-center justify-center gap-12 pb-32 lg:grid lg:h-full lg:grid-cols-2 lg:px-32">
          <div class="flex h-full w-full flex-col gap-2">
            <div>
              <UBadge
                variant="soft"
                size="lg"
                color="green">
                Done
              </UBadge>
            </div>
            <ULandingCard
              color="primary"
              :ui="{
                container: 'h-0 w-full',
                wrapper: 'h-full w-full flex flex-col '
              }">
              <div
                class="flex h-full w-full flex-col items-start justify-center gap-4 pb-8 pt-4">
                <span class="text-xl"> Send and receive emails</span>
                <span class="text-xl"> Custom Domains </span>
                <span class="text-xl">
                  Add internal comments to conversations
                </span>
                <span class="text-xl">
                  Route email to multiple participants
                </span>
              </div>
            </ULandingCard>
          </div>
          <div class="flex h-full w-full flex-col gap-2">
            <div>
              <UBadge
                variant="soft"
                size="lg"
                color="orange">
                Next
              </UBadge>
            </div>
            <ULandingCard
              color="primary"
              :ui="{
                container: 'h-0 w-full',
                wrapper: 'h-full w-full flex flex-col '
              }">
              <div
                class="flex h-full w-full flex-col items-start justify-center gap-4 pb-8 pt-4">
                <span class="text-xl">
                  "Productivity Tool" like experience
                </span>
                <span class="text-xl">
                  "Spaces" for Convo Statuses, Assignees, Labels
                </span>
                <span class="text-xl"> Additional mail routing options </span>
                <span class="text-xl">
                  More email filtering options(newsletters etc.)
                </span>
              </div>
            </ULandingCard>
          </div>
        </div>
      </div>
    </div>
  </PitchMain>
</template>
