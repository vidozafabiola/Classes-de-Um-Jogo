// Classe que representa um herói
class Heroi {
    constructor(nome, tipo) {
        this.nome = nome; // Variável: nome do herói
        this.tipo = tipo; // Variável: tipo de herói (mago, guerreiro, monge, ninja)
    }

    // Método atacar: função dentro da classe
    atacar() {
        let ataque = ""; // Variável para definir o ataque de acordo com o tipo

        // Estrutura de decisão para definir o ataque segundo o tipo
        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
        }

        // Exibir mensagem usando interpolação de strings
        console.log(`${this.tipo} atacou usando ${ataque}`);
    }
}

// Array que armazena vários heróis (laço de repetição para percorrer todos)
let herois = [
    new Heroi("Gandalf", "Mago"),
    new Heroi("Conan", "Guerreiro"),
    new Heroi("Li", "Monge"),
    new Heroi("Hanzo", "Ninja")
];

// Percorrer todos os heróis e executar seu ataque
for (let heroi of herois) {
    heroi.atacar();
}
