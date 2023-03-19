import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  // let items = ["New York", "San Francisco", "Tokio", "Romania", "Italia"];
  // let names = ['Alex', 'Simsonica', 'Adi']
  // const handleSelecteItem = (item: string)=> console.log(item);
  // const clicked = ()=> console.log('Butonul meu');
  const[alertVisible, setAlertVisibility] = useState(false)

  return (
    <>
      <h1>
        {/* <ListGroup  items = {items} heading = 'Cities' onSelectItem={handleSelecteItem} /> */}
        {/* <ListGroup  items = {names} heading = {items[0]}/> */}
        {/* <Alert>
          <span>Hello</span> 
          </Alert> */}
      </h1>
      <div>
        {alertVisible  && <Alert onClose={()=>setAlertVisibility(false)}>My alert</Alert>}
          <Button  onClick={()=>setAlertVisibility(true)}>My button</Button>
      </div>
    </>
  );
}

export default App;
