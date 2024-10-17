import {  useState } from 'react'
import Square from './component/Square'
import confetti from 'canvas-confetti'
import { checkWinner } from './utils/checkWinner'
import { TURNS } from './constants' 
import './App.css'
import { WinnerModalComponent } from './component/WinnerModal'



function App() {
  const initialBoard = Array(9).fill(null)
  const [board, setBoard] = useState(initialBoard)
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null) // null no hay ganador false es empate y true existe el ganador



  const checkEndGame = (newBoard) => {
    return newBoard.every((squareRef) => squareRef !== null )
  }
  const updateBoard = (index) => {
    // no actualizamos si ya tiene algo
    if (board[index] || winner) return 
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const  newTurn = turn === TURNS.X? TURNS.O: TURNS.X
    setTurn(newTurn)
    const newwinner = checkWinner(newBoard)

    if(newwinner) {
      setWinner(newwinner)
      confetti()
    } else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }

const resetGame = () => {
  setBoard(initialBoard)
  setWinner(null)
  setTurn(TURNS.X)
}
  return (
    <>
      <main className='board'>
        <h1> Tic Tac Toe </h1>
        <button onClick={resetGame}>Reset del juego</button>
        <section className='game'>
          {
          board.map((_, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {
                  board[index]
                }
              </Square>
            ) })
          }
        </section>
        <section className='turn'>
          <Square isSelected={turn=== TURNS.X}>
              {TURNS.X}
          </Square>
          <Square isSelected={turn=== TURNS.O}>
              {TURNS.O}
          </Square>
        </section>
       
           <WinnerModalComponent winner={winner} resetGame={resetGame}/>
         
      </main>
      

     </>
  )
}

export default App
