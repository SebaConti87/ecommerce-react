import { useState } from "react";

const ItemCount = ({ onAdd, stock }) => {
  console.log(stock.length);
  const [amount, setAmount] = useState(0);

  const handleAdd = (e) => {
    e.preventDefault();
    if (amount < stock.length) {
      const value = amount + 1;
      setAmount(value);
    }
  };

  const handleSubtract = (e) => {
    e.preventDefault();
    if (amount > 0) {
      const value = amount - 1;
      setAmount(value);
    }
  };

  return (
    <div className="col">
      <div className=" d-flex justify-content-center">
        <button
          className="btn btn-primary"
          disabled={stock.length === 0}
          onClick={handleSubtract}
        >
          -
        </button>
        <span className="text-center m-3">
          <b className="heading">{amount}</b>
        </span>

        <button
          className="btn btn-primary"
          disabled={stock.length === 0}
          onClick={handleAdd}
        >
          +
        </button>
      </div>

      <button
        className="btn btn-warning w-100 mt-2"
        disabled={stock.length === 0}
        onClick={() => onAdd(amount)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
