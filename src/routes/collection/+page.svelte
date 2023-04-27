<script lang='ts'>
    import Card from '../lib/CarCard.svelte'
</script>

<svelte:head>
    <title>Collection</title> 
</svelte:head>

<div class="p-4 gap-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

    {#each Array(25) as _, index (index)}
        <Card />
    {/each}

</div>