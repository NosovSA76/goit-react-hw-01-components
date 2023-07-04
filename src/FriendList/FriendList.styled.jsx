import styled from 'styled-components';
import { getRandomHexColor } from '../utils/getRandomHexColor';

export const Section = styled.section`
margin-top: ${props => props.theme.space[5]}px;;
width: ${props => props.theme.space[8]}px;
background-color: ${props => props.theme.colors.background};
justify-content: center;
`

export const Friendlist = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: ${props => props.theme.colors.background};
`

export const Avatar = styled.img`
width: ${props => props.theme.space[6]}px;
border-radius: ${props => props.theme.radii.medium};
background-color: ${props => getRandomHexColor(props.index)};
`

export const StatusOn = styled.span`
display: block;
width: ${props => props.theme.space[4]}px;
height: ${props => props.theme.space[4]}px;
border-radius: ${props => props.theme.radii.round};
background-color:  red;
`

export const StatusOf = styled.span`
display: block;
width: ${props => props.theme.space[4]}px;
height: ${props => props.theme.space[4]}px;
border-radius: ${props => props.theme.radii.round};
background-color: green;
`
export const Friend = styled.li`
display: flex;
box-sizing: border-box;
width: ${props => props.theme.space[8]}px;
align-items: center;
padding: ${props => props.theme.space[3]}px;
border: ${props => props.theme.borders.normal};
gap: ${props => props.theme.space[3]}px;
border-radius: ${props => props.theme.radii.normal};
box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
&:hover{
    background: #b8f765;
    box-shadow: inset -3px -3px 7px #ffffff, inset 3px 3px 5px #ceced1;
  }

`
export const Name = styled.p`
width: 20%;
font-size: ${props => props.theme.fontSizes.m};
font-weight: ${props => props.theme.fontWeights.bold};
`
