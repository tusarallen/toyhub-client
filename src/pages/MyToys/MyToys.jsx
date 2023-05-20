import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../hook/useTitle";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import MyCard from "./MyCard";
import Swal from "sweetalert2";

const MyToys = () => {
  useTitle("My Toys");
  const [datas, setDatas] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const url = `http://localhost:5000/mytoys?email=${user?.email}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setDatas(data);
        } else {
          // logout and then navigate
          navigate("/mytoys");
        }
      });
  }, [url, navigate]);
  console.log(datas);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/mytoys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your details has been deleted.",
                "success"
              );
              const remaining = datas.filter((data) => data._id !== id);
              setDatas(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="font-bold text-center text-3xl mt-5">My Toys are here</h2>
      <div>
        <h2 className="text-5xl text-center font-bold text-[red] mb-5 my-7">
          My Toys :
          <span className="text-5xl text-center ml-2 font-bold text-[black] mb-5">
             {datas.length}
          </span>
        </h2>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
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
              {datas.map((data) => (
                <MyCard
                  key={data._id}
                  data={data}
                  handleDelete={handleDelete}
                ></MyCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
