import cart from "../../assets/shopping-cart.png";

const CartWidget = () => {
  return (
    <img
      src={cart}
      className="cart align-self-center"
      alt="Logo del carrito de compras"
    />
  );
};

export default CartWidget;
