<script setup lang="ts">
  import EmbedSnippet from '@calcom/embed-snippet';
  import { ref, watch } from 'vue';

  if (process.client) {
    const Cal = EmbedSnippet('https://app.cal.com/embed/embed.js');
  }
  onMounted(() => {
    if (process.client) {
      (function (C, A, L) {
        const p = function (a, ar) {
          a.q.push(ar);
        };
        const d = C;
        C.Cal =
          C.Cal ||
          function () {
            const cal = C.Cal;
            const ar = arguments;
            if (!cal.loaded) {
              cal.ns = {};
              cal.q = cal.q || [];
              d.head.appendChild(d.createElement('script')).src = A;
              cal.loaded = true;
            }
            if (ar[0] === L) {
              const api = function () {
                p(api, arguments);
              };
              const namespace = ar[1];
              api.q = api.q || [];
              typeof namespace === 'string'
                ? (cal.ns[namespace] = api) && p(api, ar)
                : p(cal, ar);
              return;
            }
            p(cal, ar);
          };
      })(window.document, 'https://app.cal.com/embed/embed.js', 'init');
      Cal('init', { origin: 'https://cal.com' });

      Cal('inline', {
        elementOrSelector: '#my-cal-inline',
        calLink: 'mc/unvest',
        config: {
          layout: 'month_view'
        }
      });

      Cal('ui', {
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
        layout: 'month_view'
      });
    }
  });
</script>

<template>
  <PitchMain>
    <div
      class="bg-sand-1 flex h-full w-full grid-rows-2 flex-col items-center justify-start lg:justify-center">
      <div
        class="flex h-full w-full flex-col items-center justify-start gap-8 overflow-scroll px-8 pb-20 pt-8 md:px-12 lg:justify-center lg:pt-32">
        <div
          id="my-cal-inline"
          class="h-full w-full overflow-auto" />
      </div>
    </div>
  </PitchMain>
</template>
