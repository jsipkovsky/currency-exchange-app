import { rest } from 'msw';
import { MOCK_URL, rawData } from './mockData';

export const handlers = [
  rest.get(MOCK_URL, async (req, res, ctx) => {
    return await res(ctx.status(200), ctx.text(rawData));
  }),
];
