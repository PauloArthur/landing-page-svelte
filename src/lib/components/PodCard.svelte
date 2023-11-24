<script lang="ts">
	export let pod: {
		title: string;
		image: string;
		description: string;
	};
</script>

<!-- Component: Basic pod card -->
<div class="overflow-hidden bg-white rounded-b shadow-md text-slate-500 shadow-slate-200 group">
	<!-- Image -->
	<figure class="overflow-hidden">
		<enhanced:img src={pod.image} alt="" class="w-full aspect-video group-hover:scale-[1.2] transition-all" loading="lazy" />
	</figure>
	<!-- Body-->
	<div class="flex flex-col p-8 border-2 border-t-0 border-black border-solid align-center text-neutral-900">
		<header class="pb-4 mb-6 border-b-2 border-dotted border-b-gray-500">
			<h3 class="text-2xl font-bold text-center uppercase">{pod.title}</h3>
		</header>
		<p class="mb-6 text-center">
			{pod.description}
		</p>
		<button class="px-6 py-4 mx-auto font-bold text-white uppercase rounded-lg bg-neutral-700 hover:cursor-pointer hover:scale-[1.2] transition-all">
			More info
		</button>
	</div>
</div>

<!-- End Basic pod card -->

<style>
</style>
