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
  const { data: rates, isLoading } = useCurrencyRates();
  const [amount, setAmount] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');

  if (isLoading || (rates == null)) return <div>Loading...</div>;

  const rateForSelectedCurrency = rates.find(rate => rate.currency === selectedCurrency)?.rate;
  const convertedAmount = (amount / (rateForSelectedCurrency ?? 1)).toFixed(2);

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
              <ConversionOutput>{convertedAmount}</ConversionOutput>
            </FixedWidthAmount>
            <FormSelect defaultValue='EUR' onChange={e => { setSelectedCurrency(e.target.value); }}>
              {rates.map(rate => (
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
