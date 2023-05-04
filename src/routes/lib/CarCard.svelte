<script lang='ts'>
    import { fade } from 'svelte/transition';
	import type { Car } from "../cars";

    export let car: Car;
</script>

<div transition:fade class="card card-hover">
    <header class="card-header p-0 relative">
        <img class="w-screen aspect-[21/9] rounded-t" src="{car.img}" alt="Image Of {car.name}">
        <span class="chip variant-ghost-success absolute bottom-3 right-3">${car.price}/d</span>
    </header>
    <div class="p-4 space-y-4 text-left">
        <h3>{car.name}</h3>
        <p class="opacity-80">{car.description}</p>
    </div>
    <hr class="opacity-80">
    <footer class="card-footer mt-5">
        <button type="button" class="btn variant-ghost-success">Rent Now!</button>
        <a target="_blank" href="{car.copy}" class="btn variant-ghost-success">Copyright Here</a>
    </footer>
</div>