import styled from 'styled-components';

export const RatesTable = styled.table`
     max-width: 800px;
     width: 100%;
     margin: 20px auto;
     border-collapse: collapse;
     border: 1px solid #e0e0e0;
     font-family: 'Roboto', sans-serif;
`;

export const TableHeader = styled.thead`
     border-bottom: 2px solid #007bff;  // Soft blue line
`;

export const TableRow = styled.tr`
     &:nth-child(even) {
       background-color: #f9f9f9;
     }
`;

export const TableHeaderItem = styled.th`
     padding: 8px 12px;
     text-align: left;
     border-bottom: 2px solid #007bff;

     &:nth-child(2),
     &:nth-child(3) {
       text-align: center;
     }

     &:last-child {
       text-align: right;
     }
`;

export const TableData = styled.td`
     padding: 6px 12px;
     border-bottom: 1px solid #e0e0e0;

     &:nth-child(2),
     &:nth-child(3) {
       text-align: center;
     }

     &:last-child {
       text-align: right;
     }
`;
