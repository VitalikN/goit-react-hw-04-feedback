import { useState } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { Container } from './App.styled';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good * 100) / (good + neutral + bad)) || 0;

  const onClickBtn = type => {
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  return (
    <Container>
      <Section titel="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={onClickBtn} />
      </Section>
      <Section titel="Statistics">
        <Statistics
          onGood={good}
          onNeutral={neutral}
          onBad={bad}
          total={countTotalFeedback(good, neutral, bad)}
          PositiveFeedback={countPositiveFeedbackPercentage(good, neutral, bad)}
        />
      </Section>
    </Container>
  );
};
