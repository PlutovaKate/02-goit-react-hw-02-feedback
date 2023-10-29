import React from 'react';
import { List, BtnList, ListItem } from './FeedbackOptions.styled';
import {
  HiOutlineHandThumbUp,
  HiOutlineHandRaised,
  HiOutlineHandThumbDown,
} from 'react-icons/hi2';

const Feedback = ({
  onIncreamentGood,
  onIncreamentNeutral,
  onIncreamentBad,
}) => {
  return (
    <List>
      <ListItem feedback={'good'}>
        <BtnList feedback={'good'} type="button" onClick={onIncreamentGood}>
          <HiOutlineHandThumbUp />
          Good
        </BtnList>
      </ListItem>
      <ListItem feedback={'neutral'}>
        <BtnList
          feedback={'neutral'}
          type="button"
          onClick={onIncreamentNeutral}
        >
          <HiOutlineHandRaised />
          Neutral
        </BtnList>
      </ListItem>
      <ListItem feedback={'bad'}>
        <BtnList feedback={'bad'} type="button" onClick={onIncreamentBad}>
          <HiOutlineHandThumbDown />
          Bad
        </BtnList>
      </ListItem>
    </List>
  );
};

export default Feedback;
