import { Text, ImageBackground, Dimensions, Image } from 'react-native';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const BackgroundImage = styled(ImageBackground)`
  width: 100%;
  height: ${SCREEN_HEIGHT}px;
`;

const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 24px;
  padding-top: 40px;
`;

const Headline = styled(Animatable.Text)`
  font-size: 24px;
  font-weight: 800;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 16px;
`;

const NumberCard = styled(Animatable.View)`
  background-color: #FF6B9D;
  border-radius: 16px;
  padding-vertical: 20px;
  padding-horizontal: 32px;
  transform: rotate(-5deg);
  shadow-color: #000;
  shadow-offset: 0px 6px;
  shadow-opacity: 0.4;
  shadow-radius: 8px;
  elevation: 8;
  margin-bottom: 16px;
`;

const NumberText = styled.Text`
  font-size: 64px;
  font-weight: 900;
  color: #0A1B5C;
  text-align: center;
  letter-spacing: -2px;
`;

const ColisText = styled(Animatable.Text)`
  font-size: 28px;
  font-weight: 800;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 20px;
`;

const DecorationArea = styled.View`
  align-items: center;
  margin-bottom: 16px;
`;

const ParcelImage = styled(Animatable.Image)`
  width: 140px;
  height: 140px;
`;

const BottomTextContainer = styled(Animatable.View)`
  padding-horizontal: 16px;
  margin-bottom: 20px;
`;

const BottomText = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #FFFFFF;
  text-align: center;
  line-height: 24px;
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
    <BackgroundImage
      source={require('../../assets/images/fond_bleu_nuage.png')}
      resizeMode="stretch"
    >
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
          <ParcelImage
            source={require('../../assets/images/colis_rose.png')}
            resizeMode="contain"
            animation="bounceIn"
            duration={1000}
            delay={1400}
          />
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
    </BackgroundImage>
  );
}
