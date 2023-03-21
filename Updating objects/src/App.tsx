// import Message from "./components/Message";

import { useState } from "react";

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    // const newDrink = {
    //   ...drink,
    //   price: 6
    // };
    setDrink({
      ...drink,
      price: 6
    });
    console.log(drink);
  };

  return (
    <div>
      <br />
      {/* <Message />
      <Message />
    <Message /> */}
      <button
        className="btn btn-danger justify-content-center form-control"
        onClick={handleClick}
      >
        Click me
      </button>
      <br />
      <br />
      <h1 className="text-center">{drink.price} </h1>
    </div>
  );
}

export default App;
