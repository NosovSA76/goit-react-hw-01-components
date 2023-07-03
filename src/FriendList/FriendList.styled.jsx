import styled from 'styled-components';

export const Section = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: ${props => props.theme.space[8]}px;
background-color: ${props => props.theme.colors.background};
`

export const Friendlist = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: ${props => props.theme.space[8]}px;
background-color: ${props => props.theme.colors.background};
`

export const Avatar = styled.img`
font-weight: ${props => props.theme.fontWeights.semiBold};
font-size: ${props => props.theme.fontSizes.l};
`

export const Status = styled.span`
width: 100%;
list-style: none;
display: flex;
margin: ${props => props.theme.space[0]};
padding: ${props => props.theme.space[0]};
text-aling: center;
`
export const Frend = styled.li`
width: 20%;
font-size: ${props => props.theme.fontSizes.m};
text-align: center;
border: ${props => props.theme.borders.normal};
`
export const Name = styled.p`
width: 20%;
font-size: ${props => props.theme.fontSizes.m};
text-align: center;
border: ${props => props.theme.borders.normal};
`
