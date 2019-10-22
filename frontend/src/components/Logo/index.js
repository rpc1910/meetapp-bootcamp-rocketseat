import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './styles';

export default function Logo({ minimal }) {
  return <Title>{minimal ? 'M' : 'MeetApp'}</Title>;
}

Logo.defaultProps = {
  minimal: false,
};

Logo.propTypes = {
  minimal: PropTypes.bool,
};
