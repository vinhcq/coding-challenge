import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import {
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
} from './style.jsx';
import TagStatus from 'components/TagStatus/index.jsx';

function Accordion(props) {
  const { banks, ...other } = props;

  const [expanded, setExpanded] = useState(false);
  const [bankId, setBankId] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {banks &&
        banks.length > 0 &&
        banks.map((bank) => (
          <>
            <StyledAccordion
              expanded={expanded === `panel-${bank.id}`}
              onChange={handleChange(`panel-${bank.id}`)}
              onClick={() => setBankId(bank.id)}
              {...other}
            >
              <StyledAccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel-${bank.id}-content`}
                id={`panel-${bank.id}-header`}
              >
                <Typography>{bank.name}</Typography>
                <div className="status-box">
                  <TagStatus isActive={bank.isActive} />
                </div>
              </StyledAccordionSummary>
              <div className="spacing"></div>
              <BankAccordionDetails bankId={bankId} />
            </StyledAccordion>
          </>
        ))}
    </div>
  );
}

Accordion.propTypes = {
  banks: PropTypes.array,
};

function BankAccordionDetails({ bankId }) {
  async function getBankDetail(id) {
    const resp = await fetch(
      `https://my-json-server.typicode.com/fred-ng/transwap-coding-challenge/banks/${id}`,
    );
    return resp.json();
  }

  function useBank(id) {
    return useQuery(['bank', id], () => getBankDetail(id), {
      enabled: !!id,
    });
  }

  const { data, status } = useBank(bankId);

  return (
    <StyledAccordionDetails>
      {!bankId || status === 'loading' ? (
        <div className="loading">
          <CircularProgress />
        </div>
      ) : (
        <>
          <div className="detail-title">{data && data.name}</div>
          <div className="detail-logo">
            <img src={data && data.logoUrl} alt={`logo-${data.name}`} />
          </div>
          {data && data.hotline && (
            <div className="detail-contact">
              <PhoneOutlinedIcon />
              <span className="phone-num">{data.hotline}</span>
            </div>
          )}
        </>
      )}
    </StyledAccordionDetails>
  );
}

BankAccordionDetails.propTypes = {
  bankId: PropTypes.any,
};

export default Accordion;
