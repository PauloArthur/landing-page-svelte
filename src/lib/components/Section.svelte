<script>
	export let sectionClasses = '';
	export let containerClasses = '';
</script>

<!-- Component: Basic Section -->
<section class={`${sectionClasses ?? ''}`}>
	<div class={`container mx-auto px-6 ${containerClasses ?? ''}`}>
		<slot>
			<p>Default section</p>
		</slot>
	</div>
</section>

<!-- End Basic Section-->

<style>
</style>
