import React from 'react';

const Feedback = ({
  onIncreamentGood,
  onIncreamentNeutral,
  onIncreamentBad,
}) => {
  return (
    <ul>
      <li>
        <button type="button" onClick={onIncreamentGood}>
          Good
        </button>
      </li>
      <li>
        <button type="button" onClick={onIncreamentNeutral}>
          Neutral
        </button>
      </li>
      <li>
        <button type="button" onClick={onIncreamentBad}>
          Bad
        </button>
      </li>
    </ul>
  );
};

export default Feedback;
