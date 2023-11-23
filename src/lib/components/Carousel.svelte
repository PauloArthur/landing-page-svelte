<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';

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
    let glide = new Glide(`.${carouselName}`, {
      gap: 0,
      type: 'carousel',
      focusAt: 'center',
      perView: 1,
      autoplay: false,
      animationDuration: 700,
      classes: {
        nav: {
          active: 'dot-active',
        }
      },
      ...options,
    });
  
    glide.mount();
  }

  onMount(() => {
    const timeout = setTimeout(async () => await triggerLoad(), 100);

    return () => clearTimeout(timeout);
  });

  $: indicatorClasses = insideDots ? "absolute bottom-0" : "mt-4";

  let Glide;
  export let showIndicators = true;
  export let showNavigation = true;
  export let insideDots = true;
  export let carouselName = '';
  export let options = {};
  export let items = [];
</script>

<div class={`relative w-full ${carouselName}`}>
  <!-- Slides -->
  <div class="overflow-hidden" data-glide-el="track">
    <ul class="relative overflow-hidden p-0 whitespace-no-wrap flex flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform]" >
      {#each items as item, key}
        <li>
          <slot {item} {key} />
        </li>
      {/each}
    </ul>
  </div>
  <!-- Controls -->
  {#if showNavigation}
    <div class="absolute left-0 flex items-center justify-between w-full h-0 px-2 lg:px-4 top-1/2" data-glide-el="controls">
      <button on:click={triggerLoad} class="inline-flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20" data-glide-dir="<" aria-label="prev slide">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" width="80px" height="80px" viewBox="0 0 1024 1024">
          <title>prev slide</title>
          <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"/>
        </svg>
      </button>
      <button on:click={triggerLoad} class="inline-flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20" data-glide-dir=">" aria-label="next slide">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" width="80px" height="80px" viewBox="0 0 1024 1024">
          <title>next slide</title>
          <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"/>
        </svg>
      </button>
    </div>
  {/if}
  <!-- Indicators -->
  {#if showIndicators}
    <div class={`${indicatorClasses} flex items-center justify-center w-full gap-2`} data-glide-el="controls[nav]">
      {#each items as _, key}
        <button class="p-4 group" data-glide-dir={`=${key}`} aria-label={`goto slide ${key + 1}`}>
          <span class="block w-6 h-6 transition-colors duration-300 bg-white rounded-full ring-1 ring-slate-700 focus:outline-none" />
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .dot-active span {
    background-color: theme('colors.slate.500/20') !important;
  }
</style>
