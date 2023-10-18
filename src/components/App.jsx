import { Component } from 'react';
import Feedback from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncreamentGood = value => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  handleIncreamentNeutral = value => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  handleIncreamentBad = value => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  totalFeedback = value =>
    Number(this.state.good + this.state.neutral + this.state.bad);

  positiveFeedback = value =>
    Math.round((this.state.good / this.totalFeedback()) * 100) || 0;

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <section title="Please leave feedback">
          <Feedback
            onIncreamentGood={this.handleIncreamentGood}
            onIncreamentNeutral={this.handleIncreamentNeutral}
            onIncreamentBad={this.handleIncreamentBad}
          />
        </section>

        <section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.totalFeedback()}
            positivePercentage={this.positiveFeedback()}
          />
        </section>
      </div>
    );
  }
}
