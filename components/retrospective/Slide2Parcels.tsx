import { Text, Image } from 'react-native';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 24px;
  padding-top: 60px;
`;

const Headline = styled(Animatable.Text)`
  font-size: 36px;
  font-weight: 800;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 20px;
`;

const NumberCard = styled(Animatable.View)`
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
  margin-bottom: 20px;
`;

const NumberText = styled.Text`
  font-size: 88px;
  font-weight: 900;
  color: #0A1B5C;
  text-align: center;
  letter-spacing: -2px;
`;

const ColisText = styled(Animatable.Text)`
  font-size: 40px;
  font-weight: 800;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 30px;
`;

const DecorationArea = styled.View`
  width: 100%;
  height: 200px;
  position: relative;
  margin-bottom: 20px;
`;


const ParcelContainer = styled.View`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50px) translateY(-50px);
`;

const Parcel = styled(Animatable.View)`
  align-items: center;
`;

const HeartsContainer = styled(Animatable.View)`
  flex-direction: row;
  margin-bottom: 8px;
  gap: 4px;
`;

const Heart = styled.Text`
  font-size: 20px;
`;

const HeartSmall = styled(Heart)`
  font-size: 16px;
  opacity: 0.9;
`;

const BottomTextContainer = styled(Animatable.View)`
  padding-horizontal: 16px;
`;

const BottomText = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #FFFFFF;
  text-align: center;
  line-height: 26px;
`;

interface Slide2ParcelsProps {
  parcelsDelivered: number;
  topPercentage?: number;
}

export default function Slide2Parcels({ parcelsDelivered = 560, topPercentage = 5 }: Slide2ParcelsProps) {
  const message = parcelsDelivered >= 100
    ? `Bravo, vous faites partie du top ${topPercentage}% des meilleurs Keepers 👏`
    : 'Bravo continuez comme ça ! 💪';

  return (
    <Content>
      <Headline
        animation="fadeInUp"
        duration={800}
        delay={200}
      >
        Vous avez livré
      </Headline>

      <NumberCard
        animation="bounceIn"
        duration={1000}
        delay={600}
      >
        <NumberText>{parcelsDelivered}</NumberText>
      </NumberCard>

      <ColisText
        animation="slideInUp"
        duration={600}
        delay={1000}
      >
        colis
      </ColisText>

      <DecorationArea>
        <ParcelContainer>
          <Parcel
            animation="pulse"
            iterationCount="infinite"
            duration={2000}
            delay={1400}
          >
            <HeartsContainer
              animation="fadeInUp"
              duration={600}
              delay={1600}
            >
              <Heart>❤️</Heart>
              <HeartSmall>❤️</HeartSmall>
            </HeartsContainer>

            <Image
              source={require('@/assets/images/colis_rose.png')}
              style={{ width: 120, height: 120 }}
              resizeMode="contain"
            />
          </Parcel>
        </ParcelContainer>
      </DecorationArea>

      <BottomTextContainer
        animation="fadeIn"
        duration={800}
        delay={2000}
      >
        <BottomText>
          {message}
        </BottomText>
      </BottomTextContainer>
    </Content>
  );
}
