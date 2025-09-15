
 export interface Game{
 _id:number,
 name:string,
 description:string,
 release:string,
 rating:number,
 img:string,
 genres:string[],
 favorite:boolean
 source:"API"| "DATABASE"
}
type Games=Game[]