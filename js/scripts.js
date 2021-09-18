function computerPlay() {
    let armas = ['piedra', 'papel', 'tijeras'];
    return armas[Math.floor(Math.random() * armas.length)];
};


/* Lógica de juego */

function gameRound(playerSelection, computerSelection) {
    let result = "";

    if (playerSelection == 'piedra') {
        if (computerSelection == 'papel') {
            result = 'Perdiste bigote, el papel le gana a la piedra.';
        } else if (computerSelection == 'tijeras') {
            result = 'Ganaste pá, la piedra le gana a la tijera.';
        } else {
            result = 'Es un empate.';
        }
    } else if (playerSelection == 'papel') {
        if (computerSelection == 'tijeras') {
            result = 'Perdiste bigote, el papel le gana a la piedra.'; 
        } else if (computerSelection == 'piedra') {
            result = 'Ganaste pá, papel le gana a la piedra.';
        } else {
            result = 'Es un empate.';
        }
    } else if (playerSelection == 'tijeras') {
        if (computerSelection == 'piedra') {
            result = 'Perdiste bigote, la piedra le gana a las tijeras.';
        } else if (computerSelection == 'papel') {
            result = 'Ganaste pá, las tijeras les ganan al papel.';
        } else {
            result = 'Es un empate.';
        }
    }

    return result;
}