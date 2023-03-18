import { useState } from "react";
interface Props{
  items: string[],
  heading: string,
  onSelectItem: (item: string) => void
}

function ListGroup({items, heading, onSelectItem}: Props) {
  
  // let selectedIndex = 0
  const[selectedIndex, setSelectedIndex] = useState(0)
  

  return (
    <>
      {/* {items.length === 0 ? <p>'no items'</p> : null} */}
      <h1 className="text-center">{heading}</h1>
      {items.length === 0 && <p>'no items'</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={()=>{
              setSelectedIndex(index);
              onSelectItem(item)
            }}
            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
