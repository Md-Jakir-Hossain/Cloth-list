import React from "react";
import "./Cloth.css";
import { RiDeleteBin2Line } from "react-icons/ri";

const Cloth = ({ cloth, del }) => {
  const { clothName, id, price, quantity, description, color, date, size } =
    cloth;

  return (
    <tr className="table-row">
      <td>{clothName}</td>
      <td>{id}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{description}</td>
      <td>{color}</td>
      <td>{date}</td>
      <td>{size}</td>
      <td onClick={() => del(id)}>
        <RiDeleteBin2Line color="red" />
      </td>
    </tr>
  );
};

export default Cloth;
