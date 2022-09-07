var state = {board: [], currentGame: [], savedGame: []};

function start(){
    addNumbersToGame(1);
    addNumbersToGame(9);
    addNumbersToGame(3);
    addNumbersToGame(8);
    addNumbersToGame(4);
    saveGame();

    addNumbersToGame(6);
    saveGame();
    saveGame();
    console.log(state.currentGame);
    console.log(state.savedGame);
    resetGame();
    console.log(state.currentGame);

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

    if(isNumberInGame(numberToAdd)){
        console.error("O número", numberToAdd , "já está no jogo.");
        return;
    }
    state.currentGame.push(numberToAdd);
}

function removeNumberFromGame(numberToRemove){
    var NewGame = []

    if(numberToRemove < 1 || numberToRemove > 60){
        console.error("Número invalido", numberToRemove);
        return;
    }

    for(var i = 0; i < state.currentGame.length; i++){
        var currentNumber = state.currentGame[i];

        if(currentNumber === numberToRemove){
            continue;
        }

        NewGame.push(currentNumber);
    }
    state.currentGame = NewGame;
}

function isNumberInGame(numberToCheck){
    if(state.currentGame.includes(numberToCheck)) {
        return true;
    }else{return false;}
}

function saveGame(){
    if(!isGameComplete()){
        console.error("O jogo não está completo.");
        return;
    }
    state.savedGame.push(state.currentGame);
}

function isGameComplete(){
    return state.currentGame.length === 6;
}

function resetGame(){
    state.currentGame = [];
}
start();