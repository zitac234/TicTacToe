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
      const getWhichPlayer= (whichPlayer) =>{
            whichPlayer = whichPlayer
      }
      const getAvailableSquares = ()
}