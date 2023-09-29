export type atribute = {
    name: string,
    data : 'integer' | 'string' 
} 

export type relation = {
    name:string,
    from : entitie,
    to: entitie,
    atributes: atribute[]
}

export type entitie ={
    name:string,
    PK : string,
    atributes: atribute[]
} 


