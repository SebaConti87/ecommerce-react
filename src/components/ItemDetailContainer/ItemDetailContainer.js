import ItemDetail from "./ItemDetail/ItemDetail";

const ItemDetailContainer = ({ item }) => {
  return (
    <section className="container">
      <ol class="breadcrumb mt-4">
        <li class="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li class="breadcrumb-item">
          <a href="#">Productos</a>
        </li>
        <li class="breadcrumb-item active">Detalle</li>
      </ol>
      <div className="card border-light mb-3 w-100">
        <h2>Macbook air 16</h2>
      </div>

      <ItemDetail />
    </section>
  );
};

export default ItemDetailContainer;
