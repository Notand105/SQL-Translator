<script>
  import entities from "../Models/Entities";
  import Accordion from "./Accordion.svelte";
</script>

<div class="w-72 ml-2 rounded flex flex-col ">
  {#each entities as entitie}
    <Accordion>
      <span slot="head" class="font-semibold"
        >{entitie.name} </span
      >
      <div slot="details">
        {#each entitie.PK as pks }
          <h3 class="underline font-semibold">{pks.name} : {pks.data}</h3> 
        {/each}
        {#each entitie.atributes as atributes}
          <div class="flex gap-2">
            <h4 class="text-md">{atributes.name}:</h4>
            <h4>{atributes.data}</h4>
          </div>
        {/each}
      </div>
    </Accordion>
  {/each}
</div>
