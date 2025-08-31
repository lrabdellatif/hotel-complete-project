import React from "react";
import p1 from "../images/af2a76b8-2e59-46e8-9eca-a62ff8d30394.jpg";
import p2 from "../images/Clean and Minimal Bedroom Designs for Stress Relief.jpg";
import p3 from "../images/Gallery of Hotel Dua _ Koan Design  - 16.jpg";
import p4 from "../images/How to Design Stunning Hotel Interiors That Impress Guests _ Tanic Design.jpg";
import p5 from "../images/Romantic Rooftop Dining with City Views & Candlelit Ambiance.jpg";
import p6 from "../images/Sheraton Grand Hangzhou Binjiang Hotel, Hangzhou _ 2025 Updated Prices, Deals.jpg";
import p7 from "../images/Sunning Luxury Hotel’s Pools (1).jpg";
import p8 from "../images/I will create an animated map navigation video….jpg";

export default function Properties() {
  return (
    <>
      <div className="second">
        <h1>Best properties</h1>
        <p>Explore all properties &gt;</p>
      </div>

      <div className="priority">
        <div className="offers">
          <img src={p1} alt="Urban Design and Planning" />
          <div className="card-content">
            <h2>Urban Design and Planning</h2>
            <p>Strategic organization and development of urban spaces to create livable communities.</p>
          </div>
        </div>

        <div className="offers">
          <img src={p2} alt="Modern Hotel Interior" />
          <div className="card-content">
            <h2>Modern Hotel Interior</h2>
            <p>Clean and minimal design focused on comfort, relaxation and smart use of space.</p>
          </div>
        </div>

        <div className="offers">
          <img src={p3} alt="Rooftop Dining" />
          <div className="card-content">
            <h2>Rooftop Dining</h2>
            <p>Enjoy candlelit meals with breathtaking views of the city skyline at night.</p>
          </div>
        </div>

        <div className="offers">
          <img src={p4} alt="Luxury Poolside" />
          <div className="card-content">
            <h2>Luxury Poolside</h2>
            <p>Premium outdoor pools with serene design and luxury service at your fingertips.</p>
          </div>
        </div>

        <div className="offers">
          <img src={p5} alt="Scenic Balcony Rooms" />
          <div className="card-content">
            <h2>Scenic Balcony Rooms</h2>
            <p>Wake up to stunning views of the mountains and city with open-air balconies.</p>
          </div>
        </div>

        <div className="offers">
          <img src={p6} alt="Cozy Minimal Suites" />
          <div className="card-content">
            <h2>Cozy Minimal Suites</h2>
            <p>Modern, simple, yet elegant room design with warm colors and lighting.</p>
          </div>
        </div>

        <div className="offers">
          <img src={p7} alt="Elegant Dining Areas" />
          <div className="card-content">
            <h2>Elegant Dining Areas</h2>
            <p>Indoor and outdoor dining with ambient lighting and luxurious furniture.</p>
          </div>
        </div>

        <div className="offers">
          <img src={p8} alt="Business Lounge" />
          <div className="card-content">
            <h2>Business Lounge</h2>
            <p>Perfect setting for work, networking or relaxing with refreshments.</p>
          </div>
        </div>
      </div>
    </>
  );
}
