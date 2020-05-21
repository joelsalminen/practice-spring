import React, { useState } from "react";
import styles from "./Login.module.css";
import Input from "./Input";
import Button from "./Button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLoginClick = () => {};

  return (
    <div className={styles.login}>
      <div className={`${styles.background} ${styles.left}`}></div>
      <div className={`${styles.background} ${styles.right}`}></div>

      <Input value={username} setValue={setUsername} name="Username" />
      <Input
        value={password}
        setValue={setPassword}
        name="Password"
        type="password"
      />

      <Button text="Login" onClick={onLoginClick} />
    </div>
  );
};

export default Login;
