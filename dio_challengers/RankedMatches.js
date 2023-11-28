const name = "Rainerio";
let victorys = 10; // Colocar valor desejado
let defeats = 5; // Colocar valor desejado

function RankedMatches(victorys, defeats){
  const balance = (victorys - defeats)

  return balance
}

if (victorys <= 10) {
	nivel = "Ferro";
} else if (victorys >= 11 && victorys <= 20) {
	nivel = "Bronze";
} else if (victorys >= 21 && victorys <= 50) {
	nivel = "Prata";
} else if (victorys >= 51 && victorys <= 80) {
	nivel = "Ouro";
} else if (victorys >= 81 && victorys <= 90) {
	nivel = "Diamante";
} else if (victorys >= 8001 && victorys <= 9000) {
	nivel = "Ascendente";
} else if (victorys >= 91 && victorys <= 100) {
	nivel = "Lendário";
} else {
	nivel = "Imortal";
}

let saldoVitorias = RankedMatches(victorys, defeats)

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
