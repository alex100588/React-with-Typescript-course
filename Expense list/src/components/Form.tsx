import React from "react";
import { categories } from "../App";

interface Props {}

const Form = () => {
  return (
    <form action="">
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input type="text" id="description" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">Amount</label>
        <input type="text" id="amount" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">Category</label>
        <select name="category" id="" className="form-select">
        {categories.map(category =>{
          return (
            <option key={category} value={category}>{category}</option>
          )
        })}
        </select>
      </div>
      
      <button className="btn btn-primary mb-3">Submit</button>
    </form>
  );
};

export default Form;
