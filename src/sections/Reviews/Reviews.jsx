import React, { useState, useEffect, useRef } from "react";
import "./Reviews.css";
import Stars from "../../components/Stars/Stars";
import ReviewText from "../../components/ReviewText/ReviewText";
import { ReactComponent as LogoGoogle } from '../../assets/images/Vector_Google.svg';
import { ReactComponent as Vector_Arrow_L } from '../../assets/images/Vector_Arrow_L.svg';
import { ReactComponent as Vector_Arrow_R } from '../../assets/images/Vector_Arrow_R.svg';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [start, setStart] = useState(0);
  const [currentRev, setCurrentRev] = useState(0);
  const touchStartXRef = useRef(0);
  const [width, setWidth] = useState(window.innerWidth);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const visibleCards = window.innerWidth > 1080 ? 3 : 1;
  const cardWidthPercent = 100 / visibleCards;
  const translateXPercent = -start * cardWidthPercent;

  const isMobile = width < 1080;
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data.reviews))
      .catch((err) => console.error("Error cargando JSON:", err));
  }, []);

  const next = () => {
    setStart((prev) => {
      const newStart = prev + 1;
      if (newStart > reviews.length - visibleCards) {
        setCurrentRev(0);
        return 0;
      }
      setCurrentRev(newStart);
      return newStart;
    });
  };

  const prev = () => {
    setStart((prev) => {
      const newStart = prev - 1;
      if (newStart < 0) {
        return reviews.length - visibleCards;
        setCurrentRev(last);
      }
      setCurrentRev(newStart);
      return newStart;
    });
  };

  /*--------------- FECHA DENTRO DE CARD ---------------*/
  function epochToDate(epochSeconds) {
    const date = new Date(epochSeconds * 1000);
    return date.toLocaleString("es-AR", {
      timeZone: "America/Argentina/Buenos_Aires",
      year: "numeric",
      month: "numeric",
      day: "numeric"
    });
  }

  /*--------------- SWIPE DE CARDS ---------------*/
const handleTouchStart = (e) => {
  touchStartXRef.current = e.touches[0].clientX;
};

const handleTouchEnd = (e) => {
  const touchEndX = e.changedTouches[0].clientX;
  const threshold = 100;

  if (touchStartXRef.current - touchEndX > threshold) {
    next();
  } else if (touchEndX - touchStartXRef.current > threshold) {
    prev();
  }
};

  /*---------------- ACTUALIZACION CARDS CON DOTS---------------*/
  const handleDotClick = (index) => {
    if (!isMobile) return;
    setCurrentRev(index);
    setStart(index);
  };

  /*--------------- AUTO-SLIDE ---------------*/
  useEffect(() => {
    if (!isMobile) return;

    intervalRef.current = setInterval(() => {
      setCurrentRev(prev => (prev + 1) % reviews.length);
    }, 10000);

    return () => clearInterval(intervalRef.current);
  }, [reviews.length, isMobile]);

  useEffect(() => {
    if (isMobile) {
      setStart(currentRev);
    }
  }, [currentRev, isMobile]);

  return (
    <div className="review-container">
      <div className="review-header">
        <p className="review-title-1">REALES Y ACTUALES</p>
        <p className="review-title-2">Testimonios y experiencias</p>
      </div>
      <div className="slider-container">
        <button className="arrow" onClick={prev}><Vector_Arrow_L /></button>

        <div className="slider">
          <div className="slider-inner"
            ref={sliderRef}
            style={{ transform: `translateX(${translateXPercent}%)`}}
          >
            {reviews.map((review, i) => (
              <div key={i} className="card">
                <div className="card-inner"
                  onTouchStart={isMobile ? handleTouchStart : undefined}
                  onTouchEnd={isMobile ? handleTouchEnd : undefined}
                >
                  <div className="card-top">
                    <img src={review.profile_photo_url} alt={review.author_name} className="avatar" />
                    <div className="card-top-name">
                      <p className="review-name">{review.author_name}</p>
                      <p className="review-time">{epochToDate(review.time)}</p>
                    </div>
                  </div>
                  <div className="card-info">
                    <Stars rating={review.rating} />
                  </div>
                  <ReviewText
                    key={`${i}-${currentRev}`} // Actualiza cada texto cuando cambia - Se puede sacar.
                    text={review.text} 
                    limit={isMobile ? 200 : 300} 
                  />
                  <div className="card-footer">
                    <a
                      href="https://www.google.com/maps/place/Estudio+PIMSI+%7C+Fidalgo+%26+Boeri/@-34.5112902,-58.4910748,16.25z/data=!4m16!1m9!3m8!1s0x95bcb13e659b6fa3:0x3dc3081b013f0259!2sEstudio+PIMSI+%7C+Fidalgo+%26+Boeri!8m2!3d-34.510941!4d-58.490328!9m1!1b1!16s%2Fg%2F11b7jxqj81!3m5!1s0x95bcb13e659b6fa3:0x3dc3081b013f0259!8m2!3d-34.510941!4d-58.490328!16s%2Fg%2F11b7jxqj81?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="google-link"
                    >
                      Ver en Google
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="arrow" onClick={next}><Vector_Arrow_R /></button>
      </div>
      <div className="rev-dots">
        {reviews.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === currentRev ? "active" : ""}`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
    </div>
  );
}