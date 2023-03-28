import React from "react";
interface Props {}

const Form = () => {
  return (
    <form action="">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Description</label>
        <input type="text" id="name" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">Amount</label>
        <input type="text" id="name" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">Category</label>
        <input type="text" id="name" className="form-control form-select" />
      </div>
      
      <button className="btn btn-primary mb-3">Submit</button>
    </form>
  );
};

export default Form;
