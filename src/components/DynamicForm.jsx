import React, { useState } from "react";
import Cloth from "../Cloth/Cloth";
import "./DynamicForm.css";

const DynamicForm = () => {
  const [formData, setFormData] = useState([]);
  const [terms, setTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const input = {};
    const cloths = [...e.target.elements];

    for (const obj of formData) {
      if (obj.id === e.target.id.value) return alert("id already exist");
    }

    cloths.forEach((cloth) => {
      if (cloth.type === "radio" && !cloth.checked) {
        return;
      }

      if (!cloth.clothName) input[cloth.name] = cloth.value;
      cloth.value = "";
      cloth.checked = false;
    });

    input.id < 99999 &&
    input.id > 0 &&
    input.price < 99999 &&
    input.price > 0 &&
    (input.quantity < 99999 && input.quantity) > 0
      ? setFormData([...formData, input])
      : alert("please give a valid number between 99999");
  };
  // console.log(formData);

  const handleTerms = (e) => {
    setTerms(e.target.checked);
  };
  const remove = (id) => {
    const filtered = formData.filter((data, index) => data.id !== id);
    setFormData(filtered);
  };

  return (
    <div className="container">
      <h1>Cloth Item List</h1>
      <div className="form">
        <form onSubmit={handleSubmit} action="">
          <label htmlFor="">
            Cloth Name : <br />
            <input
              type="text"
              placeholder="Please enter the name"
              name="clothName"
              maxLength={12}
              required
            />
          </label>
          <br />
          <label htmlFor="">
            Cloth Id :<br />
            <input
              type="number"
              placeholder="Please enter id number"
              name="id"
              min={0}
              maxLength={5}
              required
            />
          </label>
          <br />
          <label htmlFor="">
            Price :<br />
            <input
              type="number"
              placeholder="Please enter price"
              name="price"
              min={0}
              size={5}
              required
            />
          </label>
          <br />
          <label htmlFor="">
            Quantity :<br />
            <input
              type="number"
              placeholder="Quantity"
              name="quantity"
              min={0}
              maxLength={5}
              required
            />
          </label>
          <br />
          <label htmlFor="">
            Description :<br />
            <textarea
              name="description"
              placeholder="Description"
              maxLength={30}
              cols="30"
              rows="3"
              required
            ></textarea>
          </label>
          <br />
          <label htmlFor="" required>
            Color :
            <select name="color" id="">
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </label>
          <br />
          <br />
          <label htmlFor="">
            Manufacture :
            <input type="date" name="date" required />
          </label>
          <br />
          <label>Size :</label>
          <input id="m" type="radio" name="size" value="M" />
          <label htmlFor="m">M</label>
          <input id="l" type="radio" name="size" value="L" />
          <label htmlFor="l">L</label>
          <input id="xl" type="radio" name="size" value="XL" />
          <label htmlFor="xl">XL</label>
          <br />
          <label htmlFor="">
            <input
              type="checkbox"
              name="checkbox"
              onChange={handleTerms}
              required
            />
            Accept terms and condition
          </label>
          <br />
          <button className="submit" disabled={!terms}>
            submit
          </button>
        </form>
      </div>

      <div className="list">
        {formData.length > 0 && (
          <>
            <table>
              <thead>
                <tr>
                  <th>Cloth Name</th>
                  <th>Cloth Id</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Description</th>
                  <th>Color</th>
                  <th>Manufacture</th>
                  <th>Size</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {formData.map((cloth) => (
                  <Cloth cloth={cloth} del={remove} />
                ))}
              </tbody>
            </table>
            <button className="remove" onClick={() => setFormData([])}>
              Remove all
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default DynamicForm;
