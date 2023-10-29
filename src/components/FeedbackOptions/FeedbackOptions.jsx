import React from 'react';
import { List, BtnList, ListItem } from './FeedbackOptions.styled';

const Feedback = ({
  onIncreamentGood,
  onIncreamentNeutral,
  onIncreamentBad,
}) => {
  return (
    <List>
      <ListItem>
        <BtnList type="button" onClick={onIncreamentGood}>
          Good
        </BtnList>
      </ListItem>
      <ListItem>
        <BtnList type="button" onClick={onIncreamentNeutral}>
          Neutral
        </BtnList>
      </ListItem>
      <ListItem>
        <BtnList type="button" onClick={onIncreamentBad}>
          Bad
        </BtnList>
      </ListItem>
    </List>
  );
};

export default Feedback;
