<script lang='ts'>

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

	const typeing = () => typeWriter = setInterval(typeChar, 100)

	typeing()
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

		<a href="/collection" class="btn variant-ghost-success">Rent Now!</a>
	</div>
</div>
