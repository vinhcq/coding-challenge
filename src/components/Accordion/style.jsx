import styled from 'styled-components';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';

export const StyledAccordion = styled(Accordion)`
  .spacing {
    height: 1px;
    width: 100%;
    padding: 2px 0;
    background: #f2f3fa;
  }
  &.MuiAccordion-root {
    position: unset;
    margin-bottom: 6px;
  }
  &.MuiAccordion-root.Mui-expanded {
    margin: 6px 0;
  }
  &.MuiPaper-elevation1 {
    box-shadow: unset;
  }
  &.MuiAccordion-rounded {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    &:first-child {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }
`;

export const StyledAccordionSummary = styled(AccordionSummary)`
  &.MuiAccordionSummary-root {
    min-height: 64px;
    padding: 0px 16px 0 24px;
  }
  .MuiAccordionSummary-content {
    align-items: center;
    justify-content: space-between;
    padding-right: 24px;
    .Mui-expanded {
      margin: 12px 0 !important;
    }
  }
  .MuiAccordionSummary-content.Mui-expanded {
    margin: 12px 0;
  }
`;

export const StyledAccordionDetails = styled(AccordionDetails)`
  &.MuiAccordionDetails-root {
    display: block;

    .loading {
      width: 100%;
      padding: 30px;
    }

    .detail-title {
      padding-top: 24px;
      font-size: 24px;
      font-weight: 700;
    }

    .detail-logo {
      margin: 12px 0;
      img {
        width: 320px;
      }
    }

    .detail-contact {
      color: #0965c2;
      display: flex;
      align-items: center;
      .phone-num {
        margin-left: 6px;
        font-weight: 500;
        font-size: 17px;
        font-style: italic;
        text-decoration: underline;
      }
    }
  }
`;
