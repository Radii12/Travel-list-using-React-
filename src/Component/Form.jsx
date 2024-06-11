import { useState } from "react";

const Form = ({ addItem }) => {
  const [description, setDescritpons] = useState();
  const [quantity, setQuantity] = useState(1);
  // console.log(items);

  // const handelSetItem = (item) => {
  //   setItems((items) => [...items, item]);
  // };
  function handelSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description: description,
      quantity: quantity,
      packed: false,
      id: Date.now(),
    };

    addItem(newItem);
    // console.log(items);
  }

  return (
    <div className="add-form">
      <h3> What doo you need for your 😍trip?</h3>

      <form className="add-form" onSubmit={handelSubmit}>
        <select onChange={(e) => setQuantity(Number(e.target.value))}>
          {Array.from({ length: 20 }, (_, item) => item + 1).map((it) => (
            <option value={it} key={it}>
              {it}
            </option>
          ))}
        </select>
        <input type="text" onChange={(e) => setDescritpons(e.target.value)} />

        <button>add</button>
      </form>
    </div>
  );
};

export default Form;
