import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const UnorderList = styled(motion.ul)`
  list-style-type: none;
`;
const ListItem = styled(motion.li)``;

const ListItemError = styled(motion.li)`
  color: red;
  margin: 30px;
`;
const ListItemAccuracy = styled(motion.li)`
  color: green;
  margin: 30px;
`;

const Result = ({ errors, accuracyPercentage, total, wordTyped }) => {
  const initial = { opacity: 0 };
  const animate = { opacity: 1 };
  const duration = { duration: 0.3 };

  return (
    <UnorderList>
      <ListItemError
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 0.5 }}
      >
        Errors: {errors}
      </ListItemError>
      <ListItemAccuracy
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 1.4 }}
      >
        Accuracy: {accuracyPercentage}
      </ListItemAccuracy>
      <ListItem
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 1.6 }}
      >
        Expected Total words: {total}
      </ListItem>
      <ListItem
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 1.6 }}
      >
        Total words typed: {wordTyped}
      </ListItem>
    </UnorderList>
  );
};

export default Result;
