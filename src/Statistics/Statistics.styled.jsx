import styled from 'styled-components';
import { getRandomHexColor } from '../utils/getRandomHexColor';

export const Section = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: ${props => props.theme.space[8]}px;
background-color: ${props => props.theme.colors.background};
border-radius: ${props => props.theme.radii.normal};
box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
`

export const Title = styled.p`
font-weight: ${props => props.theme.fontWeights.semiBold};
font-size: ${props => props.theme.fontSizes.l};
`

export const StatList = styled.ul`
width: 100%;
list-style: none;
display: flex;
margin: ${props => props.theme.space[0]};
padding: ${props => props.theme.space[0]};
text-aling: center;
`
export const StatListItem = styled.li`
width: 20%;
font-size: ${props => props.theme.fontSizes.m};
text-align: center;
border: ${props => props.theme.borders.normal};
background-color: ${props => getRandomHexColor(props.index)};
`
export const Label = styled.p`
font-size: ${props => props.theme.fontSizes.xs};
font-weight: ${props => props.theme.fontWeights.semiBold};
color: ${props => props.theme.colors.white};
`
export const Percentage = styled.p`
font-weight: ${props => props.theme.fontWeights.semiBold};
color:  ${props => props.theme.colors.white};
`
