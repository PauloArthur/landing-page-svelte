<script>
	import logo from '../assets/logo.webp?enhanced&w=190';
	import { createEmptyArrayOfSize } from '$lib/utils';

	let isOpen = false;
	const toggleIsOpen = () => {
		document.getElementsByTagName('body')[0].classList.toggle('overflow-hidden');
		isOpen = !isOpen;
	};
	const MenuLinks = createEmptyArrayOfSize(7);
</script>

<!-- Component: Basic Navbar -->
<header
	class="fixed z-20 w-full shadow-lg bg-neutral-600 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:backdrop-blur-sm lg:after:hidden"
>
	<div
		class="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl lg:px-0 2xl:max-w-[120rem]"
	>
		<nav
			aria-label="main navigation"
			class="flex h-[5.5rem] items-stretch justify-between lg:justify-start font-medium text-slate-700"
		>
			<!-- Brand logo -->
			<a
				aria-label="Demo logo"
				aria-current="page"
				class="flex items-center gap-2 py-3 pr-3 text-lg lg:mr-16 whitespace-nowrap focus:outline-none"
				href="/"
			>
				<enhanced:img src={logo} class="h-24 py-6 object-fit" alt="Demo Logo" />
			</a>
			<!-- Mobile trigger -->
			<button
				class={`relative order-10 block h-10 w-10 self-center lg:hidden ${
					isOpen
						? 'visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45'
						: ''
				}`}
				on:click={toggleIsOpen}
				aria-expanded={isOpen ? 'true' : 'false'}
				aria-label="Toggle navigation"
			>
				<div class="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
					<span
						aria-hidden="true"
						class="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-white transition-all duration-300"
					></span>
					<span
						aria-hidden="true"
						class="absolute block h-0.5 w-6 transform rounded-full bg-white transition duration-300"
					></span>
					<span
						aria-hidden="true"
						class="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-white transition-all duration-300"
					></span>
				</div>
			</button>
			<!-- Navigation links -->
			<ul
				role="menubar"
				aria-label="Select page"
				class={`absolute top-[5.5rem] left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 lg:gap-8 pb-12 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100 ${
					isOpen ? 'visible opacity-100 backdrop-blur-sm !h-screen pt-6' : 'invisible opacity-0'
				}`}
			>
				{#each MenuLinks as _}
					<li role="none" class="flex items-stretch p-4">
						<a
							role="menuitem"
							aria-haspopup="false"
							class="flex items-center text-slate lg:text-white hover:scale-[1.3] hover:cursor-pointer transition-all"
							href="/"
						>
							<span>Menu link</span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>
<!-- End Basic Navbar-->
