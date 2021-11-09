import { useState } from "react";
import Spinner from "../../Spinner/Spinner";
import ItemCount from "../../ItemListContainer/ItemCount/ItemCount";
import { useParams } from "react-router";

const ItemDetail = ({ itemDetail }) => {
  const [amount, setAmount] = useState(0);

  const { id } = useParams();

  const handleAddToCart = (e) => {
    e.preventDefault();
    console.log(`Agregando ${amount} del producto ${id}`);
  };

  return (
    <>
      {itemDetail ? (
        <section className="container row" key={itemDetail.id}>
          <div className="col card d-flex justify-content-center align-items-center mb-3 p-4">
            <img
              className="card-img-top"
              src={itemDetail.pictureUrl}
              style={{ width: "23rem", height: "23rem" }}
              alt={itemDetail.title}
            />
          </div>
          <div className="col card mb-3 p-4">
            <div className="card-body">
              <label>Precio: </label>
              <h3>${itemDetail.price}</h3>
              <p className="card-text lead">{itemDetail.description}</p>
              <label>Stock: {itemDetail.amount}</label>
            </div>
            <ItemCount
              stock={itemDetail.amount}
              onAdd={handleAddToCart}
              amount={amount}
              setAmount={setAmount}
            />
          </div>
        </section>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default ItemDetail;
