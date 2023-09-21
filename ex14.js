/*Implemente um algoritmo que possibilita que você adicione os 5 filmes ou seriados que você mais gostou de assistir. Esse código deve impedir que registros sejam informados em duplicidade.*/

const seriadosEFilmesFavoritos = [];

function adicionarFilmeOuSerie(nome) {
    if (seriadosEFilmesFavoritos.includes(nome)) {
        console.log(`"${nome}" já está na lista de favoritos.`);
    } else {
        seriadosEFilmesFavoritos.push(nome);
        console.log(`"${nome}" foi adicionado à lista de favoritos.`);
    }
}

function listarFilmesESeriesFavoritos() {
    console.log("------------- Filmes e séries favoritos:-------------");
    for (const nome of seriadosEFilmesFavoritos) {
        console.log(`- ${nome}`);
    }
}

adicionarFilmeOuSerie("Série");
adicionarFilmeOuSerie("Filme 2");
adicionarFilmeOuSerie("Filme 2");
adicionarFilmeOuSerie("Filme 3");
adicionarFilmeOuSerie("Série tal");


listarFilmesESeriesFavoritos();
