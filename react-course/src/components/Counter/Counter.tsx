import { useEffect, useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);
    const [gameStatus, setGameStatus] = useState("ONGOING")

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    useEffect(() => {
        if (count <= -5) {
            setGameStatus("YOU LOSE");
        } if (count >= 5) {
            setGameStatus("USER WINS");
        } else {
            setGameStatus("ONGOING");
        }
    }, [count])

    return (
        <div className="container">
            <div className="row text-white text-center">
                Counter: {count}
                Estatus: {gameStatus}
                <button className="btn btn-success m-2" onClick={handleIncrement}>+1</button>
                <button className="btn btn-danger m-2" onClick={handleDecrement}>-1</button>
            </div>
        </div>

    )
}

export default Counter;