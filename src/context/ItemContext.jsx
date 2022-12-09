import { createContext, useState } from "react";

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [ItemOneCount, setItemOneCount] = useState(1);
  const [ItemTwoCount, setItemtwoCount] = useState(1);

  const handleOnePlus = () => {
    let newValue = ItemOneCount + 1;
    setItemOneCount(newValue);
  };

  const handleOneMinus = () => {
    let newValue = ItemOneCount - 1;
    if (newValue > 0) {
      setItemOneCount(newValue);
    }
  };

  const handleTwoPlus = () => {
    let newValue = ItemTwoCount + 1;
    setItemtwoCount(newValue);
  };

  const handleTwoMinus = () => {
    let newValue = ItemTwoCount - 1;
    if (newValue > 0) {
      setItemtwoCount(newValue);
    }
  };

  return (
    <ItemContext.Provider
      value={{
        ItemOneCount,
        ItemTwoCount,
        handleOnePlus,
        handleTwoPlus,
        handleOneMinus,
        handleTwoMinus,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContext;
