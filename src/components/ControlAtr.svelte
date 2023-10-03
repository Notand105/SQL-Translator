<script>
    import {entitieStore} from '../Models/EntitieStore'

    export let entidad
    export let atr

    function eliminar(){
        let aux = $entitieStore[entidad].atributes
        aux.splice(atr,1)
        $entitieStore[entidad].atributes = aux
    }
    function addPrimaryKey(){
        let aux = $entitieStore[entidad].atributes
        let temp = aux.splice(atr,1)
        $entitieStore[entidad].atributes = aux
        $entitieStore[entidad].PK =  [...$entitieStore[entidad].PK, temp[0]]
    }

</script>

<div >
    <button on:click={eliminar}><img class="w-4" src="/delete.svg" alt="eliminar" title="eliminar"></button>
    <button on:click={addPrimaryKey}><img class="w-4" src="/key.svg" alt="clave" title="hacer clave primaria"></button>
</div>