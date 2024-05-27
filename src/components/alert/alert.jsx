import styles from "./alert.module.css";
import cx from "classnames";

const Alert = ({ type, text }) => {
  return (
    <div className={cx(styles.container, type === "danger" && styles.errorContainer)}>
      <div role="alert" className={styles.wrapper}>
        <p className={styles.type}>{type === "danger" ? "⚠️ Failed" : "📨 Success"}</p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default Alert;
