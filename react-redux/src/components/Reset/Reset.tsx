import { useDispatch } from "react-redux";
import { reset } from "../../redux/slice/counterSlice";

const ResetApp = () => {
    const dispatch = useDispatch();

    return (<button className="btn btn-warning btm-md" onClick={() => dispatch(reset())}>Reset App</button>)
}

export default ResetApp;