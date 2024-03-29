<script setup lang="ts">
  useSeoMeta({
    title: 'The UnInbox Manifesto',
    description: "It's time to rethink email"
  });
</script>

<template>
  <BalancerProvider>
    <div>
      <div
        class="m-auto mb-16 flex flex-col items-center justify-center gap-8 p-6 container">
        <h1 class="mt-16 text-center text-7xl font-display">
          The UnInbox Manifesto
        </h1>
        <div
          class="max-w-prose flex flex-col items-center gap-2 text-center text-xl text-sand-12 font-normal">
          <WrapBalancer>
            Email is the standard, the de facto, the default</WrapBalancer
          >
          <WrapBalancer
            >A technology to reflect a 2000 year old system</WrapBalancer
          >
          <WrapBalancer
            >An invention modeled on the physical world</WrapBalancer
          >
          <WrapBalancer
            >A time before realizing the power of the internet</WrapBalancer
          >
          <br />
          <WrapBalancer
            >Inboxes are overflowing with anything and everything</WrapBalancer
          >
          <WrapBalancer
            >A chaotic mixture of news, updates and conversations</WrapBalancer
          >
          <WrapBalancer
            >An open door for anyone anywhere to disrupt our flow</WrapBalancer
          >
          <WrapBalancer
            >Where important things are too easily pushed out of
            view</WrapBalancer
          >
          <br />
          <WrapBalancer
            >An inbox gives the world control over your
            communications</WrapBalancer
          >
          <WrapBalancer
            >What you receive should be your own choice</WrapBalancer
          >
          <WrapBalancer
            >When you see it should be a decision made by you</WrapBalancer
          >
          <WrapBalancer
            >How you process it should be however you want</WrapBalancer
          >
          <br />
          <WrapBalancer
            >If we free ourselves from the idea of an inbox</WrapBalancer
          >
          <WrapBalancer
            >Free ourselves from restrictive technology</WrapBalancer
          >
          <WrapBalancer>Free ourselves from an outdated system</WrapBalancer>
          <WrapBalancer>We have conversations without the cons</WrapBalancer>
          <br />
          <WrapBalancer
            >When we <span class="font-display">UnInbox</span> - we are back in
            control
          </WrapBalancer>
        </div>

        <div
          class="grid grid-flow-row mt-16 gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <div
            class="border-gray-600 bg-blue-500/10 hover:border-gray-400 flex flex-col cursor-pointer items-center gap-4 border-2 rounded-md p-8 transition-colors">
            <h3 class="text-2xl font-display">Now?</h3>
            <p class="max-w-prose">
              The first email was sent almost 45 years ago (1979), before the
              invention of the mobile telephone.<br /><br />
              We've seen some advancements in email technology, but very little
              changes in the way we process and use them.<br /><br />
              Emails have become a painpoint for many, and we're not alone in
              thinking that there must be a better way.<br /><br />
              So we're bringing the best minds together, working in the open, to
              build a sustainable and capable system to power our communication.
            </p>
          </div>
          <div
            class="border-gray-600 bg-blue-500/10 hover:border-gray-400 flex flex-col cursor-pointer items-center gap-4 border-2 rounded-md p-8 transition-colors">
            <h3 class="text-2xl font-display">How?</h3>
            <p class="max-w-prose whitespace-pre-line">
              We are a communications platform with a connection to legacy email
              networks - not built on email technology.<br /><br />
              Incoming messages are matched against known templates, striped of
              extra fluff, and presented in a way that makes sense.<br /><br />
              Your conversations are moved to the forefront, everything else
              blends into the background.<br /><br />
              And because email is just a connector, we can expand to other ways
              of communicating with the outside world.
            </p>
          </div>
          <div
            class="border-gray-600 bg-blue-500/10 hover:border-gray-400 flex flex-col cursor-pointer items-center gap-4 border-2 rounded-md p-8 transition-colors">
            <h3 class="text-2xl font-display">Wow?</h3>
            <p class="max-w-prose whitespace-pre-line">
              Your communications should feel intuitive and natural, be calm and
              organized.<br /><br />
              Whether you're working alone, or with a team; our tools and
              features help you focus on the things that matter and help your
              conversations flow freely.<br /><br />
              We're not going for the "WOW" factor. Our goal is simple:<br /><br />
              "This is how email should have been, This makes perfect sense".
            </p>
          </div>
        </div>
      </div>
    </div>
  </BalancerProvider>
</template>
