import React from 'react';
import PropTypes from 'prop-types';
import { Container, Btn } from './FeedbackOptions.styled';

const options = ['good', 'neutral', 'bad'];
export const FeedbackOptions = ({ onLeaveFeedback }) => (
  <Container>
    {options.map(el => (
      <Btn key={el} type="button" onClick={() => onLeaveFeedback(el)}>
        {el[0].toUpperCase() + el.slice(1)}
      </Btn>
    ))}
  </Container>
);
FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
