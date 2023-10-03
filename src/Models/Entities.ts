import type { entitie } from "../types/entities";

let entities:entitie[] = [
    {
        name:'Persona',
        PK:[
            {
                name:'rut',
                data:'text'
            }
        ]
        ,
        atributes:[
            {
                name:'edad',
                data:'integer'
            },
            {
                name:'sexo',
                data:'text'
            },
            {
                name:'nombre',
                data:'text'
            },
            {
                name:'fecha_nacimiento',
                data:'date'
            }
        ]
    },
    {
        name:'Empleado',
        PK:[
            {
                name:'id',
                data:'integer'
            }
        ],
        atributes:[
            {
                name:'titulo',
                data:'text'
            },
            {
                name:'sueldo',
                data:'integer'
            },
            {
                name:'hora_entrada',
                data:'text'
            },
            {
                name:'hora_salida',
                data:'text'
            }
        ]
    },
    {
        name:'Familiar',
        PK:[
            {
                name:'numero',
                data:'integer'
            },
            {
                name:'refempleado',
                data:'integer'
            }
        ],
        atributes:[
            {
                name:'parentezco',
                data:'text'
            },
            {
                name:'descuento',
                data:'integer'
            }
            
        ]
    }
]

function addEntitie(ent : entitie) : void{
    entities.push(ent)
}


export default 
{
    entities,
    addEntitie
}