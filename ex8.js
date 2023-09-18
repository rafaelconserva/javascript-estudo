function imprimirFavorita(cores, corFavorita) {
    cores.sort();

    cores.forEach(function (cor) {
        console.log(cor);
    });
    console.log("-> Cor favorita:", corFavorita);
}

var cores = ["Preto", "Rosa", "Azul", "Verde", "Vermelho", "Amarelo", "Branco"];

var corFavorita = "Verde";

imprimirFavorita(cores, corFavorita);

