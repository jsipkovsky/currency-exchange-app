import { useQuery } from 'react-query';
import { BASE_URL } from '../config/environment';

interface CurrencyRate {
  amount: number;
  country: string;
  currency: string;
  rate: number;
}

const fetchRates = async (): Promise<CurrencyRate[]> => {
  const response = await fetch(`${BASE_URL}/api/currency-rates`);
  const data = await response.text();
  // Parse text by lines, skip first two lines, then parse each line by '|'
  const lines = data.split('\n').filter(line => line.trim() !== '').slice(2);
  return lines.map(line => {
    const parts = line.split('|');
    return {
      amount: parseFloat(parts[2].replace(',', '.')),
      country: parts[0],
      currency: parts[3],
      rate: parseFloat(parts[4].replace(',', '.')),
    };
  }).filter(rate => (rate.currency.length > 0) && rate.rate);
};

const useCurrencyRates = () => {
  return useQuery('currencyRates', fetchRates);
};

export default useCurrencyRates;
