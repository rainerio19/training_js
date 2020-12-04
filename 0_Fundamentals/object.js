const prod1 = {};
prod1.nome = "produto 1";
prod1.preco = 899.9;

console.log(prod1);

const prod2 = {
  nome: "produto 2",
  preco: 199.9,
  obg: {
    teste: "testando",
  },
};

//json
// '{ "nome": "produto 2", "preco": 199.90 }'

console.log(prod2);
