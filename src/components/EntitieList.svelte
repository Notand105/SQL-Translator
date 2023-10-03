<script>
  import {entitieStore} from '../Models/EntitieStore.js'
  import Accordion from "./Accordion.svelte";
  import ControlAtr from './ControlAtr.svelte';
  import ControlPk from './ControlPk.svelte';

</script>

<div class="w-72 ml-2 rounded flex flex-col ">
  {#each $entitieStore as entitie, i}
    <Accordion entitie={i}>
      <span slot="head" class="font-semibold"
      >{i + 1}. {entitie.name} 
      </span>
      <div slot="details">
        {#if entitie.PK.length == 0}
        <p class="text-red-800 pb-2">Entidad sin clave primaria</p>
        {/if}
        {#each entitie.PK as pks, j }
        <div class="flex justify-between">
          <h3 class="font-semibold"><span class="underline">{pks.name} : {pks.data}</span></h3> 
          <ControlPk entidad={i} atr={j} />
        </div>
          {/each}
          {#each entitie.atributes as atributes, k}
          <div class="flex gap-2 w-full justify-between">
            <div class="flex gap-1">
              <h4 class="text-md">{atributes.name}:</h4>
              <h4>{atributes.data}</h4>
            </div>
            <ControlAtr entidad={i} atr={k} />
          </div>
        {/each}
    </Accordion>
  {/each}
</div>
