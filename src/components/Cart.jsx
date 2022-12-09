import { useContext } from "react";
import ItemContext from "../context/ItemContext";
import Item from "./Item";

function Cart({ data }) {
  const { ItemOneCount, ItemTwoCount } = useContext(ItemContext);

  const itemPrice = data.map((item) => {
    return item.newprice;
  });

  const shippingCost = 19;

  return (
    <div className="Cart">
      {data.map((item, index) => {
        return <Item item={index} key={index} data={item} />;
      })}
      <div className="price shipping">
        <p>Shipping</p>
        <p className="shipping-price">${shippingCost}</p>
      </div>
      <div className="price total">
        <p>Total</p>
        <p className="total-price">
          $
          {(
            ItemOneCount * itemPrice[0] +
            ItemTwoCount * itemPrice[1] +
            shippingCost
          ).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default Cart;
