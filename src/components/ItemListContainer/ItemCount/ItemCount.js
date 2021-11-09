import { Link } from "react-router-dom";
import { useParams } from "react-router";

const ItemCount = ({ onAdd, stock, amount, setAmount }) => {
  const { id } = useParams();

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
    <>
      {id !== undefined ? (
        <div className="col">
          <div className=" d-flex justify-content-center">
            <button
              className={`btn btn-primary ${amount === 0 ? "disabled" : null}`}
              onClick={handleSubtract}
            >
              -
            </button>
            <span className="text-center m-3">
              <b className="heading">{amount}</b>
            </span>
            <button
              className={`btn btn-primary ${
                amount === stock ? "disabled" : null
              }`}
              onClick={handleAdd}
            >
              +
            </button>
          </div>
          {amount !== 0 ? (
            <>
              <Link to="/cart">
                <button
                  className="btn btn-warning w-100 mt-2"
                  disabled={stock && stock.length === 0}
                  onClick={onAdd}
                >
                  Agregar al carrito
                </button>
              </Link>
              <Link to="/cart">
                <button className="btn btn-primary w-100 mt-3">Comprar</button>
              </Link>
            </>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default ItemCount;
