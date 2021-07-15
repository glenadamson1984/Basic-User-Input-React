import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = ({ title, description, onClose }) => {
  return (
    <>
      <div onClick={onClose} className={styles.backdrop} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{description}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={onClose}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
