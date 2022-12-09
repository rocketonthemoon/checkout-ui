import { useContext } from "react";
import ItemContext from "../context/ItemContext";

function Item({ data, item }) {
  const {
    ItemOneCount,
    ItemTwoCount,
    handleOnePlus,
    handleTwoPlus,
    handleOneMinus,
    handleTwoMinus,
  } = useContext(ItemContext);

  /* handle Count */

  const handleCount = () => {
    if (item === 0) {
      return ItemOneCount;
    } else if (item === 1) {
      return ItemTwoCount;
    }
  };

  /* handle Plus Counting */

  const handlePlus = () => {
    if (item === 0) {
      handleOnePlus();
    } else if (item === 1) {
      handleTwoPlus();
    }
  };

  /* handle Minus Counting */

  const handleMinus = () => {
    if (item === 0) {
      handleOneMinus();
    } else if (item === 1) {
      handleTwoMinus();
    }
  };

  return (
    <div className="Item">
      <div className="item-photo">
        <img src={data.photo} />
      </div>
      <div className="item-desc">
        <div className="item-name">{data.name}</div>
        <div className="item-price">
          <p className="new-price">${data.newprice}</p>
          <p className="old-price">${data.oldprice}</p>
        </div>
        <div className="item-counter">
          <div className="minus" onClick={handleMinus}>
            -
          </div>
          <div className="item-count">{handleCount()}</div>
          <div className="plus" onClick={handlePlus}>
            +
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
