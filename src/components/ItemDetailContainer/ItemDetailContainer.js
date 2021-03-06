import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import apiCall from "../data/apiCall";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  const [itemDetail, setItemDetail] = useState(null);

  const { id, category } = useParams();

  const itemFilter = () => {
    if (data) {
      const item = data.find((item) => item.id === Number(id));
      setItemDetail(item);
    }
  };

  useEffect(() => {
    if (data) {
      itemFilter(data, id);
    }
  }, [data]);

  useEffect(() => {
    apiCall()
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err))
      .finally(() => console.log("Fin del llamado"));
  }, []);

  return (
    <section className="container">
      <ol className="breadcrumb mt-4">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">Categoría</li>
        <li className="breadcrumb-item">Item</li>
        <li className="breadcrumb-item">Detalle</li>
      </ol>
      <div className="card border-light mb-3 w-100">
        <h2>{itemDetail && itemDetail.title}</h2>
      </div>

      <ItemDetail itemDetail={itemDetail} />
    </section>
  );
};

export default ItemDetailContainer;
