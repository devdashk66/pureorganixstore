import AnimatedTitle from "../_components/shared/AnimatedTitle";
import CartItem from "./_components/CartItem";
import CheckoutSummary from "./_components/CheckoutSummary";
import EmptyCart from "./_components/EmptyCart";

const CartPage = () => {
  // Example cart items (replace with your actual cart data)
  const cartItems = [
    {
      id: 1,
      name: "Fresh Organic Avocados With Seeds",
      price: 4.99,
      quantity: 2,
      image: "/images/products/avocado.jpg",
      weight: "500g",
    },
    {
      id: 2,
      name: "Organic Strawberries",
      price: 3.99,
      quantity: 1,
      image: "/images/products/strawberry.jpg",
      weight: "250g",
    },
  ];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen py-8 sm:py-12 lg:py-16 px-4">
      <div className="container mx-auto">
        <AnimatedTitle title="Your Cart" subtitle="ORGANIC" accent="emerald" />

        <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.map((item, index) => (
              <CartItem key={item.id} item={item} index={index} />
            ))}
          </div>

          {/* Checkout Summary */}
          {cartItems.length > 0 && (
            <CheckoutSummary
              subtotal={subtotal}
              shipping={shipping}
              total={total}
            />
          )}
        </div>

        {/* Empty Cart */}
        {cartItems.length === 0 && <EmptyCart />}
      </div>
    </div>
  );
};

export default CartPage;
