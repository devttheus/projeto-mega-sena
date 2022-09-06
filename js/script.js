var state = {board: [], currentGame: [], savedGame: []};

function start(){

}

function addNumbersToGame(numberToAdd){
    if(numberToAdd < 1 || numberToAdd > 60){
        console.error("Número invalido", numberToAdd);
        return;
    }

    if(state.currentGame.length >= 6){
        console.error("O jogo não aceita mais de 6 números");
        return;
    }
    state.currentGame.push(numberToAdd);
}