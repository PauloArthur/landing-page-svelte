<script>
  import { onMount } from 'svelte';
  import podImage1 from '../assets/pod_image_1.webp'
  import podImage2 from '../assets/pod_image_2.webp'
  import podImage3 from '../assets/pod_image_3.webp'
  import PodCard from './components/PodCard.svelte';
  import Section from './components/Section.svelte'
  import Carousel from './components/Carousel.svelte'

  const firstPod = [{
    title: 'Pod Main Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi dolor, tincidunt id mauris non, tristique aliquet magna. Morbi consectetur eu ipsum ut vestibulum.',
    image: podImage1,
  }];

  const allPods = [
    ...firstPod,
    {
      title: 'Pod Main Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi dolor, tincidunt id mauris non, tristique aliquet magna. Morbi consectetur eu ipsum ut vestibulum.',
      image: podImage2,
    },
    {
      title: 'Pod Main Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi dolor, tincidunt id mauris non, tristique aliquet magna. Morbi consectetur eu ipsum ut vestibulum.',
      image: podImage3,
    },
  ]
  
  const loadPods = () => {
    pods = allPods;
  }

  const setIsMobile = () => {
    let isMobileAux = window.matchMedia('(max-width: 960px)').matches;
    if (isMobileAux !== isMobileView) {
      isMobileView = isMobileAux;
    }
  }

  onMount(() => {
    setIsMobile();
  });

  let isMobileView = false;
  let pods = isMobileView ? firstPod : allPods;
  $: sliderLoaded = pods.length > 1;
</script>

<svelte:window on:resize={setIsMobile} />

<Section containerClasses="py-16 2xl:max-w-7xl">
  {#if isMobileView || sliderLoaded}
    <div class={`${isMobileView && sliderLoaded ? 'block' : 'hidden'}`}>
      <Carousel
        let:item
        items={pods}
        insideDots={false}
        showNavigation={false}
        options={{ gap: 6 }}
        on:loadSlider={loadPods}
        carouselName='pods-glider'
      >
        <PodCard pod={item}/>
      </Carousel>
    </div>
  {/if}
  {#if !isMobileView}
    <div class="flex flex-row gap-6">
      {#each pods as pod}
        <PodCard pod={pod}/>
      {/each}
    </div>
  {/if}
</Section>

<style>
</style>