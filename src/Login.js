import React, { useState } from "react";
import styles from "./Login.module.css";
import Input from "./Input";
import Button from "./Button";
import { useHistory } from "react-router-dom";
import auth from "./auth";
import Plates from "./Plates";

const Login = ({ startAnimation }) => {
  const [username, setUsername] = useState("jaakko");
  const [password, setPassword] = useState("jokershep123");
  const [error, setError] = useState(null);
  const history = useHistory();

  const onLoginClick = async () => {
    const error = await auth.login(username, password);
    if (error) {
      setError("Login failed");
    } else {
      startAnimation();
      history.push("/");
    }
  };

  return (
    <div className={styles.login}>
      <Input value={username} setValue={setUsername} name="Username" />
      <Input
        value={password}
        setValue={setPassword}
        name="Password"
        type="password"
      />
      <p className={styles.error}>{error}</p>

      <Button text="Login" onClick={onLoginClick} />
    </div>
  );
};

export default Login;
