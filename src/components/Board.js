import React from "react";
import Square from "./Square"

export default function Board() {
    const [turnX, setTurnX] = React.useState(true)
    const [values, setValues] = React.useState(["","","","","","","","",])
    const [winner, setWinner] = React.useState("")
    const [gameOver, setGameOver] = React.useState(false)

    React.useEffect(() => {
        checkResult()
    },[turnX])

    function checkResult() {
        if(values[0] == values[1] && values[1] == values[2]) {
            setWinner(values[0])
            setGameOver(true)
        } else if(values[0] == values[3] && values[3] == values[6]) {
            setWinner(values[0])
            setGameOver(true)
        }else if(values[0] == values[4] && values[4] == values[8]) {
            setWinner(values[0])
            setGameOver(true)

        }else if(values[1] == values[4] && values[4] == values[7]) {
            setWinner(values[1])
            setGameOver(true)

        }else if(values[2] == values[5] && values[5] == values[8]) {
            setWinner(values[2])
            setGameOver(true)

        }else if(values[2] == values[4] && values[4] == values[6]) {
            setWinner(values[2])
            setGameOver(true)

        }else if(values[5] == values[4] && values[4] == values[3]) {
            setWinner(values[5])
            setGameOver(true)

        }else if(values[8] == values[7] && values[7] == values[6]) {
            setWinner(values[8])
            setGameOver(true)
        }
    }

    function resetGame() {
        window.location.reload(false);
    }

    const squares = [<Square setValues={setValues} turnX={turnX} setTurnX={setTurnX} key={0} orderValue={0} />,
    <Square setValues={setValues} turnX={turnX} setTurnX={setTurnX} key={1} orderValue={1} />,
    <Square setValues={setValues} turnX={turnX} setTurnX={setTurnX} key={2} orderValue={2} />,
    <Square setValues={setValues} turnX={turnX} setTurnX={setTurnX} key={3} orderValue={3} />,
    <Square setValues={setValues} turnX={turnX} setTurnX={setTurnX} key={4} orderValue={4} />,
    <Square setValues={setValues} turnX={turnX} setTurnX={setTurnX} key={5} orderValue={5} />,
    <Square setValues={setValues} turnX={turnX} setTurnX={setTurnX} key={6} orderValue={6} />,
    <Square setValues={setValues} turnX={turnX} setTurnX={setTurnX} key={7} orderValue={7} />,
    <Square setValues={setValues} turnX={turnX} setTurnX={setTurnX} key={8} orderValue={8} />]

    let squareElements = squares.map((square) => {
        return square
    })

    return (
        <>
        <h3>{!gameOver ? "Turn" + turnX ? "X" : "Y": ""}</h3>
        <h4>{gameOver ? "Player " + winner + " won!" : ""}</h4>
        <div className="game-board">
            {squareElements}
        </div>
        <button onClick={resetGame}>Reset Game</button>
        </>
    )
}