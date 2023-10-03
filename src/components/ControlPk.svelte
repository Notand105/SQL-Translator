<script>
    import {entitieStore} from '../Models/EntitieStore'

    export let entidad
    export let atr

    function eliminar(){
        let aux = $entitieStore[entidad].PK
        aux.splice(atr,1)
        $entitieStore[entidad].PK = aux
    }
    function removePrimaryKey(){
        let aux = $entitieStore[entidad].PK
        let temp = aux.splice(atr,1)
        $entitieStore[entidad].PK = aux
        $entitieStore[entidad].atributes =  [...$entitieStore[entidad].atributes, temp[0]]
    }

</script>

<div >
    <button on:click={eliminar}><img class="w-4" src="/delete.svg" alt="eliminar" title="eliminar"></button>
    <button on:click={removePrimaryKey}><img class="w-4" src="/removepk.svg" alt="quitarclave" title="quitar clave primaria"></button>
</div>