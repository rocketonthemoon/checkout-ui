import Item from "./Item";

function Cart({ data }) {
  return (
    <div className="Cart">
      {data.map((item, index) => {
        return <Item key={index} data={item} />;
      })}
      <div className="price shipping">
        <p>Shipping</p>
        <p className="shipping-price">$19</p>
      </div>
      <div className="price total">
        <p>Total</p>
        <p className="total-price">$148.98</p>
      </div>
    </div>
  );
}

export default Cart;
