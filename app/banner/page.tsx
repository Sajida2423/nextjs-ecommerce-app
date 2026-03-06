'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Script from 'next/script';
import '../styles/banner.module.css';

export default function BannerPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // mark component as mounted so it renders
  }, []);

  const handleClick = () => router.push('/product');

  const banners: string[] = [
    '/banner1.png',
    '/banner1.png',
    '/banner1.png',
  ];

  if (!mounted) return null; // ensures SSR doesn't break

  return (
    <div className="banner-container">
      {/* Load Bootstrap JS */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Initialize carousel AFTER Bootstrap JS loads
          const carouselEl = document.getElementById('bannerCarousel');
          if (carouselEl && (window as any).bootstrap) {
            new (window as any).bootstrap.Carousel(carouselEl, {
              interval: 3000, // slide every 3 seconds
              ride: 'carousel',
              touch: true,
            });
          }
        }}
      />

      <div id="bannerCarousel" className="carousel slide">
        <div className="carousel-indicators">
          {banners.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#bannerCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : undefined}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="carousel-inner">
          {banners.map((img, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={img} className="d-block w-100 banner-image" alt={`Banner ${index + 1}`} />
              <div className="carousel-caption banner-overlay">
                <h1>Welcome to Smart Cart</h1>
                <p>Best products at the best prices</p>
                <button className="btn btn-warning" onClick={handleClick}>
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}