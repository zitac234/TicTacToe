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
      const playe = Pla
}