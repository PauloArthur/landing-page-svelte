<script>
  const pod = $$props.pod;
</script>

<!-- Component: Basic pod card -->
<div class="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
  <!-- Image -->
  <figure>
    <img src={pod.image} alt="" class="aspect-video w-full" />
  </figure>
  <!-- Body-->
  <div class="p-6 flex align-center">
    <header class="mb-4">
      <h3 class="text-xl font-medium text-slate-700">{pod.title}</h3>
    </header>
    <p>
      {pod.description}
    </p>
    <button class="bg-neutral-700 text-white uppercase p-6">
      More info
    </button>
  </div>
</div>
<!-- End Basic pod card -->
