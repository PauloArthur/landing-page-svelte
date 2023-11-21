<script>
  import podImage1 from '../assets/pod_image_1.jpg'
  import podImage2 from '../assets/pod_image_2.jpg'
  import podImage3 from '../assets/pod_image_3.jpg'
  import PodCard from './components/PodCard.svelte';
  import Section from './components/Section.svelte'
  const pods = [
    {
      title: 'Pod Main Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi dolor, tincidunt id mauris non, tristique aliquet magna. Morbi consectetur eu ipsum ut vestibulum.',
      image: podImage1,
    },
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
</script>

<Section containerClasses="py-16 2xl:max-w-7xl">
  <div class="flex flex-row">
    {#each pods as pod}
      <PodCard pod={pod}/>
    {/each}
  </div>
</Section>

<style>
</style>