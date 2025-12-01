import { Text } from 'react-native';
import styled from 'styled-components/native';

const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 24px;
  padding-top: 40px;
`;

const HeadlineContainer = styled.View`
  margin-bottom: 20px;
`;

const HeadlinePart1 = styled.Text`
  font-size: 36px;
  font-weight: 800;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 4px;
`;

const HeadlinePart2 = styled.Text`
  font-size: 36px;
  font-weight: 800;
  color: #FFFFFF;
  text-align: center;
`;

const NumberCard = styled.View`
  background-color: #FF6B9D;
  border-radius: 16px;
  padding-vertical: 24px;
  padding-horizontal: 40px;
  transform: rotate(-5deg);
  shadow-color: #000;
  shadow-offset: 0px 6px;
  shadow-opacity: 0.4;
  shadow-radius: 8px;
  elevation: 8;
  margin-vertical: 20px;
`;

const NumberText = styled.Text`
  font-size: 88px;
  font-weight: 900;
  color: #0A1B5C;
  text-align: center;
  letter-spacing: -2px;
`;

const HeadlinePart3 = styled.Text`
  font-size: 36px;
  font-weight: 800;
  color: #FFFFFF;
  text-align: center;
  line-height: 44px;
  margin-bottom: 20px;
`;


const BottomTextContainer = styled.View`
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  padding-horizontal: 24px;
`;

const BottomText = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #FFFFFF;
  text-align: center;
  line-height: 26px;
`;

interface Slide4NeighborsProps {
  neighborsHelped: number;
}

export default function Slide4Neighbors({ neighborsHelped = 500 }: Slide4NeighborsProps) {
  return (
    <Content>
      <HeadlineContainer>
        <HeadlinePart1>Vous avez refait</HeadlinePart1>
        <HeadlinePart2>la journée de</HeadlinePart2>
      </HeadlineContainer>

      <NumberCard>
        <NumberText>{neighborsHelped}</NumberText>
      </NumberCard>

      <HeadlinePart3>
        voisins dans{'\n'}votre quartier !
      </HeadlinePart3>

      <BottomTextContainer>
        <BottomText>
          Votre sourire est désormais plus{'\n'}connu que celui du facteur 😁
        </BottomText>
      </BottomTextContainer>
    </Content>
  );
}
