import React, { useRef } from "react";
import { useSpring, useChain, animated } from "react-spring";
import styles from "./Plates.module.css";

const Plates = ({ started, startAnimation }) => {
  const animation1Ref = useRef();
  const animation1 = useSpring({
    ref: animation1Ref,
    from: { transform: "translate3d(-50%, -100%, 0)", opacity: 1 },
    to: {
      transform: started
        ? "translate3d(-50%, 0, 0)"
        : "translate3d(-50%, -100%, 0)",
      opacity: started ? 0 : 1,
    },
    confit: { friction: 0, tension: 300 },
  });

  const animation2Ref = useRef();
  const { x } = useSpring({
    ref: animation2Ref,
    from: { x: 0 },
    to: { x: started ? 1 : 0 },
  });

  useChain(started ? [animation1Ref, animation2Ref] : []);

  return (
    <>
      <animated.div
        className={styles.background}
        style={{
          transform: x.interpolate((x) => `translate3d(${-100 * x}%, 0, 0)`),
        }}
      ></animated.div>

      <animated.div
        className={styles.background}
        style={{
          transform: x.interpolate(
            (x) => `translate3d(${100 + 100 * x}%, 0, 0)`
          ),
        }}
      ></animated.div>

      <animated.div
        style={{ transform: animation1.transform, opacity: animation1.opacity }}
        className={styles.divider}
      ></animated.div>
    </>
  );
};

export default Plates;
