import "./App.css";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { increment, decrement } from "./redux/slices/counter";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  console.log(count);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Count is {count}</h1>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </header>
      </div>
    </>
  );
}

export default App;
