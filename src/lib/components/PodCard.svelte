<script lang="ts">
  export let pod: {
    title: string;
    image: string;
    description: string;
  };
</script>

<!-- Component: Basic pod card -->
<div class="Card overflow-hidden bg-white shadow-md text-slate-500 shadow-slate-200">
  <!-- Image -->
  <figure>
    <img src={pod.image} alt="" class="aspect-video w-full" />
  </figure>
  <!-- Body-->
  <div class="Card-content p-8 flex flex-col align-center">
    <header class="mb-6 border-b-2 border-b-gray-500 border-dotted pb-4">
      <h3 class="text-center uppercase text-2xl font-bold">{pod.title}</h3>
    </header>
    <p class="mb-6 text-center">
      {pod.description}
    </p>
    <button class="bg-neutral-700 text-white uppercase py-4 px-6 font-bold mx-auto rounded-lg">
      More info
    </button>
  </div>
</div>
<!-- End Basic pod card -->

<style>
  .Card {
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: .25rem;
  }
  .Card-content {
    border: 2px solid black;
    border-top: none;
  }
  h3, p {
    color: theme('colors.neutral.900');
  }
</style>
