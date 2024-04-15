<script setup lang="ts"></script>

<template>
  <PitchMain>
    <div
      class="grid h-full w-full grid-cols-1 grid-rows-1 items-center justify-center">
      <div
        class="flex h-full w-full flex-col items-center justify-center gap-8 px-2 md:px-12 lg:pt-12 xl:px-32">
        <div
          class="grid h-full w-full grid-cols-1 items-center gap-4 p-8 lg:grid-cols-2 lg:grid-rows-2">
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
              <span class="font-display text-center text-2xl">
                Email standards are old and inflexible
              </span>
              <span class="text-center text-xl">
                We dont communicate the way we did 50 years ago
              </span>
              <span class="text-center text-xl"> But email expects us to </span>
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
              <span class="font-display text-center text-2xl">
                Web 2.0 tools not compatible with today’s remote workflows
              </span>
              <span class="text-center text-xl"
                >Remote and digital work require a different approach</span
              >
              <span class="text-center text-xl"
                >We'd rather "slack" than email</span
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
                name="i-ph-chart-line-up" />
              <span class="font-display text-center text-2xl">
                Industry leaders lack innovation
              </span>
              <span class="text-center text-xl"
                >Google and MS have not added anything meaningful</span
              >
              <span class="text-center text-xl"
                >But also killed off features that matter</span
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
                name="i-ph-chart-line-up" />
              <span class="font-display text-center text-2xl">
                Increased privacy concerns and search for alternatives
              </span>
              <span class="text-center text-xl"
                >Privacy goes beyond advertising now</span
              >
              <span class="text-center text-xl"
                >And security accreditation requirements are stricter</span
              >
            </div>
          </ULandingCard>
          <div class="pt-32 lg:p-12" />
        </div>
      </div>
    </div>
  </PitchMain>
</template>
