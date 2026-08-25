import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/slice/counterSlice";

const Counter = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div className="m-4 rounded border text-center">
            <h1 className="text-warning pt3">Counter App</h1>
            <hr />
            <div className="pb-2">
                <span className="badge bg-secondary fs-1 p-3 mb-3">{count}</span>
                <div>
                    <button onClick={() => dispatch(decrement())}>Decrement</button>
                    <button onClick={() => dispatch(increment())}>Increment</button>
                </div>
            </div>
        </div>
    )
}

export default Counter;