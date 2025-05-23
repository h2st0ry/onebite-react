import "./App.css";
import Viewer from "./component/Viewer";
import Controller2 from "./component/Controller2";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller2 onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
