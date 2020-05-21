import React from "react";
import styles from "./Input.module.css";

const Input = ({ name, value, setValue, type = "text" }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={name}>{name}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </div>
  );
};

export default Input;
