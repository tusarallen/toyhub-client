import React from "react";
import { Link } from "react-router-dom";

const MyCard = ({ data, handleDelete }) => {
  const { _id, sellerName, category, name, price, quantity } = data;
  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{category}</td>
      <td>$ {price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/updatetoys/${_id}`}>
          <button className="btn bg-red-500 hover:bg-red-300 text-white font-bold btn-xs p-5 rounded-md">
            Update
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default MyCard;
