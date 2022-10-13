import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';
import { Box } from 'Box';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box display="flex" justifyContent="center" mt={4}>
      {options.map((option, index) => (
        <Button key={index} onClick={onLeaveFeedback}>
          {option}
        </Button>
      ))}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
