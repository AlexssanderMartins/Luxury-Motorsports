<script lang='ts'>
    import { onMount } from "svelte"
	import { carList, type Car } from '../cars';
    import Card from '../lib/CarCard.svelte'

	let randomCars: Car[] = []

    onMount(() => {
        for (let i = 0; i < 40; i++) {
            const randomIndex = Math.floor(Math.random() * carList.length);
            const randomElement = carList[randomIndex];
            randomCars[i] = randomElement;
        }
    });
</script>

<svelte:head>
    <title>Collection</title> 
</svelte:head>

<!-- svelte-ignore a11y-invalid-attribute -->
<a href="#" class="z-50 btn variant-ghost-primary absolute bottom-3 right-3">Jump To Top!</a>

<div class="p-4 gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {#each randomCars as car}
		<Card {car} />
	{/each}
</div>