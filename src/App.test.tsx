import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

const renderWithQueryProvider = (ui: React.ReactNode) => {
  const queryClient = new QueryClient();

  return render(
    <QueryClientProvider client={queryClient}>
      {ui}
    </QueryClientProvider>
  );
};

test('test with data', async () => {
  renderWithQueryProvider(<App />);
  // Assuming 'CZK' is some text present in your component only when data has been loaded.
  const rateElement = await screen.findByText('CZK');
  expect(rateElement).toBeInTheDocument();
});
