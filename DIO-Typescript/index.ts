// types
// interfaces

interface IAnimal {
    nome: string,
    tipo: 'terrestre' | 'aquatico',
    executarRugido(alturaEmDecibeis: number): void,

// type IAnimal = {
//     nome: string,
//     tipo: 'terrestre' | 'aquatico',
//     executarRugido(alturaEmDecibeis: number): void, 
// }



interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {

}

// const animal: IAnimal = {
//     nome: 'Elefante',
//     tipo: 'terrestre',
//     executarRugido(alturaEmDecibeis) => (`${alturaEmDecibeis}dB`),
// }

animal.executarRugido('s');

const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
}