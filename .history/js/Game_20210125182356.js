const Gameboard = () => {
  const numBoxes = 9;
  let boardArray = [];
  const resetBoard = () => {
    boardArray = [];
    for (let i = 0; i < numBoxes; i++) {
      boardArray.push(0);
    }
  };
  resetBoard();
  return {
    boardArray,
    resetBoard,
  };
};

const Ai = () => {
  const player = Player();
  const makeMove = (board, bestMove) => {
    let remainingSquares = player.getAvailableSquares(board);
    if (remainingSquares.length > 0) {
      const chosenSquare = bestMove.index;
      board[chosenSquare] = player.getSign();
      const square = document.body.querySelector(
        `[data-index="${chosenSquare}"]`
      );
      square.textContent = player.getSign();
    }
  };

  return {
    ...player,
    makeMove,
  };
};

const Player = () => {
  let currentPlayer = 0;
  let name = "";
  const getSign = () => {
    return currentPlayer === 1 ? "X" : "O";
  };
  const setName = (currentPlayer, name) => {
    currentPlayer = currentPlayer;
    name = name;
  };
  const getName = () => {
    return name.toUpperCase();
  };

  const getWhichPlayer = () => {
    return currentPlayer;
  };

  const getAvailableSquares = (board) => {
    let remainingSquares = [];
    for (let i = 0; i < board.length; i++) {
      if (board[i] === 0) {
        remainingSquares.push(i);
      }
    }
    return remainingSquares;
  };

  return {
    getSign,
    setName,
    getName,
    getWhichPlayer,
    getAvailableSquares,
  };
};

const TicTacToe = () => {
  const gameBoard = Gameboard();
  const player1 = Player();
  let player2 = Player();

  let isPlayer1Turn = true;
  let gameOver = false;
  let gameStarted = false;
  let playAgainstCom = false;

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const _displayName = () => {
    const gameCaption = document.querySelector("#game-caption");
    if (!playAgainstCom) {
      if (isPlayer1Turn) {
        gameCaption.textContent = `${player1.getName()}'s turn`;
      } else {
        gameCaption.textContent = `${player2.getName()}'s turn`;
      }
    }
  };

  const _checkWin = () => {
    for (let i = 0; i < winningCombinations.length; i++) {
      let boxValues = [];
      for (let j = 0; j < winningCombinations[i].length; j++) {
        boxValues.push(gameBoard.boardArray[winningCombinations[i][j]]);
      }

      if (
        boxValues.every((curr) => curr === "X") ||
        boxValues.every((curr) => curr === "O")
      ) {
        let winner = "";

        if (boxValues[0] === player1.getSign()) {
          winner = player1.getName();
        } else {
          winner = player2.getName();
        }
        gameOver = true;
        return winner;
      }
    }
  };
  const _checkDraw = () => {
    const gameCaption = document.querySelector("#game-caption");
    if (gameBoard.boardArray.every((x) => x != 0)) {
      gameCaption.textContent = `It's a draw! Click the Restart button to play again.`;
      gameCaption.style.display = "block";
      gameOver = true;
    }
  };
  const _miniMax = (board, player) => {
    let remainingSquares = player.getAvailableSquares(board);
    
    if (_checkWin() === "Human") {
      return { score: -10 };
    } else if (_checkWin() === "AI") {
      return { score: 20 };
    } else if (remainingSquares.length === 0) {
      return { score: 0 };
    }

    let moves = [];

    for (var i = 0; i < remainingSquares.length; i++) {
      var move = {};
      move.index = remainingSquares[i];
      // console.log(remainingSquares[i])
      board[remainingSquares[i]] = player.getSign();

      if (player.getName() == "AI") {
        var result = _miniMax(board, player1);
        move.score = result.score;
      } else {
        var result = _miniMax(board, player2);
        move.score = result.score;
      }

      // board[remainingSquares[i]] = move.index
      board[remainingSquares[i]] = 0;
      moves.push(move);
    }

    var bestMove;
    if (player.getName() === "AI") {
      var bestScore = -10000;
      for (var i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {
      var bestScore = 10000;
      for (var i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }
    return moves[bestMove];
  };

  // Adds player's sign in selected square and updates boardArray
  const _addMove = (target) => {
    let move = null;
    const targetedBox = parseInt(target.dataset.index);

    if (!_playAgainstCom) {
      if (gameBoard.boardArray[targetedBox] === 0 && !_gameOver) {
        if (_isPlayer1Turn) {
          move = player1.getSign();
        } else {
          move = player2.getSign();
        }
        _isPlayer1Turn = !_isPlayer1Turn;
        target.textContent = move;
        gameBoard.boardArray[target.dataset.index] = move;
      }
    } else {
      target.textContent = player1.getSign();
      gameBoard.boardArray[target.dataset.index] = player1.getSign();

      player2.makeMove(
        gameBoard.boardArray,
        _miniMax(gameBoard.boardArray, player2)
      );
    }
    _displayName();
    const winner = _checkWin();
    if (winner != null) {
      const gameCaption = document.querySelector("#game-caption");
      gameCaption.style.display = "block";
      gameCaption.textContent = `${winner} has won! Click the Restart button to play again.`;
    } else {
      _checkDraw();
    }
  };

  // Add event listeners to box elements
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("click", (event) => {
      _addMove(event.target);
    });
  });

  // toggles between start interface and game interface
  const _toggleScreen = (form, grid, gameOverContainer) => {
    _gameStarted = !_gameStarted;
    if (_gameStarted) {
      form.style.display = "none";
      grid.style.display = "flex";
      gameOverContainer.style.display = "block";
    } else {
      form.style.display = "block";
      grid.style.display = "none";
      gameOverContainer.style.display = "none";
    }
  };

  // Randomise which player starts first
  const _randomiseStart = (gameCaption) => {
    const num = Math.random();

    if (num > 0.5) {
      _isPlayer1Turn = false;
      gameCaption.textContent = `${player2.getName()}'s turn`;
    } else {
      gameCaption.textContent = `${player1.getName()}'s turn`;
    }
  };

  // switches Player 2 to AI
  const _playAgainstAi = (() => {
    const aiBtn = document.querySelector("#ai-btn");
    const gameCaption = document.querySelector("#game-caption");
    const introForm = document.querySelector(".intro");
    const grid = document.querySelector(".main-container");
    const gameOverContainer = document.querySelector(".game-over-container");

    aiBtn.addEventListener("click", (e) => {
      _playAgainstCom = true;
      e.preventDefault();

      player2 = Ai();
      player1.setName(1, "Human");
      player2.setName(2, "AI");

      _toggleScreen(introForm, grid, gameOverContainer);
      _setName(player1.getName(), player2.getName());
      gameCaption.textContent = "Randomising players' turns....";
      if (_playAgainstCom) {
        gameCaption.style.display = "none";
      }
      window.setTimeout(_randomiseStart, 1.5 * 1000, gameCaption);
    });
  })();

  const _setName = (name1, name2) => {
    const player1Name = document.querySelector("#player1name");
    const player2Name = document.querySelector("#player2name");

    player1Name.textContent = name1;
    player2Name.textContent = name2;
  };

  // Module for starting the game
  const _startGame = (() => {
    const introForm = document.querySelector(".intro");
    const gameCaption = document.querySelector("#game-caption");
    introForm.addEventListener("submit", (e) => {
      console.log(document.querySelector("#player1-name").value);

      if (document.querySelector("#player1-name").value !== "") {
        player1.setName(1, document.querySelector("#player1-name").value);
      } else {
        player1.setName(1, "Player 1");
      }

      if (document.querySelector("#player2-name").value != "") {
        player2.setName(2, document.querySelector("#player2-name").value);
      } else {
        player2.setName(2, "Player 2");
      }

      // player1.setName(1, document.querySelector("#player1-name").value)
      // player2.setName(2, document.querySelector("#player2-name").value)
      e.preventDefault();

      const grid = document.querySelector(".main-container");
      const gameOverContainer = document.querySelector(".game-over-container");
      _toggleScreen(introForm, grid, gameOverContainer);

      _setName(player1.getName(), player2.getName());

      gameCaption.textContent = "Randomising players' turns....";

      window.setTimeout(_randomiseStart, 1.5 * 1000, gameCaption);
    });
  })();

  const restartGame = (() => {
    const restartBtn = document.querySelector("#restart-btn");
    const introForm = document.querySelector(".intro");
    const grid = document.querySelector(".main-container");
    const gameOverContainer = document.querySelector(".game-over-container");

    restartBtn.addEventListener("click", () => {
      _toggleScreen(introForm, grid, gameOverContainer);
      const boxes = document.querySelectorAll(".box");
      boxes.forEach((box) => {
        box.textContent = "";
      });

      gameBoard.boardArray = [];
      for (var i = 0; i < 9; i++) {
        gameBoard.boardArray.push(0);
      }

      _gameOver = false;
      _isPlayer1Turn = true;
    });
  })();

  return {};
};

const tictactoe = TicTacToe();
