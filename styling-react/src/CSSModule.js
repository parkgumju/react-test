import React from "react";
import classNames from "classnames/bind";
import styles from "./CSSModule.module.scss";

const cx = classNames.bind(styles);

const CSSModule = () => {
  console.log(styles);
  return (
    // <div className={`${styles.wrapper} ${styles.inverted}`}>
    <div className={cx("wrapper", "inverted")}>
      안녕 하세요 저는 <span className="something">CSS Moduel!</span>
    </div>
  );
};

export default CSSModule;
