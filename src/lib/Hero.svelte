<script>
	import slide1 from '../assets/swiper_slide_1_2x.webp?enhanced&w=3840;1920;1240;768;';
	import slide2 from '../assets/swiper_slide_2.webp?enhanced&w=3840;1920;1240;768;';
	import { Section, Carousel } from './components/index';

	let images = [slide1];

	const loadImages = () => {
		images = [slide1, slide2];
	};
</script>

<!-- Component: Basic Hero Carousel -->
<Section sectionClasses="bg-neutral-900- bg-opacity-20 pt-[5.5rem]" containerClasses="!px-0 max-w-[120rem]">
	<Carousel let:item let:key items={images} carouselName="hero-glider" on:loadSlider={loadImages}>
		<enhanced:img
			alt=""
			src={item}
			class="m-auto"
			priority={key === 0}
			sizes="min(1920px, 100w)"
		/>
	</Carousel>
</Section>

<!-- End Basic Hero Carousel-->

<style>
</style>
