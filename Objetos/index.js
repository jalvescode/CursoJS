const nome01 = 'Luiz';
const sobrenome01 = "Mirando"
const idade01 = 25;

const pessoa1 = {
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 25,

    fala() {
        console.log(`${this.nome} tem ${this.idade} anos`);
    },
    incrementaIdade(){
        ++this.idade;
    }
};

pessoa1.fala()
pessoa1.incrementaIdade()

/* function criaPessoa (nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade
    };
} //Função que cria objetos = factory

const pessoa1 = criaPessoa('Luiz','Otavio', 25);
const pessoa2 = criaPessoa('Joaquim','Junior', 25)
console.log(pessoa1.nome, pessoa2.nome) */