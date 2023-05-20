import React, { useEffect, useState } from "react";
import useTitle from "../../hook/useTitle";
import Card from "./Card";

const AllToys = () => {
  useTitle("All Toys");
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://toy-hub-project-server.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleSearch = () => {
    fetch(`https://toy-hub-project-server.vercel.app/getToysByText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  };

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="font-bold text-center text-3xl mt-5">All Toys are here</h2>
      <div>
      <div className="search-box bg-slate-400 rounded-md w-[300px] mx-auto p-2 my-4 text-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="p-1 rounded-md"
          />{" "}
          <button className="text-white font-bold ml-2" onClick={handleSearch}>Search</button>
        </div>
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
