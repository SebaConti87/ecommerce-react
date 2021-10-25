import { useState } from "react";

const ItemCount = ({ onAdd, stock }) => {
  const [amount, setAmount] = useState(0);

  const handleAdd = (e) => {
    e.preventDefault();
    if (amount < stock) {
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
    <div className="col-md-3 container">
      <div className="col d-flex justify-content-center">
        <button
          className="btn btn-primary"
          disabled={stock === 0}
          onClick={handleSubtract}
        >
          -
        </button>
        <span className="text-center">{amount}</span>
        <button
          className="btn btn-primary"
          disabled={stock === 0}
          onClick={handleAdd}
        >
          +
        </button>
      </div>
      <div className="row">
        <button
          className="btn btn-warning"
          disabled={stock === 0}
          onClick={() => onAdd(amount)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
