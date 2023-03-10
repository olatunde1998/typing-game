import styles from "./Modal.module.css";
import { motion } from "framer-motion";
import { RiCloseLine } from "react-icons/ri";
import styled from "styled-components";
import { Link } from "react-router-dom";

const UnorderList = styled(motion.ul)`
  list-style-type: none;
`;
const ListItem = styled(motion.li)`
  margin: 0 0px 20px 0px;
  text-align: left;
`;

const ListItemError = styled(motion.li)`
  color: red;
  margin: 0 0px 20px 0px;
  text-align: left;
`;

const ListItemAccuracy = styled(motion.li)`
  color: green;
  margin: 0 0px 20px 0px;
  text-align: left;
`;

const Modal = ({
  setIsOpen,
  time,
  typingWord,
  words,
  totalWords,
  wordTyped,
}) => {
  const initial = { opacity: 0 };
  const animate = { opacity: 1 };
  const duration = { duration: 0.3 };

  let typed = typingWord.length;
  let genWords = words.length;
  let result = genWords - typed;

  let accuracy = Math.round((typed / genWords) * 100);

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Your Result is :</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            <UnorderList>
              <ListItemError
                initial={initial}
                animate={animate}
                transition={{ ...duration, delay: 0.5 }}
              >
                Errors: {result}
              </ListItemError>
              <ListItem
                initial={initial}
                animate={animate}
                transition={{ ...duration, delay: 1.6 }}
              >
                <p> Time elapsed: {time}</p>
              </ListItem>
              <ListItemAccuracy
                initial={initial}
                animate={animate}
                transition={{ ...duration, delay: 1.4 }}
              >
                Accuracy: {accuracy}%
              </ListItemAccuracy>
              <ListItem
                initial={initial}
                animate={animate}
                transition={{ ...duration, delay: 1.6 }}
              >
                Expected Typed words: {totalWords}
              </ListItem>
              <ListItem
                initial={initial}
                animate={animate}
                transition={{ ...duration, delay: 1.6 }}
              >
                Total words typed: {wordTyped}
              </ListItem>
            </UnorderList>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <Link to="/">
                <button
                  className={styles.deleteBtn}
                  onClick={() => setIsOpen(false)}
                >
                  Okay
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
