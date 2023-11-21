<script>
  import logo from '../assets/logo.png'
</script>

<!-- Component: Basic Navbar -->
<header class="relative z-20 w-full shadow-lg bg-neutral-600 shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:backdrop-blur-sm lg:after:hidden">
  <div class="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:px-0 2xl:max-w-[120rem]">
    <nav aria-label="main navigation" class="flex h-[5.5rem] items-stretch justify-between lg:justify-start font-medium text-slate-700" role="navigation">
      <!-- Brand logo -->
      <a id="WindUI" aria-label="WindUI logo" aria-current="page" class="flex items-center gap-2 py-3 pr-3 text-lg whitespace-nowrap focus:outline-none" href="javascript:void(0)">
        <img src={logo} class="logo" alt="Demo Logo" />
      </a>
      <!-- Mobile trigger -->
      <button class="relative self-center order-10 visible block w-10 h-10 opacity-100 lg:hidden" aria-expanded="false" aria-label="Toggle navigation">
        <div class="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <span aria-hidden="true" class="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
          <span aria-hidden="true" class="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"></span>
          <span aria-hidden="true" class="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
        </div>
      </button>
      <!-- Navigation links -->
      <ul role="menubar" aria-label="Select page" class="invisible absolute top-0 left-0 z-[-1] h-screen w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-neutral-600 px-8 pb-12 pt-28 font-medium opacity-0 transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100">
        <li role="none" class="flex items-stretch">
          <a role="menuitem" aria-haspopup="false" class="flex items-center gap-2 py-4 text-white transition-colors duration-300 focus:outline-none focus-visible:outline-none lg:px-8" href="javascript:void(0)"> <span>Menu link</span></a>
        </li>
        <li role="none" class="flex items-stretch">
          <a role="menuitem" aria-haspopup="false" class="flex items-center gap-2 py-4 text-white transition-colors duration-300 focus:outline-none focus-visible:outline-none lg:px-8" href="javascript:void(0)"> <span>Menu link</span> </a>
        </li>
        <li role="none" class="flex items-stretch">
          <a role="menuitem" aria-haspopup="false" class="flex items-center gap-2 py-4 text-white transition-colors duration-300 focus:outline-none focus-visible:outline-none lg:px-8" href="javascript:void(0)"> <span>Menu link</span> </a>
        </li>
        <li role="none" class="flex items-stretch">
          <a role="menuitem" aria-haspopup="false" class="flex items-center gap-2 py-4 text-white transition-colors duration-300 focus:outline-none focus-visible:outline-none lg:px-8" href="javascript:void(0)"> <span>Menu link</span> </a>
        </li>
        <li role="none" class="flex items-stretch">
          <a role="menuitem" aria-haspopup="false" class="flex items-center gap-2 py-4 text-white transition-colors duration-300 focus:outline-none focus-visible:outline-none lg:px-8" href="javascript:void(0)"> <span>Menu link</span> </a>
        </li>
        <li role="none" class="flex items-stretch">
          <a role="menuitem" aria-haspopup="false" class="flex items-center gap-2 py-4 text-white transition-colors duration-300 focus:outline-none focus-visible:outline-none lg:px-8" href="javascript:void(0)"> <span>Menu link</span> </a>
        </li>
        <li role="none" class="flex items-stretch">
          <a role="menuitem" aria-haspopup="false" class="flex items-center gap-2 py-4 text-white transition-colors duration-300 focus:outline-none focus-visible:outline-none lg:px-8" href="javascript:void(0)"> <span>Menu link</span> </a>
        </li>
      </ul>
    </nav>
  </div>
</header>
<!-- End Basic Navbar-->

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
  }
</style>