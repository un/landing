<script setup lang="ts"></script>

<template>
  <PitchMain>
    <div
      class="flex h-full w-full grid-rows-2 flex-col items-center justify-start lg:justify-center">
      <div
        class="mt-32 flex h-full w-full flex-col items-center justify-start gap-8 overflow-scroll px-8 py-32 pt-12 md:px-20 lg:justify-center">
        <div
          class="flex h-fit w-full flex-col items-center justify-center gap-12 px-8 lg:grid lg:grid-cols-3 lg:gap-4">
          <div class="flex h-full w-full flex-col gap-4">
            <img
              class="h-64 w-64 rounded-full"
              src="/images/avatars/omar.jpg" />
            <span class="font-display text-3xl">Omar McAdam</span>
            <span class="text-2xl font-medium">Founder</span>

            <ULandingCard
              color="primary"
              :ui="{
                container: 'h-0 w-full',
                wrapper: 'h-full w-full flex flex-col '
              }">
              <div
                class="flex h-full w-full flex-col items-start justify-start gap-4 pb-8 pt-4">
                <span class="text-xl">Founder of COSS community discord</span>
                <span class="text-xl">Ex-product and team lead @ ClickUp</span>
                <span class="text-xl">
                  First startup at 14, 6 bootstrapped, 1 acqui-hire
                </span>
                <span class="text-xl">25 years in tech</span>
              </div>
            </ULandingCard>
          </div>
          <div class="flex h-full w-full flex-col gap-4">
            <img
              class="h-64 w-64 rounded-full"
              src="/images/avatars/rahul.jpeg" />
            <span class="font-display text-3xl">Rahul Mishra</span>
            <span class="text-2xl font-medium">Developer</span>

            <ULandingCard
              color="primary"
              :ui="{
                container: 'h-0 w-full',
                wrapper: 'h-full w-full flex flex-col '
              }">
              <div
                class="flex h-full w-full flex-col items-start justify-start gap-4 pb-8 pt-4">
                <span class="text-xl">First Hire (April 2024)</span>
                <span class="text-xl">Previous Contributor </span>
                <span class="text-xl"
                  >19 year old computer science student</span
                >
                <span class="text-xl"> Wizard with backend code </span>
              </div>
            </ULandingCard>
          </div>
          <div class="flex h-full w-full flex-col gap-2 pb-32">
            <ULandingCard
              color="primary"
              :ui="{
                container: 'h-0 w-full',
                wrapper: 'h-full w-full flex flex-col '
              }">
              <div
                class="flex h-full w-full flex-col items-start justify-center gap-4 pb-8 pt-4">
                <span class="font-display text-3xl"
                  >+ 23 epic contributors</span
                >
                <div class="grid grid-cols-5 gap-4">
                  <UTooltip text="PeerRich - @calcom">
                    <UAvatar
                      size="3xl"
                      src="https://avatars.githubusercontent.com/u/8019099?s=128&v=4" />
                  </UTooltip>
                  <UTooltip text="skushagra9">
                    <UAvatar
                      size="3xl"
                      src="https://avatars.githubusercontent.com/u/120712705?s=128&v=4" />
                  </UTooltip>
                  <UTooltip text="GinoGits">
                    <UAvatar
                      size="3xl"
                      src="https://avatars.githubusercontent.com/u/98714763?s=128&v=4" />
                  </UTooltip>
                  <UTooltip text="sean-brydon">
                    <UAvatar
                      size="3xl"
                      src="https://avatars.githubusercontent.com/u/55134778?s=128&v=4" />
                  </UTooltip>
                  <UTooltip text="adityadeshlahre">
                    <UAvatar
                      size="3xl"
                      src="https://avatars.githubusercontent.com/u/132184385?s=128&v=4" />
                  </UTooltip>
                  <UTooltip text="cstrnt">
                    <UAvatar
                      size="3xl"
                      src="https://avatars.githubusercontent.com/u/20679094?s=128&v=4" />
                  </UTooltip>
                  <UTooltip text="daallgeier">
                    <UAvatar
                      size="3xl"
                      src="https://avatars.githubusercontent.com/u/9637909?s=128&v=4" />
                  </UTooltip>
                  <UTooltip text="danielroe - @nuxtjs">
                    <UAvatar
                      size="3xl"
                      src="https://avatars.githubusercontent.com/u/28706372?s=128&v=4" />
                  </UTooltip>
                  <UTooltip text="affenity">
                    <UAvatar
                      size="3xl"
                      src="https://avatars.githubusercontent.com/u/29990734?s=128&v=4" />
                  </UTooltip>
                  <UTooltip text="maciej-ka">
                    <UAvatar
                      size="3xl"
                      src="https://avatars.githubusercontent.com/u/5403694?s=128&v=4" />
                  </UTooltip>
                  <UTooltip text="ErrolFernandes">
                    <UAvatar
                      size="3xl"
                      src="https://avatars.githubusercontent.com/u/83249470?s=128&v=4" />
                  </UTooltip>
                  <UTooltip text="WaitWhatJustHappened">
                    <UAvatar
                      size="3xl"
                      src="https://avatars.githubusercontent.com/u/159964485?s=128&v=4" />
                  </UTooltip>
                  <UTooltip text="ezra-en">
                    <UAvatar
                      size="3xl"
                      src="https://avatars.githubusercontent.com/u/7076802?s=128&v=4" />
                  </UTooltip>
                  <UTooltip text="returnkirbo">
                    <UAvatar
                      size="3xl"
                      src="https://avatars.githubusercontent.com/u/107429396?s=128&v=4" />
                  </UTooltip>
                  <UTooltip text="chronark - @unkeyed">
                    <UAvatar
                      size="3xl"
                      src="https://avatars.githubusercontent.com/u/18246773?s=128&v=4" />
                  </UTooltip>
                  <UTooltip text="babblebey - @hearts">
                    <UAvatar
                      size="3xl"
                      src="https://avatars.githubusercontent.com/u/25631971?s=128&v=4" />
                  </UTooltip>
                  <UTooltip text="xMohamd">
                    <UAvatar
                      size="3xl"
                      src="https://avatars.githubusercontent.com/u/10786768?s=128&v=4" />
                  </UTooltip>
                  <UTooltip text="muescha">
                    <UAvatar
                      size="3xl"
                      src="https://avatars.githubusercontent.com/u/184316?s=128&v=4" />
                  </UTooltip>
                  <UTooltip text="iammohan01">
                    <UAvatar
                      size="3xl"
                      src="https://avatars.githubusercontent.com/u/85432311?s=128&v=4" />
                  </UTooltip>
                  <UTooltip text="mooyg">
                    <UAvatar
                      size="3xl"
                      src="https://avatars.githubusercontent.com/u/61348580?s=128&v=4" />
                  </UTooltip>
                  <UTooltip text="mahansky">
                    <UAvatar
                      size="3xl"
                      src="https://avatars.githubusercontent.com/u/1536298?s=128&v=4" />
                  </UTooltip>
                  <UTooltip text="KMKoushik">
                    <UAvatar
                      size="3xl"
                      src="https://avatars.githubusercontent.com/u/24666922?s=128&v=4" />
                  </UTooltip>
                  <UTooltip text="simonorzel26">
                    <UAvatar
                      size="3xl"
                      src="https://avatars.githubusercontent.com/u/60504110?s=128&v=4" />
                  </UTooltip>
                </div>
              </div>
            </ULandingCard>
          </div>
        </div>
      </div>
    </div>
  </PitchMain>
</template>
