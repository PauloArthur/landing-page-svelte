<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  import Section from './Section.svelte';

  const dispatch = createEventDispatcher()

  async function triggerLoad() {
    if (items.length === 1) {
      dispatch('loadSlider');
    }

    if (!Glide) {
      await loadAndMountGlide();
      this && this.click();
    };
  }

  async function loadAndMountGlide () {
    Glide = (await import('@glidejs/glide')).default;
    let glide = new Glide('.hero-glide', {
      gap: 0,
      type: 'carousel',
      focusAt: 'center',
      perView: 1,
      autoplay: false,
      animationDuration: 700,
      classes: {
        activeNav: '[&>*]:bg-slate-700',
      },
    });
  
    glide.mount();
  }

  onMount(() => {
    const timeout = setTimeout(async () => await triggerLoad(), 100);

    return () => clearTimeout(timeout);
  });

  let Glide;
  export let items = [];
</script>

<Section containerClasses="2xl:px-0 2xl:max-w-[120rem]">
  <div class="relative w-full hero-glide">
    <!-- Slides -->
    <div class="overflow-hidden" data-glide-el="track">
      <ul class="relative overflow-hidden p-0 whitespace-no-wrap flex flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform]" >
        {#each items as item}
          <li>
            <slot item={item} />
          </li>
        {/each}
      </ul>
    </div>
    <!-- Controls -->
    <div class="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 " data-glide-el="controls">
      <button on:click={triggerLoad} class="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full lg:w-12 lg:h-12 text-slate-700 border-slate-700 hover:text-slate-900 hover:border-slate-900 focus-visible:outline-none bg-white/20" data-glide-dir="<" aria-label="prev slide">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <title>prev slide</title>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>
      </button>
      <button on:click={triggerLoad} class="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full lg:w-12 lg:h-12 text-slate-700 border-slate-700 hover:text-slate-900 hover:border-slate-900 focus-visible:outline-none bg-white/20" data-glide-dir=">" aria-label="next slide">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <title>next slide</title>
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>
      </button>
    </div>
    <!-- Indicators -->
    <div class="absolute bottom-0 flex items-center justify-center w-full gap-2" data-glide-el="controls[nav]">
      {#each items as _, key}
        <button class="p-4 group" data-glide-dir={`=${key}`} aria-label={`goto slide ${key + 1}`}>
          <span class="block w-2 h-2 transition-colors duration-300 rounded-full ring-1 ring-slate-700 bg-white/20 focus:outline-none" />
        </button>
      {/each}
    </div>
  </div>
</Section>
