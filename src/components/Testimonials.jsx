import React, { useEffect } from "react";
import guest1 from "../images/Work PSD, High Quality Free PSD Templates for Download _ Freepik.jpeg";
import guest2 from "../images/larry.jpeg";
import guest3 from "../images/Download premium image of Indian business woman photography portrait crossed_ by Pinn about indian business woman, indian corporate, face, person, and portrait 15384310.jpeg";

export default function Testimonials() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="testimonials fade-in">
      <h2>What Our Guests Say</h2>
      <div className="testimonial-container">
        <div className="testimonial fade-in">
          <img src={guest1} alt="Guest1" />
          <p>
            "Amazing service! The staff were so friendly and the rooms were
            spotless. Highly recommend!"
          </p>
          <h4>— Sarah K.</h4>
        </div>
        <div className="testimonial fade-in">
          <img src={guest2} alt="Guest 2" />
          <p>
            "The pool and rooftop dining were incredible. Definitely coming back
            next summer!"
          </p>
          <h4>— Ahmed B.</h4>
        </div>
        <div className="testimonial fade-in">
          <img src={guest3} alt="Guest 3" />
          <p>
            "A perfect balance of luxury and comfort. Felt like a home away from
            home."
          </p>
          <h4>— Emily R.</h4>
        </div>
      </div>
    </section>
  );
}
