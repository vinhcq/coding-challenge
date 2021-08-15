import styled from 'styled-components';

export const StyledTagStatus = styled.div`
  width: 80px;
  padding: 10px 24px;
  border-radius: 6px;
  background: ${(props) => (props.isActive ? '#68bf56' : '#E0B33C')};
  text-align: center;
  .status-text {
    color: white;
    font-weight: 600;
  }
`;
