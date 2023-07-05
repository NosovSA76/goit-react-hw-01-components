import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin: 0 auto;
  margin-bottom: ${props => props.theme.space[5]}px;
  padding-top: ${props => props.theme.space[4]}px;

  max-width: 100%;
  width: ${props => props.theme.space[8]}px;

  border-radius: ${props => props.theme.radii.medium};
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  background-color: ${props => props.theme.colors.background};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.space[3]}px;
  margin-bottom: ${props => props.theme.space[4]}px;
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 150px;
  width: 150px;

  border-radius: ${props => props.theme.radii.round};
  box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;

`;

export const Info = styled.p`
  color: ${props => props.theme.colors.accent};
  text-shadow: 1px 1px 1px ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.m};
`;

export const Name = styled(Info)`
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin: ${props => props.theme.space[0]}px;
`;

export const Tag = styled(Info)`
  color: ${props => props.theme.colors.secondary};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  margin: ${props => props.theme.space[3]}px;
`;

export const Location = styled(Info)`
  color: ${props => props.theme.colors.secondary};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  margin: ${props => props.theme.space[0]}px;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${props => props.theme.space[4]}px;
  margin: ${props => props.theme.space[0]}px;
  width: 100%;
`;

export const StatsItem = styled.li`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
border: ${props => props.theme.borders.normal};
  &:hover {
    background: #ecf0f3;
    box-shadow: inset -3px -3px 7px #ffffff, inset 3px 3px 5px #ceced1;
  }
`;

export const StatsInfo = styled.span`
  margin: 0px 5px;
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
`;

export const Label = styled(StatsInfo)`
  font-weight: 400;
`;

export const Quantity = styled(StatsInfo)`
  color: ${props => props.theme.colors.black};
  text-shadow: 1px 1px 1px #fff;
  font-weight: ${props => props.theme.fontWeights.bolder};
`;