<script>
  export let open = false;
	import { slide } from 'svelte/transition';
	const handleClick = () => {
        open = !open
        
    }
</script>

<div class="accordion bg-gray-200 rounded-md">
	<div class="header flex align-center justify-center p-2 rounded-sm">
		<div class="text">
			<slot name="head"></slot>	
		</div>
		
		<button on:click={handleClick} style={!open ?"":  "transform: rotate(135deg);"} class="font-bold text-5xl transition-all " >
            <img src="/plusicon.svg" alt="open" class="w-6"/>
		</button>
	</div>
	
	{#if open}
	<div class="details bg-gray-200 text-slate-800 p-4 rounded-md" transition:slide>
		<slot name="details">
		</slot>
	</div>
	{/if}
</div>

<style>
	div.accordion {
		margin: 1rem 0;
	}
	
	div.header {
		display:flex;
		width:100%;
	}
	
	div.header .text {
		flex: 1;
		margin-right: 5px;
	}
	
</style>
