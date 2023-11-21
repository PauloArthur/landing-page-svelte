<svelte:head>
  <script bind:this={script} src={url}></script>
</svelte:head>

<script>
  import { onMount, createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let url;
  export let libraryDetectionObject;
  let script;

  onMount(async () => {
    if (
      libraryDetectionObject &&
      window &&
      typeof window[libraryDetectionObject] !== "undefined"
    ) {
      return dispatch("loaded");
    }

    script.addEventListener('load', () => {
      dispatch('loaded');
    })

    script.addEventListener('error', (event) => {
      console.error("something went wrong", event);
      dispatch('error');
    });
  });
</script>