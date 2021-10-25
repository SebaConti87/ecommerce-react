import { useState } from "react";
import ItemCount from "./ItemCount";

export const ItemListContainer = ({ greeting }) => {
  const [stock, setStock] = useState(10);

  const handleAddToCart = (amount) => {
    console.log(`Se agregaron ${amount} de items al carrito.`);
    const newStock = stock - amount;
    setStock(newStock);
  };

  return (
    <>
      <p>{greeting}</p>
      <ItemCount onAdd={handleAddToCart} stock={stock} />
    </>
  );
};
