// types
// interfaces

// interface IAnimal {
//     nome: string,
//     tipo: 'terrestre' | 'aquatico',
//     domestico: boolean,

    // executarRugido(alturaEmDecibeis: number): void,

// type IAnimal = {
//     nome: string,
//     tipo: 'terrestre' | 'aquatico',
//     executarRugido(alturaEmDecibeis: number): void, 
// }



// interface IFelino extends IAnimal {
//     visaoNoturna: boolean;
// }

// interface ICanino extends IAnimal {
//     porte: 'pequeno' | 'medio' | 'grande';
// }

// const animal: IAnimal = {
//     nome: 'Elefante',
//     tipo: 'terrestre',
    // executarRugido(alturaEmDecibeis) => (`${alturaEmDecibeis}dB`),
// }

// type IDomestico = IFelino | ICanino ;

// const animal: IDomestico = {
//     domestico: true,
//     nome: 'cachorro',
//     porte: 'medio',
//     tipo: 'terrestre',
//     visaoNoturna: true,
// }

// const animal: IAnimal = {
//     nome: 'Elefante',
//     tipo: 'terrestre',
// }

// animal.executarRugido('s');

// const felino: IFelino = {
//     nome: 'Leão',
//     tipo: 'terrestre',
//     visaoNoturna: true,
// }

// tag input

// const input: HTMLInputElement = document.getElementById('input');

// const input = document.getElementById('input') as HTMLInputElement;


// input.addEventListener('input', (event) => {
    // console.log('Digitei!')
    // const i = event.currentTarget as HTMLInputElement;
    // console.log(i.value);
// })

// Generic types

// function adicionaApêndiceALista<T>(array: any[], valor: T) {
//     return array.map(item => item + valor)
// }

// adicionaApêndiceALista([1,2,3],1)

// Condicionais, parametros

// interface IUsuario {
//     id: string,
//     email: string
// }

// interface IAdmin extends IUsuario {
//     cargo: 'gerente' | 'coordenador' | 'supervisor' ;
// }

// function redirecionar(usuario: IUsuario | IAdmin ) {
//     if ('cargo' in usuario){
        // redirecionar para pagina de administração
    // }
    // else {
        // redireciona para area do usuario
//     }
// }

// caracter "?" para variáveis opcionais

// interface IUsuario {
//     id: string,
//     email: string,
//     cargo?: 'funcionario' | 'gerente' | 'coordenador' | 'supervisor';
// }

// function redirecionar(usuario: IUsuario) {
//     if (usuario.cargo) {
//         // redirecionar(usuario.cargo)
//     }
//     else {
//         // redirecionar para a área do usuário
//     }
// }

// criando variáveis com propriedade readonly e private

// interface Cachorro {
//     nome: string;
//     idade: number;
//     parqueFavorito?: string;
// }

// type CachorroSomenteLeitura = {
//     +readonly [K in keyof Cachorro]-?: Cachorro[K];
// }

// class MeuCachorro implements Cachorro {
//     idade;
//     nome;
//     parqueFavorito;

//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }
// }

// const cao = new MeuCachorro ('Apolo', 14);
