<script lang='ts'>
    import Card from './lib/CarCard.svelte'
</script>

<svelte:head>
    <title>Home</title> 
</svelte:head>


<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center">
		<div class="btn btn-sm variant-ghost-surface">
			<h2 class="font-bold">Welcome to Luxury Autos.</h2>
		</div>

		<div>We Offer Car Rental's For Extreamly Cheap Prices</div>

		<div class="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{#each Array(2) as _, index (index)}
				<Card />
			{/each}
		</div>
	</div>
</div>
