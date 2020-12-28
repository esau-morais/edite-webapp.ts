import styled from 'styled-components';

export const CustomSelect = styled.select`
  // Spacement
  padding: 0.375rem 0.875rem;

  // Font
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.25rem;

  // Colors
  background-color: var(--primary-background);
  color: var(--primary-foreground);

  border-radius: 5px;

  cursor: pointer;

  // Options
  options {
    margin-top: 0.5rem
  }
`;
