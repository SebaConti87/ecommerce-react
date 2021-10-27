import { useState, useEffect } from "react";
import apiCall from "./data/apiCall";
import Item from "./Item";

export const ItemList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiCall()
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <h1> Cargando... </h1>
      ) : (
        data && data.map((product) => <Item {...product} />)
      )}
    </>
  );
};
