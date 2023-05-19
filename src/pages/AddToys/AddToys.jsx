// import React, { useContext } from "react";
// import { useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";
// import useTitle from "../../hook/useTitle";
// import { AuthContext } from "../../provider/AuthProvider";

// const AddToys = () => {
//   useTitle("Add Toys");
//   const services = useLoaderData();
//   const { _id, title, price, img } = services;
//   const { user } = useContext(AuthContext);

//   const handleBookService = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const name = form.name.value;
//     const date = form.date.value;
//     const email = user?.email;

//     const booking = {
//       customerName: name,
//       email,
//       img,
//       date,
//       service: title,
//       service_id: _id,
//       price: price,
//     };

//     console.log(booking);

//     fetch("https://car-doctor-server-brown.vercel.app/bookings", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(booking),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.insertedId) {
//           Swal.fire({
//             title: "Success!",
//             text: "Do you want to continue",
//             icon: "success",
//             confirmButtonText: "Cool",
//           });
//         }
//       });
//   };

//   return (
//     <div>
//       <h2 className="text-center text-3xl font-bold mb-6">
//         Book Service: {title}
//       </h2>
//       <form onSubmit={handleBookService}>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Name</span>
//             </label>
//             <input
//               type="text"
//               name="name"
//               defaultValue={user?.displayName}
//               className="input input-bordered"
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Date</span>
//             </label>
//             <input type="date" name="date" className="input input-bordered" />
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Email</span>
//             </label>
//             <input
//               type="text"
//               name="email"
//               defaultValue={user?.email}
//               className="input input-bordered"
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Deu Amount</span>
//             </label>
//             <input
//               type="text"
//               defaultValue={`$ ` + price}
//               className="input input-bordered"
//             />
//           </div>
//         </div>
//         <div className="form-control mt-6 mb-12">
//           <input
//             className="btn btn-primary btn-block"
//             type="submit"
//             value="Order Confirm"
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddToys;
