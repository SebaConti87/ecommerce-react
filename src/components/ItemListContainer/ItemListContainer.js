import { useState } from "react";
import { ItemList } from "./ItemList/ItemList";

export const ItemListContainer = ({ greeting }) => {
  const [stock, setStock] = useState(10);

  const handleAddToCart = (amount) => {
    console.log(`Se agregaron ${amount} de items al carrito.`);
    const newStock = stock - amount;
    setStock(newStock);
  };

  return (
    <div className="container list-container p-0">
      <ItemList />
    </div>
  );
};
