import React, { useEffect, useState } from "react";
import useTitle from "../../hook/useTitle";
import Card from "./Card";

const AllToys = () => {
  useTitle("All Toys");
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  });

  console.log(toys);

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="font-bold text-center text-3xl mt-5">All Toys are here</h2>
      <div>
        <h2 className="text-5xl text-center font-bold text-[red] mb-5 my-3">
          Total Toys: 
          <span className="text-5xl text-center font-bold text-[black] mb-5">
            {toys.length}
          </span>
        </h2>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {toys.map((toy) => (
                <Card key={toy._id} toy={toy}></Card>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
