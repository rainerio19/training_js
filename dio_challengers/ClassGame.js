class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  ataque() {
    let attack;
    if (this.type == "mago") {
      attack = "magia";
    } else if (this.type == "guerreiro") {
      attack = "espada";
    } else if (this.type == "ninja") {
      attack = "shuriken";
    } else if (this.type == "monge") {
      attack = "artes marciais";
    } else {
      attack = "ataque não encontrado";
    }
    console.log(`O ${this.type} ${this.name} atacou usando ${attack}`);
  }
}

let heroi1 = new Hero("Rainerio", 20, "guerreiro");
heroi1.ataque();
