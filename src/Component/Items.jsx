const Items = ({ item, handelDeleteItem, handelTogelItem }) => {
  return (
    <>
      <li>
        <input
          onChange={() => handelTogelItem(item.id)}
          type="checkbox"
          value={item.packed}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => handelDeleteItem(item.id)}>❌</button>
      </li>
    </>
  );
};

export default Items;
<li></li>;
