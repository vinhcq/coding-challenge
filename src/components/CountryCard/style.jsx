import styled from 'styled-components';

export const StyledCountryCard = styled.div`
  background: white;
  border-radius: 8px;
  border-style: solid;
  border-width: 1px;
  border-color: ${(props) => (props.isSelected ? '#5954e9' : '#ced0d6')};
  padding: 32px;

  text-align: center;
  cursor: ${(props) => (props.isComing ? 'not-allowed' : 'pointer')};

  position: relative;
  overflow: hidden;

  .selected-badge {
    background-color: #5954e9;
    position: absolute;
    height: 50px;
    left: -25px;
    top: -25px;
    width: 55px;
    transform: rotate(-45deg);
  }
  .selected-icon {
    position: absolute;
    top: 2px;
    left: 2px;
    color: white;
  }

  .card-thumbnail {
    img {
      max-width: 70%;
    }
  }
  .card-title {
    font-size: 18px;
    font-weight: 700;
    margin-top: 8px;
  }

  .comming-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.6);
  }

  .comming-text {
    position: absolute;
    top: 50%;
    transform: translate(20%, -80%);
    padding: 8px 16px;
    max-width: fit-content;
    border-radius: 16px;
    background: #494b57;

    color: white;
    font-size: 14px;
  }
`;
