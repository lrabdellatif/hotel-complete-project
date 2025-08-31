import React, { useEffect, useRef } from "react";
import womanImg from "../images/c754ce55-c320-4f12-a68b-55c7b8f29e94.jpeg";

export default function Welcome() {
  const sectionRef = useRef(null);
  const typedTextRef = useRef(null);
  const timeoutRef = useRef(null); // لتخزين setTimeout

  useEffect(() => {
    const text =
      "Welcome to Aurora Palace! 🌟| We are delighted to have you here. Aurora Palace is your gateway to comfort and luxury. Discover our services designed for your relaxation and elegance.| We wish you unforgettable moments filled with joy and happiness. ✨";
    let i = 0;
    const speed = 40;
    const delay = 1000;
    let started = false;

    function typeWriter() {
      if (!typedTextRef.current) return;

      if (i === 0) typedTextRef.current.innerHTML = ""; // تنظيف النص قبل البداية

      if (i < text.length) {
        const char = text.charAt(i);
        if (char === "|") {
          typedTextRef.current.innerHTML += "<br>";
          i++;
          timeoutRef.current = setTimeout(typeWriter, delay);
        } else {
          typedTextRef.current.innerHTML += char;
          i++;
          timeoutRef.current = setTimeout(typeWriter, speed);
        }
      }
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !started) {
            started = true;
            sectionRef.current.classList.add("visible");
            typeWriter();
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    // تنظيف عند unmount
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <section ref={sectionRef} className="welcome-section fade-in">
      <div className="welcome-container">
        <img src={womanImg} alt="Woman pointing" className="woman-img" />
        <div className="speech-bubble">
          <p ref={typedTextRef}></p>
        </div>
      </div>
    </section>
  );
}
