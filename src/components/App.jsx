import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export function App() {
  const [feedbackCounts, setFeedbackCounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = option => {
    setFeedbackCounts(prevFeedbackCounts => ({
      ...prevFeedbackCounts,
      [option]: prevFeedbackCounts[option] + 1,
    }));
  };

  const totalFeedback = () => {
    return Object.values(feedbackCounts).reduce(
      (total, value) => total + value,
      0
    );
  };

  const positiveFeedbackPercentage = () => {
    if (totalFeedback() === 0) {
      return 0;
    }
    return Math.round((feedbackCounts.good / totalFeedback()) * 100);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbackCounts)}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        {totalFeedback() !== 0 ? (
          <Statistics
            good={feedbackCounts.good}
            neutral={feedbackCounts.neutral}
            bad={feedbackCounts.bad}
            total={totalFeedback()}
            positiveFeedbackPercentage={positiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
}
