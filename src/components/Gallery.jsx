import React from "react";
import img1 from "../images/18295.jpg";
import img2 from "../images/Gallery of Naz City Hotel Taksim _ Metex Design Group  - 5.jpg";
import img3 from "../images/28374.jpg";

export default function Gallery() {
  return (
    <>
      <section className="gallery-section">
        <h2 className="section-title">Discover Our Hotel</h2>
        <p className="section-subtitle">Explore luxury views and elegant interiors</p>
      </section>

      <div className="container">
        <div className="mage">
          <img className="img-mage" src={img1} alt="Hotel View 1" />
          <div className="overlay">
            <h2>Hotel View</h2>
            <p>A breathtaking view of the hotel exterior showcasing modern design and elegance.</p>
          </div>
        </div>
        
        <div className="mage">
          <img className="img-mage" src={img2} alt="Hotel Interior 1" />
          <div className="overlay">
            <h2>Interior Design</h2>
            <p>Elegant interior design that combines comfort and luxury with a contemporary touch.</p>
          </div>
        </div>
        
        <div className="mage">
          <img className="img-mage" src={img3} alt="Hotel View 2" />
          <div className="overlay">
            <h2>Scenic View</h2>
            <p>Beautiful scenic surroundings providing a relaxing and peaceful atmosphere for guests.</p>
          </div>
        </div>
      </div>
    </>
  );
}
