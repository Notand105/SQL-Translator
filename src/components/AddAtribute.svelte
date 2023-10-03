<script lang="ts">
  import type {atribute} from '../types/entities'
  import { entitieStore } from "../Models/EntitieStore";
  import {slide} from 'svelte/transition'
  let showForm = false
  export let entitie : number

  let atribute:atribute = {
    name:'',
    data:'integer'
  } 

  function handleSubmit(e:any){
    e.preventDefault()
    $entitieStore[entitie].atributes = [ ...$entitieStore[entitie].atributes, atribute ]
    showForm = false
  }

</script>
<div class="bg-red">

    {#if !showForm}
    <button on:click={()=> showForm = true} transition:slide class="w-full text-white bg-orange-600 rounded  py-1 mt-2 text-center">Añadir nuevo atributo</button>
    {/if}
   {#if showForm}
	<form on:submit={handleSubmit} class="flex flex-col gap-2 mt-2 " transition:slide>
        <input bind:value={atribute.name} type="text" placeholder="Nombre atributo" class="rounded py-1 px-2" required >
        <select required class="bg-gray-300 px-2 py-2" bind:value={atribute.data} >
            <option value="integer">integer</option>
            <option value="text">text</option>
            <option value="date">date</option>
        </select>
        <button class="bg-orange-600 text-white px-2 py-2 rounded">Añadir</button>
	</form>
	{/if} 

</div>
