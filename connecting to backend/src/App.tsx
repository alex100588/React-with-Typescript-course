import { useEffect, useRef, useState } from "react";
import axios from "axios";
// import ProductList from "./components/ProductList";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        setUsers(resp.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // console.log(users);

  // const [category, setCategory] = useState('')

  // Effect cleanup
  // const connect = () => console.log("Connected");
  // const disconnect = () => console.log("Disconnected");

  // useEffect(() => {
  //   connect();
  //   return () => disconnect();
  // });

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((us) => us.id !== user.id));
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const updatedUser = { ...user, name: user.name + '!'}
    setUsers(users.map(u => u.id === user.id ? updatedUser : u))
  }

  return (
    // <div>
    //   <select name="" id="" className="form-select" onChange={(e)=>setCategory(e.target.value)}>
    //   <option value=""></option>
    //   <option value="clothing">Clothing</option>
    //   <option value="household">Household</option>
    // </select>
    // <ProductList category={category} />
    // </div>
    <>
      {error && <p className="text-danger">{error}</p>}
      {loading && <div className="spinner-border"></div>}
      <ul className="list-group p-3">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button className="btn btn-outline-secondary me-2" onClick={()=>updateUser(user)}>Update</button>
              <button
                onClick={() => deleteUser(user)}
                className="btn btn-outline-danger "
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
