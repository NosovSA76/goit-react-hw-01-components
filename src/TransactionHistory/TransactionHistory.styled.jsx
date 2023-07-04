import styled from 'styled-components';


export const Section = styled.table`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.m};
  width: 512px;
  background-color: ${props => props.theme.colors.background};
  table-layout: fixed;
  margin-top: ${props => props.theme.space[5]}px;
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  border-radius: ${props => props.theme.radii.medium};
`;


export const Transaction = styled.tr`
text-align: center;
    &:hover {
      background: #d6f299;
      box-shadow: inset -3px -3px 7px #ffffff, inset 3px 3px 5px #ceced1;
  }  
    &:nth-child(even) {
      background-color: ${props => props.theme.colors.secondary};
    &:hover {
      background: #c2baba;
      box-shadow: inset -3px -3px 7px #ffffff, inset 3px 3px 5px #c2baba;
  } 
  }
`;



export const Type = styled.td`
padding-left: ${props => props.theme.space[6]}px;
text-align: left;
text-transform: capitalize;
height: 30px;
`;

export const Amount = styled.td`

`;

export const Currency = styled.td`

`;





