import PropTypes from 'prop-types';
import { Box } from 'Box';
import { Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Box width={500} mr={9} ml={9} mt={5}>
      <Title>{title}</Title>
      <div>{children}</div>
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.element,
  children: PropTypes.element,
};
