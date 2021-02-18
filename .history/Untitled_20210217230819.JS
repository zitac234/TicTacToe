const Gameboard = () =>{
      const noOfBoxes = 9
      let boardArray = []
      const resetBoard = () => {
            // boardArray = []
            for(let i = 0; i < noOfBoxes; i++){
                  boardArray.push(0)
            }
      }
      resetBoard ()
      return{
            boardArray,
            resetBoard
      }
}

const Player = () => {
      let whichPlayer = 0

      const getSign= () =>{
            return whichPlayer === 1 ? 'X' : 'O'
      }
      const getWhichPlayer= () =>{
           return  whichPlayer
      }
      const getAvailableSquares = (board) =>{
            let remainingSquares = []
            for(let i = 0; i < board.length; i++){
                  if(board[i]===0 )remainingSquares.push(i)
            }
            return remainingSquares
      }
      return {
            getSign, 
            getWhichPlayer,
            getAvailableSquares
      }
}

const Ai = () => {
      const player = Player()
      const makeMove = (board, bestMove) =>{
            let remainingSquares = player.getAvailableSquares(board)
            if (remainingSquares.length>0){
                  const chosenSquare = bestMove.index
                  board[chosenSquare] = player.getSign() //check if need
                  const square = document.querySelector(`[data-index=${chosenSquare}]`)
                  square.textContent = player.getSign()
            }
      }
      return {
            ...player,
            makeMove,
      }
}

TicTacToe = () => {
const gameBoard = Gameboard()
 const player1 = Player()
 let isPlayer1Turn = true;
 let 
}