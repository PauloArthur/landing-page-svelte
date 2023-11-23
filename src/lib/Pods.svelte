<script>
  import podImage1 from '../assets/pod_image_1.webp'
  import podImage2 from '../assets/pod_image_2.webp'
  import podImage3 from '../assets/pod_image_3.webp'
  import PodCard from './components/PodCard.svelte';
  import Section from './components/Section.svelte'
  import Carousel from './components/Carousel.svelte'

  // const mql = window.matchMedia('(max-width: 720px)');
  // $: mobileView = mql.matches;
  $: mobileView = false;

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

  let pods = mobileView ? firstPod : allPods;
</script>

<Section containerClasses="py-16 2xl:max-w-7xl">
  {#if mobileView}
    <Carousel let:item items={pods} carouselName='pods-glider' on:loadSlider={loadPods}>
      <PodCard pod={item}/>
    </Carousel>
  {:else}
    <div class="flex flex-row gap-6">
      {#each pods as pod}
        <PodCard pod={pod}/>
      {/each}
    </div>
  {/if}
</Section>

<style>
</style>