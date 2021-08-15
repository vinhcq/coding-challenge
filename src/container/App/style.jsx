import styled from 'styled-components';

export const StyledApp = styled.div`
  height: 100%;
  width: 100%;
  .app-container {
    max-width: 800px;
    margin: 0 auto;
    padding-bottom: 24px;
    h1 {
      margin-top: 0;
    }
  }
  .banks {
    margin-top: 24px;
    .table-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 16px;
      .title {
        color: #5954e9;
        font-size: 14px;
        font-weight: 700;
        padding-left: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .MuiSvgIcon-root {
          margin-left: 4px;
        }
      }
      .status {
        color: #a5a5a7;
        font-size: 14px;
        font-weight: 700;
        padding-right: 120px;
      }
    }
  }
`;
