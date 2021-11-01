const ItemDetail = () => {
  return (
    <section className="container row">
      <div className="col card d-flex justify-content-center align-items-center mb-3 p-4">
        <img
          className="card-img-top"
          src="https://via.placeholder.com/150"
          style={{ width: "23rem" }}
        />
      </div>
      <div className="col card mb-3 p-4">
        <div class="card-body">
          <label>Precio: </label>
          <h3>$1500</h3>
          <p class="card-text lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            efficitur ut tortor vel condimentum.
          </p>
        </div>
        <div class="card-body">
          <button class="btn btn-primary m-2">Comprar</button>
          <button class="btn btn-warning">Agregar al carrito</button>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
