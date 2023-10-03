<script>
  import {entitieStore} from '../Models/EntitieStore.js'
  import Accordion from "./Accordion.svelte";
  
</script>

<div class="w-72 ml-2 rounded flex flex-col ">
  {#each $entitieStore as entitie, i}
    <Accordion entitie={i}>
      <span slot="head" class="font-semibold"
      >{i + 1}. {entitie.name} 
      </span>
      <div slot="details">
        {#each entitie.PK as pks, j }
          <h3 class="font-semibold"><span class="underline">{pks.name} : {pks.data}</span></h3> 
        {/each}
        {#each entitie.atributes as atributes}
          <div class="flex gap-2">
            <h4 class="text-md">{atributes.name}:</h4>
            <h4>{atributes.data}</h4>
          </div>
        {/each}
    </Accordion>
  {/each}
</div>
