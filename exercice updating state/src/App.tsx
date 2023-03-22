import { useState } from "react";


function App() {
  const[game, setGame] = useState({
    id:1,
    player: {
      name: 'John'
    }
  })

  const[pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom']
  })

  const[cart, setCart] = useState({
    discount: .1,
    items:[
      {id:1, title: 'Product 1', quantity:1},
      {id:2, title: 'Product 2', quantity:2}
    ]
  })

  const handleClick = () =>{
// Update quantity 
setCart({
  ...cart,
  items: cart.items.map(item => item.id === 1 ? {...item, quantity:item.quantity + 1} : item)
})

    // Add a new topping to the pizza toppings array
    // setPizza({
    //   ...pizza,
    //   toppings: [...pizza.toppings, 'Cheese']
    // })

    // Set a new name for the player
    // setGame({
    //   ...game,
    //   player :{
    //     ...game.player,
    //     name: 'Alex'
    //   }
    // })
  }
 
  return (
    <>
    <div>
      <button onClick={handleClick}>Change Name</button>
      {/* <h1>{game.player.name}</h1> */}
    </div>
    </>
  );
}

export default App;
