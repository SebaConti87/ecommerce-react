import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const Item = ({ id, title, description, price, pictureUrl, stock }) => {
  return (
    <div className="card card-item" key={id}>
      <img
        src={pictureUrl}
        className="card-img-top"
        alt={title}
        style={{ width: "16rem" }}
      />
      <div className="card-body card-body-item">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text price">${price}</p>
        <ItemCount stock={stock} />
        <Link className="btn btn-outline-primary w-100 mt-2" to={`/item/${id}`}>
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
