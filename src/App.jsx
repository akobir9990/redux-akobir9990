import { useDispatch, useSelector } from "react-redux";
import { decrement, incremet, getAmount } from "./features/CartSlice";

function App() {
  const dispatch = useDispatch();
  const { amount, isCalled } = useSelector((state) => state.cart);

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{amount}</span>
      <button onClick={() => dispatch(incremet())}>+</button>
      <button onClick={() => dispatch(getAmount())}>getAmount</button>
      {isCalled ? <h1>{amount}</h1> : <p>korging kesa boooos knopkaniii</p>}
    </div>
  );
}

export default App;
