import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  // let items = ["New York", "San Francisco", "Tokio", "Romania", "Italia"];
  // let names = ['Alex', 'Simsonica', 'Adi']
  // const handleSelecteItem = (item: string)=> console.log(item);

  return (
    <>
      <h1>
        {/* <ListGroup  items = {items} heading = 'Cities' onSelectItem={handleSelecteItem} /> */}
        {/* <ListGroup  items = {names} heading = {items[0]}/> */}
        <Alert>
          <span>Hello</span> 
          </Alert>
      </h1>
    </>
  );
}

export default App;
