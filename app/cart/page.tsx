
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
// import { useAuth } from "@/app/context/AuthContext";
import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  // const { token } = useAuth();
  const { cart, removeFromCart, totalPrice } = useCart();
  const router = useRouter();

  // useEffect(() => {
  //   if (!token) router.push("/login?redirect=/cart");
  // }, [token, router]);

  // if (!token) return <p>Redirecting to Login...</p>;

  return (
    <div className="container mt-4 d-flex flex-column min-vh-100">
      <h3>Your Cart ({cart.length} items)</h3>

      {!cart.length && <p>Your cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id} className="d-flex justify-content-between mb-3  rounded p-3"
          style={{ backgroundColor: "#f8e6f0" }}>
          <img src={item.image} alt={item.title} width={80} height={80} />
          <div>
            <p>{item.title}</p>
            <p>₹{item.price} × {item.quantity}</p>
      
          </div>
          {/* <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button> */}
        
        <button
  className="btn btn-danger btn-sm px-2 py-1"
  style={{ fontSize: "0.9rem", borderRadius: "5px" }}
  onClick={() => removeFromCart(item.id)}
>
  Remove
</button>
        
        
        
        </div>
             
      ))}

      {cart.length > 0 && <h4>Total: ₹{totalPrice.toFixed(2)}</h4>}
    </div>
  );
}

















