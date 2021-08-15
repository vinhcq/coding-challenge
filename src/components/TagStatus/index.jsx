import React from 'react';
import PropTypes from 'prop-types';
import { StyledTagStatus } from './style.jsx';

function TagStatus(props) {
  const { isActive } = props;

  return (
    <StyledTagStatus isActive={isActive}>
      <div className="status-text">{isActive ? 'Active' : 'Inactive'}</div>
    </StyledTagStatus>
  );
}

TagStatus.propTypes = {
  isActive: PropTypes.bool,
};

export default TagStatus;
