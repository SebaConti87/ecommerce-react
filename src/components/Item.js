const Item = ({ id, title, description, price, pictureUrl }) => {
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
        <a className="btn btn-primary">Ver detalle</a>
      </div>
    </div>
  );
};

export default Item;
