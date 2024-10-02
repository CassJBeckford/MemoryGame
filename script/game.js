let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
};

function newGame() {
    game.score = 0;
    game.playerMoves.length = [];
    game.currentGame.length = [];
    showScore();
    addTurn();
};

function addTurn() {
   game.playerMoves = [];
   game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
   showTurns()
};

function showScore() {
    document.getElementById('score').innerText = game.score;
}

function LightsOn(circ){
    document.getElementById(circ).classList.add("light");
    setTimeout(() => {
        document.getElementById(circ).classList.remove("light");
    }, 400);
}

function showTurns() {
    game.turnNumber = 0;
    let turns = setInterval(() => {
    LightsOn(game.currentGame[game.turnNumber]);
    game.turnNumber++;
    if (game.turnNumber >= game.currentGame.length){
        clearInterval(turns)
    }
    }, 800);
}

module.exports = { game, newGame, showScore, addTurn, LightsOn, showTurns };