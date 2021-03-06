import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="row container d-flex justify-content-between m-auto">
      <ul className="nav nav-tabs p-0">
        <li className="nav-item m-auto">
          <Link className="nav-link" to="/">
            Todos
          </Link>
        </li>
        <li className="nav-item m-auto">
          <Link className="nav-link" to="/category/instrumentos-de-cuerda">
            Instrumentos de cuerdas
          </Link>
        </li>
        <li className="nav-item m-auto">
          <Link className="nav-link" to="/category/instrumentos-de-viento">
            Instrumentos de viento
          </Link>
        </li>
        <li className="nav-item m-auto">
          <Link className="nav-link" to="/category/teclados-y-pianos">
            Teclados y pianos
          </Link>
        </li>
        <li className="nav-item m-auto">
          <Link className="nav-link" to="/category/baterias-y-percusion">
            Baterías y percusión
          </Link>
        </li>
        <li className="nav-item m-auto">
          <Link className="nav-link" to="/category/accesorios">
            Accesorios
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
