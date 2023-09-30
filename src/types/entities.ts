export type atribute = {
    name: string,
    data : 'integer' | 'text' | 'date'
} 

export type relation = {
    name:string,
    from : entitie,
    to: entitie,
    atributes: atribute[]
}

export type entitie ={
    name:string,
    PK : atribute[],
    atributes: atribute[]
} 


