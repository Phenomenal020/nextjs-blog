import styles from "./whyus_card.module.css";

const Card = ({ headerInfo, content }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>{headerInfo}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default Card;
