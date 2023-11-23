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

<!-- Component: Basic Hero Carousel -->
<Section sectionClasses="bg-neutral-900 bg-opacity-20" containerClasses="!px-0 max-w-[120rem]">
  <Carousel let:item let:key items={images} carouselName='hero-glider' on:loadSlider={loadImages}>
    <img
      alt=""
      src={item}
      class="m-auto" 
      priority={key === 0}
      sizes="(min-width:1240px) 100vw, (min-width:1080px) 640px, (min-width:768px) 400px" />
  </Carousel>
</Section>
<!-- End Basic Hero Carousel-->

<style>
</style>