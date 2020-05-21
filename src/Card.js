import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./Card.css";

const Card = () => {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(1000px) rotateX(${flipped ? 180 : 0}deg)`,
  });

  const flip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="Card">
      <div className="cards" onClick={flip}>
        <animated.div
          style={{
            opacity,
            transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
          }}
          className="card card-a"
        ></animated.div>
        <animated.div
          style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
          className="card card-b"
        ></animated.div>
      </div>
    </div>
  );
};

export default Card;
