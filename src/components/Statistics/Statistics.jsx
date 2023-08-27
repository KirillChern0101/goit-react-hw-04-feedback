import propTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => (
  <ul className={css.feedbackList}>
    <li className={css.feedbackListItem}>Good: {good}</li>
    <li className={css.feedbackListItem}>Neutral: {neutral}</li>
    <li className={css.feedbackListItem}>Bad: {bad}</li>
    <li className={css.feedbackListItem}>Total: {total}</li>
    <li className={css.feedbackListItem}>
      positiveFeedbackPercentage: {positiveFeedbackPercentage} %
    </li>
  </ul>
);

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positiveFeedbackPercentage: propTypes.number.isRequired,
};
