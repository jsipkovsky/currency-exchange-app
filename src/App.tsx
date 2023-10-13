import React, { useState } from 'react';
import useCurrencyRates from './features/useCurrencyRates';
import { Container } from './styles/mainStyles';
import { RatesTable, TableData, TableHeader, TableHeaderItem, TableRow } from './styles/tableStyles';
import {
  ConversionIcon,
  ConversionOutput,
  ConversionPhrase,
  ConversionSegment,
  FixedWidthAmount,
  FormContainer,
  FormHeader,
  FormInput,
  FormSelect
} from './styles/formStyles';


function App() {
  const { data: rates, isLoading, error, isError } = useCurrencyRates();
  const [amount, setAmount] = useState(1);
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');

  if (isError) {
    const errorMessage = (error as Error).message;
    return <div>{errorMessage}</div>;
  }

  if (isLoading || (rates == null) || rates.length === 0) return <div>Loading...</div>;

  const selectedCurrencyData = rates.find(rate => rate.currency === selectedCurrency);
  if (selectedCurrencyData == null) return <div>Error: Currency data not found.</div>;

  const rate = selectedCurrencyData.rate;
  const currencyAmount = selectedCurrencyData.amount;

  const rateForSelectedCurrency = rate / currencyAmount;
  const convertedAmount = (amount / rateForSelectedCurrency).toFixed(2);

  return (
    <Container>
      <FormContainer>
        <FormHeader>Conversion Form</FormHeader>
        <ConversionPhrase>
          <ConversionSegment>
            <FixedWidthAmount>
              <FormInput
                type="number"
                min="0"
                max="99999999" // 8 digits max
                value={amount}
                onChange={e => { setAmount(parseFloat(e.target.value)); }}
              />
            </FixedWidthAmount>
          </ConversionSegment>
          <span>CZK</span>
          <ConversionIcon>=</ConversionIcon>
          <ConversionSegment>
            <FixedWidthAmount>
              <ConversionOutput>{isNaN(parseFloat(convertedAmount)) ? '0' : convertedAmount}</ConversionOutput>
            </FixedWidthAmount>
            <FormSelect defaultValue='EUR' onChange={e => { setSelectedCurrency(e.target.value); }}>
              {rates
                .slice()
                .sort((a, b) => a.currency.localeCompare(b.currency))
                .map(rate => (
                  <option key={rate.currency} value={rate.currency}>
                    {rate.currency}
                  </option>
                ))}
            </FormSelect>
          </ConversionSegment>
        </ConversionPhrase>
      </FormContainer>
      <RatesTable>
        <TableHeader>
          <TableRow>
            <TableHeaderItem>Country</TableHeaderItem>
            <TableHeaderItem>Currency</TableHeaderItem>
            <TableHeaderItem>Amount</TableHeaderItem>
            <TableHeaderItem>Rate</TableHeaderItem>
          </TableRow>
        </TableHeader>
        <tbody>
          {rates.map(rate => (
            <TableRow key={rate.currency}>
              <TableData>{rate.country}</TableData>
              <TableData>{rate.currency}</TableData>
              <TableData>{rate.amount}</TableData>
              <TableData>{rate.rate}</TableData>
            </TableRow>
          ))}
        </tbody>
      </RatesTable>
    </Container>
  );
}

export default App;
