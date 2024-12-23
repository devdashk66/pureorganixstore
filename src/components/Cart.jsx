"use client";

import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa6";

const Cart = () => {
  const { cartCount } = useCart();

  return (
    <Link className="relative inline-block" href="/cart">
      <FaCartPlus className="text-3xl text-heading-light dark:text-heading-dark" />
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </Link>
  );
};

export default Cart;
