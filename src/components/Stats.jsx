import React from "react";
import warranty from "../images/warranty.png";

export default function Stats() {
  return (
    <section className="stats">
      <div className="stat">
        <img src={warranty} alt="Warranty" className="fade-in" loading="lazy" />
        <p>Professionalism and credibility</p>
      </div>
      <div className="stat">
        <h2>250+</h2>
        <p>Happy Guests Weekly</p>
      </div>
      <div className="stat">
        <h2>98%</h2>
        <p>Positive Reviews</p>
      </div>
      <div className="stat">
        <h2>15</h2>
        <p>Years of Excellence</p>
      </div>
    </section>
  );
}
