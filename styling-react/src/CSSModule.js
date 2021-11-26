import React from "react";
import styles from "./CSSModule.module.scss";

const CSSModule = () => {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      나는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
