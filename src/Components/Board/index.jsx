import React, { useState } from "react";
import { Square } from "../Square";
import './index.css'

export const Board = () => {
  const [valueSquare, setValueSquare] = useState({
    square: [null, null, null, null, null, null, null, null, null],
    xIsTheNext: true,
  })

  const handleClick = (i) => {
    const squares = valueSquare.square.slice()
    squares[i] = valueSquare.xIsTheNext ? 'X' : 'O';
    setValueSquare({ 
      square: squares,
      xIsTheNext: !valueSquare.xIsTheNext
    });
    console.log(squares)
  }


  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(valueSquare.square)
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${valueSquare.xIsTheNext ? 'X' : 'O'}`;
  }

  return (
    <main>
      <div> {status} </div>

      <section className='first-line'>
        <div>
          <Square value={valueSquare.square[0]} onClick={() => handleClick(0)} />
        </div>

        <div className='middle'> 
          <Square value={valueSquare.square[1]} onClick={() => handleClick(1)} /> 
        </div>

        <div> 
          <Square value={valueSquare.square[2]} onClick={() => handleClick(2)} /> 
        </div>

      </section>

      <section className='second-line'>
        <div> 
          <Square value={valueSquare.square[3]} onClick={() => handleClick(3)} /> 
        </div>

        <div className='middle'> 
          <Square value={valueSquare.square[4]} onClick={() => handleClick(4)} /> 
        </div>

        <div> 
          <Square value={valueSquare.square[5]} onClick={() => handleClick(5)} /> 
        </div>
      </section>

      <section className='third-line'>
        <div> 
          <Square value={valueSquare.square[6]} onClick={() => handleClick(6)} /> 
        </div>

        <div className='middle'> 
          <Square value={valueSquare.square[7]} onClick={() => handleClick(7)} /> 
        </div>

        <div> 
          <Square value={valueSquare.square[8]} onClick={() => handleClick(8)} /> 
        </div>
      </section>

    </main>
  );
}