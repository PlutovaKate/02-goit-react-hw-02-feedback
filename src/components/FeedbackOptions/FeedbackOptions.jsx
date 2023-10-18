import React from 'react';

const Feedback = ({
  onIncreamentGood,
  onIncreamentNeutral,
  onIncreamentBad,
}) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
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
    </div>
  );
};

export default Feedback;
