import AnimatedTitle from "../_components/shared/AnimatedTitle";
import OrderSummary from "./_components/OrderSummary";
import PaymentForm from "./_components/PaymentForm";
import ShippingForm from "./_components/ShippingForm";

export const metadata = {
  title: "Checkout | Pure Organix",
  description: "Complete your purchase securely with Pure Organix",
};

const CheckoutPage = () => {
  // Example order items
  const orderItems = [
    {
      id: 1,
      name: "Fresh Organic Avocados",
      price: 4.99,
      quantity: 2,
      image: "/images/products/avocado.jpg",
    },
    {
      id: 2,
      name: "Organic Strawberries",
      price: 3.99,
      quantity: 1,
      image: "/images/products/strawberry.jpg",
    },
  ];

  return (
    <div className="min-h-screen py-8 sm:py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <AnimatedTitle
          title="Checkout"
          subtitle="SECURE CHECKOUT"
          accent="emerald"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2 space-y-6">
            <ShippingForm />
            <PaymentForm />
          </div>
          <OrderSummary orderItems={orderItems} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
