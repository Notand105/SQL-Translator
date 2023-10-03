<script lang="ts">
    import {entitieStore} from '../Models/EntitieStore'    
    import Modal from '../components/AddEntitieModal.svelte' 
    import type {entitie} from '../types/entities'

    let showModal:boolean = false

    let entitie : entitie = {
        name: '',
        PK:[],
        atributes:[]
    }

    function addEntitie(){
        $entitieStore = [...$entitieStore, {...entitie}]
        console.log($entitieStore)

    }

    function handleSubmit(e:any){
        e.preventDefault()
        addEntitie()
        setTimeout(()=>{

            entitie.name = ''
        },100)
    }

</script>
<div>
<button on:click={/*addEntitie*/ ()=>(showModal = true)} class="gap-2 flex cursor-pointer py-2 px-4 bg-gray-200 justify-center w-fit rounded">
    <h4>Añadir nueva entidad</h4>
    <img src="/addicon.svg" alt="add" class="w-4"/>
</button>

<Modal bind:showModal>
	<h2 slot="header">
	</h2>
    <form on:submit={handleSubmit} class="flex flex-col border-t border-b gap-4 pt-4 ">
        <div>
            <p>Nombre entidad</p>
            <input bind:value={entitie.name} class="border-2 outline-8 " required>
        </div>
        <button class="bg-orange-600 w-full px-2 py-1">Agregar</button>
    </form>
</Modal>
</div>