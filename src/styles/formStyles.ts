import styled from 'styled-components';

export const ConversionPhrase = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    font-size: 1.2rem;
`;

export const ConversionSegment = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const ConversionOutput = styled.span`
    flex: 2;
    font-size: inherit;
    margin: 0 10px;
    text-align: right;
`;

export const ConversionIcon = styled.span`
    font-size: 2rem; 
    flex-shrink: 0;
    margin: 0 20px;
`;

export const FixedWidthAmount = styled.div`
    width: 150px;
    background-color: #f3f4f6;  
    border-radius: 5px;  
    padding: 8px 16px;  
    text-align: right;
`;

export const FormSelect = styled.select`
    font-size: 1.2rem;
    border-radius: 5px;
    padding: 6px 12px;
    border: 1px solid #d1d5db;
    // appearance: none;
    &:focus {
        border-color: #007bff;
    }
`;

export const FormLabel = styled.label`
    margin-bottom: 0;
    color: #333;
    font-weight: 500;
    font-size: inherit;
`;

export const FormInput = styled.input`
    flex: 2;
    padding: 8px 10px;
    border-radius: 4px;
    border: 1px solid #dcdcdc;
    font-size: inherit;
    transition: border-color 0.2s;

    &:focus {
        border-color: #007bff;
    }
`;

export const FormContainer = styled.div`
    // max-width: 800px;
    background-color: #f8f8f8;
    padding: 20px 30px;
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    font-family: 'Roboto', sans-serif;
`;

export const FormHeader = styled.h2`
    font-size: 16px;
    margin-bottom: 20px;
    color: #333;
    font-weight: 600;
    text-align: center;
    padding-top: 10px;
    // border-top: 3px solid #007bff;
`;

