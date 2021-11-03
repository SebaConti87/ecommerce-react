import Spinner from "../../Spinner/Spinner";
import ItemCount from "../../ItemListContainer/ItemCount/ItemCount";

const ItemDetail = ({ itemDetail }) => {
  return (
    <>
      {itemDetail ? (
        <section className="container row" key={itemDetail.id}>
          <div className="col card d-flex justify-content-center align-items-center mb-3 p-4">
            <img
              className="card-img-top"
              src={itemDetail.pictureUrl}
              style={{ width: "23rem" }}
            />
          </div>
          <div className="col card mb-3 p-4">
            <div className="card-body">
              <label>Precio: </label>
              <h3>${itemDetail.price}</h3>
              <p className="card-text lead">{itemDetail.description}</p>
              <label>Stock: {itemDetail.amount}</label>
            </div>
            <ItemCount stock={itemDetail.amount} />
            <div className="card-body p-0 m-0">
              <button className="btn btn-primary w-100 mt-3">Comprar</button>
            </div>
          </div>
        </section>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default ItemDetail;
