<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar, AppRail, AppRailTile, LightSwitch } from '@skeletonlabs/skeleton';
	
	let links = [
      {name: 'Home', url: 'Luxury-Motorsports/', href: "_self"},
      {name: 'Collection', url: 'Luxury-Motorsports/collection', href: "_self"},
	  {name: 'GitHub', url: 'https://github.com/AlexssanderMartins/Luxury-Motorsports', href: "_blank"}
    ];

</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Luxury Autos</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				{#each links as link, index (link)}
					<a
						class="btn btn-sm variant-ghost-surface"
						href="{link.url}"
						target="{link.href}"
						rel="noreferrer"
					>
					{link.name}
				</a>
			  	{/each}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- Page Route Content -->
	<slot/>
</AppShell>
