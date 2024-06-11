import React, { useState } from "react";
import Items from "./Items";

const PackingList = ({
  items,
  handelDeleteItem,
  handelTogelItem,
  clearList,
}) => {
  const handelCheckBox = (id) => {};
  const [sortedBy, setSortedBy] = useState("input");
  let sortedItems;

  if (sortedBy === "input") sortedItems = items;
  if (sortedBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortedBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Items
            item={item}
            key={item.id}
            handelDeleteItem={handelDeleteItem}
            handelCheckBox={handelCheckBox}
            handelTogelItem={handelTogelItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortedBy}
          id=""
          onChange={(e) => setSortedBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>
        <button onClick={clearList}> clear List</button>
      </div>
      <div className=""></div>
    </div>
  );
};

export default PackingList;
