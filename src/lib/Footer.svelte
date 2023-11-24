<script>
	import { createEmptyArrayOfSize } from '$lib/utils';
	import licenseIcon from '../assets/license_icon.webp';
	import paymentIcon from '../assets/payment_icon.webp?enhanced&w=160';

	const FooterTitleNames = [
		'Section One',
		'Section Two',
		'Section Three',
		'Section Four',
		'Section Five'
	];

	const FooterLinks = createEmptyArrayOfSize(6);

	const PaymentIcons = createEmptyArrayOfSize(9);
</script>

<!-- Component: Basic Footer -->
<footer class="w-full bg-neutral-600">
	<div class="px-6 mx-auto text-white 2xl:max-w-7xl">
		<div
			class="flex flex-col items-center justify-between gap-6 px-6 py-12 border-b-2 border-dotted lg:px-0 md:flex-row border-b-gray-500"
		>
			{#each FooterTitleNames as titleName}
				<div>
					<h4 class="mb-4 text-lg font-bold uppercase">{titleName}</h4>
					<ul>
						{#each FooterLinks as _}
							<li class="mb-3 text-sm text-center md:text-left hover:cursor-pointer hover:scale-[1.1] transition-all hover:font-bold">Footer link</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
		<div
			class="flex flex-col items-center justify-center px-6 py-12 text-white border-b-2 border-dotted lg:px-0 border-b-gray-500"
		>
			<h3 class="mb-8 text-2xl font-bold text-center uppercase">Payment Logos</h3>
			<div class="flex flex-wrap lg:max-w-[50%] gap-8 items-center justify-center">
				{#each PaymentIcons as _}
					<enhanced:img src={paymentIcon} class="hover:scale-[1.2]" alt="" loading="lazy" />
				{/each}
			</div>
		</div>
		<div class="px-6 py-12 border-b-2 border-dotted lg:px-0 border-b-gray-500">
			<div class="flex flex-col items-center justify-between gap-6 lg:flex-row lg:px-20">
				<p class="text-sm">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi dolor, tincidunt id
					mauris non, tristique aliquet magna. Morbi consectetur eu ipsum ut vestibulum. Ut
					tristique lobortis lectus id lacinia. Sed hendrerit dictum purus, vel porttitor sem. Cras
					lacus magna, fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
					nisi dolor, tincidunt id mauris non, tristique aliquet magna. Morbi consectetur eu ipsum
					ut vestibulum. Ut tristique lobortis lectus id lacinia. Sed hendrerit dictum purus, vel
					porttitor sem. Cras lacus magna, fermentum.
				</p>
				<img src={licenseIcon} class="max-h-[73px]" alt="" loading="lazy" />
			</div>
		</div>
		<div class="flex flex-col justify-between gap-4 px-6 py-12 lg:px-0 lg:flex-row">
			<p>Copyright © brand name 2023</p>
			<ul class="flex flex-wrap items-center gap-3 justify-normal">
				{#each FooterLinks as _}
					<li class="pr-3 text-sm border-r-2 border-r-white last:border-r-0 hover:cursor-pointer hover:scale-[1.1] transition-all hover:font-bold">Footer link</li>
				{/each}
			</ul>
		</div>
	</div>
</footer>

<!-- End Basic Footer-->

<style>
	h3::after {
		content: '';
		height: 4px;
		width: 60px;
		display: block;
		background: white;
		margin: 10px auto;
	}
</style>
