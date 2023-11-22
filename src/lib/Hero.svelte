<script>
  import slide1 from '../assets/swiper_slide_1.webp';
  import slide2 from '../assets/swiper_slide_2.webp';
  import Carousel from './components/Carousel.svelte';
  import Section from './components/Section.svelte';

  let images = [slide1]

  const loadImages = () => {
    images = [slide1, slide2]
  }
</script>

<!-- Component: Basic Hero Mock -->
<Section containerClasses="px-0 2xl:max-w-[120rem]">
  <Carousel let:item items={images} on:loadSlider={loadImages}>
    <img alt="" src={item} class="w-full max-w-full max-h-full m-auto" />
  </Carousel>
</Section>
<!-- End Basic Hero Mock-->

<style>
</style>