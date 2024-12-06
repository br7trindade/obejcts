// // Objeto livro
// const livro = {
//     titulo: "O Senhor dos Anéis",
//     autor: "J.R.R. Tolkien",
//     ano: 1954
//   };
  
//   // Acessando e exibindo título e autor usando a notação de ponto
//   console.log("Título do livro:", livro.titulo);
//   console.log("Autor do livro:", livro.autor);
  

// // Objeto carro
// const carro = {
//     marca: "Honda",
//     modelo: "Civic",
//     ano: 2020
//   };
  
//   // Alterando o valor de "ano" e adicionando uma nova propriedade "cor"
//   carro.ano = 2022;
//   carro.cor = "Prata";
  
//   // Exibindo o objeto atualizado
//   console.log("Carro atualizado:", carro);
   

// Objeto pessoa com método de cumprimento
const pessoa = {
    nome: "Carlos",
    idade: 28,
    cumprimento: function() {
      return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
  };
  
  // Executando o método e exibindo o cumprimento
  console.log(pessoa.cumprimento());
  