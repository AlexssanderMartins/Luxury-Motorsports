<script lang='ts'>
	
	import { onMount } from "svelte"
	import { carList, type Car } from './cars';
	import Card from './lib/CarCard.svelte'

	let phrase = "Welcome to Luxury Autos.";
	let typedChar = "";
	let index = 0; 
	let typeWriter: number | undefined 

	const typeChar = () => {
		if (index < phrase.length) {
			typedChar += phrase[index]
			index += 1;
		} else {
			clearInterval(typeWriter)
		}
	}

	const typeing = () => typeWriter = setInterval(typeChar, 80)

	typeing()

	let randomCars: Car[] = []

	onMount(() => {
		for (let i = 0; i < 3; i++) {
			const randomIndex = Math.floor(Math.random() * carList.length);
			const randomElement = carList[randomIndex];
			randomCars[i] = randomElement;
		}
	});
</script>

<svelte:head>
    <title>Home</title> 
</svelte:head>


<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center">
		<div class="btn btn-sm variant-ghost-surface">
			<h2 class="font-bold">{typedChar}</h2>
		</div>

		<div>We Offer Car Rental's For Extreamly Cheap Prices</div>

		<a href="/collection" class="btn btn-lg variant-ghost-surface">Start Shopping!</a>

		<div class=" p-4 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
			{#each randomCars as car}
				<Card {car} />
			{/each}

		</div>

		<div class="float-left btn varient">
			Copyright Belongs To (Dodge, Nissan, Toyota, Chevrolet, Mclaren, Porsche)
		</div>
	</div>
</div>
