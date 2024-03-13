import cart from "../assets/Cart.png";

export const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img src={cart} alt="cart" />
      <span>14</span>
    </div>
  );
};
