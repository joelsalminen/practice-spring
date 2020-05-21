import React, { useState, useRef } from "react";
import styles from "./Login.module.css";
import Input from "./Input";
import Button from "./Button";
import { useSpring, useChain, animated } from "react-spring";
import auth from "./auth";

const Login = () => {
  const [username, setUsername] = useState("jaakko");
  const [password, setPassword] = useState("jokershep123");
  const [error, setError] = useState(null);
  const [on, setOn] = useState(false);

  const animation1Ref = useRef();
  const animation1 = useSpring({
    ref: animation1Ref,
    from: { transform: "translate3d(-50%, -100%, 0)", opacity: 1 },
    to: {
      transform: on ? "translate3d(-50%, 0, 0)" : "translate3d(-50%, -100%, 0)",
      opacity: on ? 0 : 1,
    },
    confit: { friction: 0, tension: 300 },
  });

  const animation2Ref = useRef();
  const { x } = useSpring({
    ref: animation2Ref,
    from: { x: 0 },
    to: { x: on ? 1 : 0 },
  });

  const onLoginClick = async () => {
    const error = await auth.login(username, password);
    if (error) {
      setError("Login failed");
    } else {
      setOn(true);
    }
  };

  useChain(on ? [animation1Ref, animation2Ref] : []);

  return (
    <div className={styles.login}>
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
        style={{ transform: animation1.transform }}
        className={styles.divider}
      ></animated.div>

      <animated.div style={{ opacity: animation1.opacity }}>
        <Input value={username} setValue={setUsername} name="Username" />
        <Input
          value={password}
          setValue={setPassword}
          name="Password"
          type="password"
        />
        <p className={styles.error}>{error}</p>

        <Button text="Login" onClick={onLoginClick} />
      </animated.div>
    </div>
  );
};

export default Login;
