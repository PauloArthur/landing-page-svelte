<script>
  import contentImage from '../assets/content_image.webp'
  import Section from './components/Section.svelte'
  const content = {
    title: 'Content Main Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi dolor, tincidunt id mauris non, tristique aliquet magna. Morbi consectetur eu ipsum ut vestibulum. Ut tristique lobortis lectus id lacinia. Sed hendrerit dictum purus, vel porttitor sem. Cras lacus magna, fermentum. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi dolor, tincidunt id mauris non, tristique aliquet magna. Morbi consectetur eu ipsum ut vestibulum. Ut tristique lobortis lectus id lacinia. Sed hendrerit dictum purus, vel porttitor sem. Cras lacus magna, fermentum.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi dolor, tincidunt id mauris non, tristique aliquet magna. Morbi consectetur eu ipsum ut vestibulum. Ut tristique lobortis lectus id lacinia. Sed hendrerit dictum purus, vel porttitor sem. Cras lacus magna, fermentum.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi dolor, tincidunt id mauris non, tristique aliquet magna. Morbi consectetur eu ipsum ut vestibulum. Ut tristique lobortis lectus id lacinia. Sed hendrerit dictum purus, vel porttitor sem. Cras lacus magna, fermentumin pulvinar sed, pellentesque id magna.'.replaceAll('\n', '<br>'),
    image: contentImage,
  }
</script>

<!-- Component: Main Content -->
<Section containerClasses="py-16 2xl:max-w-7xl">
  <h1 class="text-center uppercase text-2xl font-bold mb-8">{content.title}</h1>
  <div class="flex flex-row">
    <div class="lg:mr-16 w-full max-w-[337px]">
      <img src={content.image} alt="" class="rounded border-2 border-black border-solid w-full">
    </div>
    <p class="text-lg">{@html content.text}</p>
  </div>
</Section>
<!-- End Main Content-->

<style>
  h1, p {
    color: theme('colors.neutral.900');
  }
  h1::after {
    content: "";
    height: 4px;
    width: 60px;
    display: block;
    background: black;
    margin: 10px auto;
  }
</style>