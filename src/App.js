import "./App.css";
import Logo from "./Component/logo";
import Form from "./Component/Form";
import PackingList from "./Component/PackingLIst";
import Stats from "./Component/Stats";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const handelSetItem = (item) => {
    setItems((items) => [...items, item]);
  };
  const handelDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const handelTogelItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const clearList = () => {
    setItems([]);
  };
  return (
    <div className="App">
      <Logo />
      <Form addItem={handelSetItem} />
      <PackingList
        items={items}
        handelDeleteItem={handelDeleteItem}
        handelTogelItem={handelTogelItem}
        clearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
