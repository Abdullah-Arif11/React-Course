import Items from "./Items";
import { useState } from "react";

function LifeRoutiens({ dailyLife }) {
  const handleOnClick = (item, event) => {
    console.log(`${item} is followed`);
    let newActive = [...activeItems, item];
    setActiveItem(newActive);
  };
  let [activeItems, setActiveItem] = useState([]);
  return (
    <ul className="list-group">
      {dailyLife.map((item) => (
        <Items
          key={item}
          item={item}
          bought={activeItems.includes(item)}
          handleOnClick={(event) => handleOnClick(item, event)}
        ></Items>
      ))}
    </ul>
  );
}
export default LifeRoutiens;
