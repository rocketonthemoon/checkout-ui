function Item({ data }) {
  return (
    <div className="Item">
      <div className="item-photo">
        <img src={data.photo} />
      </div>
      <div className="item-desc">
        <div className="item-name">{data.name}</div>
        <div className="item-price">
          <p className="new-price">{data.newprice}</p>
          <p className="old-price">{data.oldprice}</p>
        </div>
        <div className="item-counter">
          <div className="minus">-</div>
          <div className="item-count">1</div>
          <div className="plus">+</div>
        </div>
      </div>
    </div>
  );
}

export default Item;
