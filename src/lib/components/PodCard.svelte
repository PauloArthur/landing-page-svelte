<script lang="ts">
	export let pod: {
		title: string;
		image: string;
		description: string;
	};
</script>

<!-- Component: Basic pod card -->
<div class="overflow-hidden bg-white shadow-md Card text-slate-500 shadow-slate-200">
	<!-- Image -->
	<figure>
		<enhanced:img src={pod.image} alt="" class="w-full aspect-video" />
	</figure>
	<!-- Body-->
	<div class="flex flex-col p-8 Card-content align-center">
		<header class="pb-4 mb-6 border-b-2 border-dotted border-b-gray-500">
			<h3 class="text-2xl font-bold text-center uppercase">{pod.title}</h3>
		</header>
		<p class="mb-6 text-center">
			{pod.description}
		</p>
		<button class="px-6 py-4 mx-auto font-bold text-white uppercase rounded-lg bg-neutral-700">
			More info
		</button>
	</div>
</div>

<!-- End Basic pod card -->

<style>
	.Card {
		border-bottom-left-radius: 0.25rem;
		border-bottom-right-radius: 0.25rem;
	}
	.Card-content {
		border: 2px solid black;
		border-top: none;
	}
	h3,
	p {
		color: theme('colors.neutral.900');
	}
</style>
