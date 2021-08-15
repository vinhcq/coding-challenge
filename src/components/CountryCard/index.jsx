import React from 'react';
import PropTypes from 'prop-types';
import CheckIcon from '@material-ui/icons/Check';
import { StyledCountryCard } from './style.jsx';

function CountryCard(props) {
  const { detail, isSelected, onSelect } = props;
  return (
    <StyledCountryCard
      isSelected={isSelected}
      isComing={detail.isComing}
      onClick={onSelect}
    >
      {isSelected && (
        <>
          <div className="selected-badge"></div>
          <div className="selected-icon">
            <CheckIcon fontSize="small" />
          </div>
        </>
      )}
      <div className="card-thumbnail">
        <img src={detail?.thumbnailUrl} alt="" />
      </div>
      <div className="card-title">{detail?.name}</div>
      {detail && detail.isComing && (
        <>
          <div className="comming-wrapper"></div>
          <div className="comming-text">Comming soon...</div>
        </>
      )}
    </StyledCountryCard>
  );
}

CountryCard.propTypes = {
  detail: PropTypes.any,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
};

export default CountryCard;
