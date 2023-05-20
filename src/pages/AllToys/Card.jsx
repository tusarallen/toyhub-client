import React from "react";
import { Link } from "react-router-dom";

const Card = ({ toy }) => {
  const { _id,  sellerName, category, name, price, quantity } = toy;

  return (
    <tr>
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{category}</td>
      <td>$ {price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/detailtoys/${_id}`}>
          <button className="btn-ghost bg-red-500 hover:bg-red-300 text-white font-bold btn-xs m-2">
            view Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default Card;
