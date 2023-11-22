<script>
  import slide1 from '../assets/swiper_slide_1.webp?enhanced';
  import slide2 from '../assets/swiper_slide_2.webp?enhanced';
  import Carousel from './components/Carousel.svelte';
  import Section from './components/Section.svelte';

  let images = [slide1]

  const loadImages = () => {
    images = [slide1, slide2]
  }
</script>

<!-- Component: Basic Hero Mock -->
<Section sectionClasses="bg-neutral-900 bg-opacity-20" containerClasses="px-0 max-w-[120rem]">
  <Carousel let:item let:key items={images} on:loadSlider={loadImages}>
    <enhanced:img
      alt=""
      src={item}
      sizes="min(1920px, 100vw)"
      class="w-full- max-w-full- max-h-full- m-auto" 
     priority={key === 0} />
  </Carousel>
</Section>
<!-- End Basic Hero Mock-->

<style>
</style>