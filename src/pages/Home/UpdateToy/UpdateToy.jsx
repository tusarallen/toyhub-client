import React from "react";
import Swal from "sweetalert2";
import useTitle from "../../../hook/useTitle";
import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {
  useTitle("Update Toys");
  const toys = useLoaderData();
  console.log(toys);

  const { _id,  name } = toys;

  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const info = {
      price,
      quantity,
      description,
    };
    console.log(info);

    // send data to the server
    fetch(`https://toy-hub-project-server.vercel.app/updatetoys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="font-bold">
      <h2 className="font-bold text-center my-10 text-red-500 text-3xl mt-5">
        Update Toys here
      </h2>
      <h2 className="font-bold text-center my-10 text-red-500 text-3xl mt-5">
        Toys: <span className="text-[black]">{name}</span>
      </h2>
      <form onSubmit={handleUpdateToy}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-11/12 mx-auto mt-5 font-bold">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              className="input input-bordered"
              placeholder="price"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="number"
              name="quantity"
              className="input input-bordered"
              placeholder="quantity"
            />
          </div>
        </div>
        <div className="form-control w-11/12 mx-auto">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            type="number"
            name="description"
            className="input input-bordered h-[80px]"
            placeholder="description"
          />
        </div>
        <div className="form-control mt-6 mb-12 w-11/12 mx-auto">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Add Toy"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
