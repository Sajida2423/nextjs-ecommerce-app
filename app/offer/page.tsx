'use client';

import  { useEffect, useState } from 'react';
import '../styles/offer.module.css'


interface Offer {
  id: number;
  title: string;
  thumbnail?: string;
  image?: string;
  images?: string[];
  price: number;
}

export default function OfferPage() {
  const [offers, setOffers] = useState<Offer[]>([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products?limit=6');
        const data = await res.json();
        setOffers(data.products);
      } catch (error) {
        console.error('Error fetching offers:', error);
      }
    };

    fetchOffers();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="offer1 text-center mb-4">🎉 Today's Special Offers 🎉</h2>

      <div className="d-flex flex-wrap justify-content-center gap-4">
        {offers.map((p) => (
          <div
            key={p.id}
            className="card p-3 text-center offer3"
            style={{ width: '180px',  backgroundColor:"#f8e6f0"}} 
          >
            {p.thumbnail || p.image || p.images?.[0] ? (
              <img
                src={p.thumbnail || p.image || p.images?.[0]!}
                alt={p.title}
                width={150}
                height={150}
                style={{ objectFit: 'contain' }}
              />
            ) : null}
            <h6 className="mt-2">{p.title}</h6>
            <h6 className="text-danger"> ₹{p.price}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}