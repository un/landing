<script setup lang="ts"></script>

<template>
  <PitchMain>
    <div
      class="flex h-full w-full grid-rows-2 flex-col items-center justify-start lg:justify-center">
      <div
        class="mt-32 flex h-full w-full flex-col items-center justify-start gap-12 overflow-scroll px-8 py-32 pt-12 md:px-12 lg:justify-center">
        <div class="font-display text-3xl">Build differentiators</div>
        <div
          class="flex h-fit w-full flex-col items-center justify-center gap-4 px-8 pb-32 lg:grid lg:h-full lg:grid-cols-2">
          <div
            class="flex h-full w-full flex-col items-start gap-2 lg:items-end">
            <div>
              <UBadge
                variant="soft"
                size="lg"
                color="green">
                What
              </UBadge>
            </div>
            <ULandingCard
              color="primary"
              :ui="{
                container: 'h-0 w-full',
                wrapper: 'h-full w-full flex flex-col '
              }">
              <div
                class="flex h-full w-full flex-col items-start justify-center gap-4 pb-8 pt-4 lg:items-end">
                <span class="text-xl"> Routing rules & Automations</span>
                <span class="text-xl"> API / SDK </span>
                <span class="text-xl"> Integrations </span>
                <span class="text-xl"> SOC2, HIPAA, ISO </span>
              </div>
            </ULandingCard>
          </div>
          <div class="flex h-full w-full flex-col gap-2">
            <div>
              <UBadge
                variant="soft"
                size="lg"
                color="orange">
                Unlocks
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
                  Workflows (round-robin, keyword, SLA)</span
                >
                <span class="text-xl">
                  Send transactional/marketing emails
                </span>
                <span class="text-xl">
                  Send inbound emails to app/webhook
                </span>
                <span class="text-xl"> Compliance </span>
              </div>
            </ULandingCard>
          </div>
        </div>
      </div>
    </div>
  </PitchMain>
</template>
