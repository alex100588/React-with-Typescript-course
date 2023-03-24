import React, { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types";

const FormWithHookForm = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);
  

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name", {required: true, minLength: 3})}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.name?.type === 'required' && <p className="text-danger">The name field is required </p>}
          {errors.name?.type === 'minLength' && <p className="text-danger">The minium length is 3 </p>}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
           {...register("age")}
            id="age"
            type="number"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default FormWithHookForm;
