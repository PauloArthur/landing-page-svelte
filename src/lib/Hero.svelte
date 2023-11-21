<script>
  import slide1 from '../assets/swiper_slide_1.jpg';
  import slide2 from '../assets/swiper_slide_2.jpg';
  import Carousel from './components/Carousel.svelte';
  import Section from './components/Section.svelte';

  let images = [slide1]

  const load = () => {
    images = [slide1, slide2]
  }
</script>

<!-- Component: Basic Hero Mock -->
<Section containerClasses="2xl:px-0 2xl:max-w-[120rem]">
  <Carousel images={images} on:moveSlide={load}/>
</Section>
<!-- End Basic Hero Mock-->

<style>
</style>