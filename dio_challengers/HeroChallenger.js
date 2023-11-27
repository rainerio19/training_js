const name = "Rainerio";
let exp = 0; // Colocar valor desejado

let nivel;

if (expHeroi < 1000) {
	nivel = "Ferro";
} else if (expHeroi >= 1001 && expHeroi <= 2000) {
	nivel = "Bronze";
} else if (expHeroi >= 2001 && expHeroi <= 5000) {
	nivel = "Prata";
} else if (expHeroi >= 6001 && expHeroi <= 7000) {
	nivel = "Ouro";
} else if (expHeroi >= 7001 && expHeroi <= 8000) {
	nivel = "Platina";
} else if (expHeroi >= 8001 && expHeroi <= 9000) {
	nivel = "Ascendente";
} else if (expHeroi >= 9001 && expHeroi <= 10000) {
	nivel = "Imortal";
} else {
	nivel = "Radiante";
}

console.log(`O Herói de nome ${name} está no nível de ${nivel}`);
