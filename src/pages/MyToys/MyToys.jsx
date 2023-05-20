import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../hook/useTitle";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import MyCard from "./MyCard";

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

  //   const handleDelete = (id) => {
  //     console.log(id);
  //     Swal.fire({
  //       title: "Are you sure?",
  //       text: "You won't be able to revert this!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         fetch(`https://car-doctor-server-brown.vercel.app/bookings/${id}`, {
  //           method: "DELETE",
  //         })
  //           .then((res) => res.json())
  //           .then((data) => {
  //             console.log(data);
  //             if (data.deletedCount > 0) {
  //               Swal.fire(
  //                 "Deleted!",
  //                 "Your details has been deleted.",
  //                 "success"
  //               );
  //             //   const remaining = bookings.filter(
  //             //     (booking) => booking._id !== id
  //             //   );
  //             //   setBookings(remaining);
  //             }
  //           });
  //       }
  //     });
  //   };

  return (
    <div>
      <h2 className="font-bold text-center text-3xl mt-5">My Toys are here</h2>
      <div>
        <h2 className="text-5xl text-center font-bold text-[red] mb-5">
          My Toys:
          <span className="text-5xl text-center font-bold text-[black] mb-5">
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
                <MyCard key={data._id} data={data}></MyCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
