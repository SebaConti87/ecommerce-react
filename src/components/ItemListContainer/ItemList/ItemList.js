import { useState, useEffect } from "react";
import apiCall from "../../data/apiCall";
import Item from "../Item/Item";
import Spinner from "../../Spinner/Spinner";
import Categories from "../../Categories/Categories";
import { useParams } from "react-router";

export const ItemList = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    apiCall()
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    filterData(category);
  }, [category, data]);

  const filterData = (param) => {
    if (param === undefined) {
      setFilteredData(data);
    } else {
      const newData = data && data.filter((item) => item.category === param);
      setFilteredData(newData);
    }
  };

  return (
    <>
      <Categories />
      {loading ? (
        <Spinner />
      ) : (
        filteredData &&
        filteredData.map((product) => (
          <Item {...product} stock={product.amount} key={product.id} />
        ))
      )}
    </>
  );
};
