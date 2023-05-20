import React from "react";

const Card = ({ toy }) => {
  const { sellerName, category, name, price, quantity } = toy;

  return (
    <tr>
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{category}</td>
      <td>$ {price}</td>
      <td>{quantity}</td>
      <td>
        <button className="btn-ghost bg-red-500 hover:bg-red-300 text-white font-bold btn-xs m-2">
          Details
        </button>
      </td>
    </tr>
  );
};

export default Card;
