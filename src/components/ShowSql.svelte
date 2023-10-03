<script>
  //import entities from "../Models/Entities";
  import { entitieStore } from "../Models/EntitieStore";
</script>

<div class="bg-gray-200 p-8 rounded-xl w-fit">
  {#each $entitieStore as entitie}
    <code class="text-zinc-800">
      <p>
        <span class="text-violet-800">CREATE TABLE </span>{entitie.name}
        {"("}
      </p>
      <br />
      {#if entitie.PK.length == 1}
        <p>
          {entitie.PK[0].name}
          <span class="text-sky-800"
            >{entitie.PK[0].data} PRIMARY KEY
            {#if !entitie.atributes.length == 0}
              ,
            {/if}
          </span>
        </p>
      {/if}
      {#if entitie.PK.length > 1}
        {#each entitie.PK as pks}
          <p>{pks.name} <span class="text-sky-800">{pks.data},</span></p>
        {/each}
      {/if}
      {#each entitie.atributes as atr, i}
        <p>{atr.name} <span class="text-sky-800">{atr.data}
            {#if (i != entitie.atributes.length - 1) || entitie.PK.length > 1}
            ,
            {/if}
        </span></p>
      {/each}
      {#if entitie.PK.length > 1}
        <p>
          <span class="text-sky-800">PRIMARY KEY</span> (
          {#each entitie.PK as pks, index}
            <p class="inline-block">
              {pks.name}
              {#if index != entitie.PK.length - 1}, {/if}
            </p>
          {/each}
          )
        </p>
      {/if}
      <br />
      {");"}
      <br />
    </code>
    <br />
  {/each}
</div>
