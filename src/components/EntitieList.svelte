<script>
  import entities from "../Models/Entities";
  import Accordion from "./Accordion.svelte";
</script>

<div class="w-72 ml-2 rounded flex flex-col ">
  {#each entities as entitie}
    <Accordion>
      <span slot="head" class="font-semibold"
        >{entitie.name}  <span class="underline text-zinc-800">{entitie.PK}</span></span
      >
      <div slot="details">
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
