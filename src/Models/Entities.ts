import type { entitie } from "../types/entities";

const entities:entitie[] = [
    {
        name:'Persona',
        PK:'rut',
        atributes:[
            {
                name:'edad',
                data:'integer'
            },
            {
                name:'sexo',
                data:'string'
            },
            {
                name:'nombre',
                data:'string'
            }
        ]
    },
    {
        name:'Empleado',
        PK:'id',
        atributes:[
            {
                name:'titulo',
                data:'string'
            },
            {
                name:'sueldo',
                data:'integer'
            },
            {
                name:'hora_entrada',
                data:'string'
            },
            {
                name:'hora_salida',
                data:'string'
            }
        ]
    }
]

export default entities
