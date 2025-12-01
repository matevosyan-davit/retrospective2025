import { Text } from 'react-native';
import styled from 'styled-components/native';

const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 24px;
`;

const TitleCard = styled.View`
  background-color: #FF6B9D;
  border-radius: 20px;
  padding-vertical: 32px;
  padding-horizontal: 24px;
  width: 100%;
  max-width: 360px;
  position: relative;
  margin-bottom: 32px;
`;

const RetrospectiveText = styled.Text`
  font-size: 52px;
  font-weight: 900;
  color: #0A1B5C;
  text-align: center;
  letter-spacing: -1.5px;
  line-height: 56px;
`;

const StampContainer = styled.View`
  position: absolute;
  bottom: -16px;
  right: 24px;
  background-color: #A5C4FF;
  padding-horizontal: 24px;
  padding-vertical: 10px;
  border-radius: 10px;
  transform: rotate(8deg);
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 6px;
  elevation: 6;
`;

const StampText = styled.Text`
  font-size: 32px;
  font-weight: 900;
  color: #0A1B5C;
  letter-spacing: 2px;
`;

const Subtitle = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: #FFFFFF;
  text-align: center;
  letter-spacing: 0.5px;
`;

export default function Slide1Intro() {
  return (
    <Content>
      <TitleCard>
        <RetrospectiveText>RÉTROSPECTIVE</RetrospectiveText>

        <StampContainer>
          <StampText>2025</StampText>
        </StampContainer>
      </TitleCard>

      <Subtitle>Votre année de Keeper</Subtitle>
    </Content>
  );
}
