import React from "react";
import styles from "./header.module.css";

const Person = ({ name, age, hight }) => {
  return (
    <div className={styles.header}>
      <h3>Name: {name}</h3>
      <h4>Name: {age}</h4>
      <h4>Name: {hight}</h4>
    </div>
  );
};

export default Person;
