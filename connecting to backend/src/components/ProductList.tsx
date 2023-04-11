import React, { useEffect, useState } from "react";

interface Props{
  category: string
}
const ProductList = ({category} : Props) => {
  const [products, setProducts] = useState<string[]>()


  useEffect(()=>{
    console.log('Fetching products', category)
    setProducts(['Clothing', 'Household'])
  }, [category])

  return <div className="text-center m-4">{category}</div>;
};

export default ProductList;
