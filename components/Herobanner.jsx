import React from "react";
import Link from "next/link";
const Herobanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">SMALL TEXT</p>
        <h3>Mid text</h3>
        <img src="" alt="headphones" className="hero-banner-image" />
        <div>
          <Link href="/product/ID">
            <button type="button">Button TEXT</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>DESC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herobanner;
