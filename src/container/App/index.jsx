import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CountryCard from 'components/CountryCard/index.jsx';
import Accordion from 'components/Accordion/index.jsx';
import { StyledApp } from './style.jsx';

const queryClient = new QueryClient();

function App() {
  return (
    <StyledApp>
      <QueryClientProvider client={queryClient}>
        <div className="app-container">
          <h1>Country selection</h1>
          <p>Please select your registered country or region:</p>
          <CountrySelection />
        </div>
      </QueryClientProvider>
    </StyledApp>
  );
}

function CountrySelection() {
  const [selectedId, setSelectedId] = useState('');
  const [supportedBanks, setSupportedBanks] = useState([]);

  async function getCountries() {
    const resp = await fetch(
      'https://my-json-server.typicode.com/fred-ng/transwap-coding-challenge/countries',
    );
    return resp.json();
  }

  const { data } = useQuery('respCountries', getCountries);

  const onSelectCountry = (country) => {
    if (country.isComing) return;
    setSelectedId(country.id);
    setSupportedBanks(country.supportedBanks);
  };

  return (
    <div className="countries">
      <Grid container spacing={3}>
        {data &&
          data.length > 0 &&
          data.map((item, key) => (
            <Grid item xs={4} key={key}>
              <CountryCard
                detail={item}
                isSelected={item.id === selectedId}
                onSelect={() => onSelectCountry(item)}
              />
            </Grid>
          ))}
      </Grid>
      {selectedId !== '' && (
        <BanksByCountry banks={supportedBanks} countryId={selectedId} />
      )}
    </div>
  );
}

function BanksByCountry({ countryId, banks }) {
  return (
    <div className="banks">
      <div className="table-list">
        <div className="title">
          Bank name
          <ExpandMoreIcon fontSize="small" />
        </div>
        <div className="status">Status</div>
      </div>
      <Accordion banks={banks} />
    </div>
  );
}

BanksByCountry.propTypes = {
  countryId: PropTypes.any,
  banks: PropTypes.array,
};

export default App;
