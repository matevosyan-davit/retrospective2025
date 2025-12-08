import { Text, View, ImageBackground, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const Container = styled(ImageBackground)`
  width: 100%;
  height: ${SCREEN_HEIGHT}px;
  padding-top: 80px;
  padding-horizontal: 24px;
`;

const EarthCharacterContainer = styled(Animatable.View)`
  align-items: flex-start;
  margin-left: 20px;
  margin-bottom: 40px;
`;

const EarthCharacter = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #8BA3E8;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const EarthStripe1 = styled.View`
  position: absolute;
  width: 100px;
  height: 25px;
  background-color: #FF6B9D;
  top: 15px;
  border-radius: 50px;
`;

const EarthStripe2 = styled.View`
  position: absolute;
  width: 100px;
  height: 20px;
  background-color: #FF6B9D;
  bottom: 20px;
  border-radius: 50px;
`;

const EyesContainer = styled.View`
  flex-direction: row;
  gap: 12px;
  z-index: 10;
  margin-bottom: -5px;
`;

const Eye = styled.View`
  width: 28px;
  height: 32px;
  border-radius: 14px;
  background-color: #FFFFFF;
  justify-content: center;
  align-items: center;
  border-width: 3px;
  border-color: #000000;
`;

const Pupil = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: #000000;
`;

const LeftLeg = styled.View`
  position: absolute;
  bottom: -30px;
  left: 15px;
  width: 20px;
  height: 35px;
  background-color: #8BA3E8;
  border-radius: 10px;
`;

const RightLeg = styled.View`
  position: absolute;
  bottom: -30px;
  right: 15px;
  width: 20px;
  height: 35px;
  background-color: #8BA3E8;
  border-radius: 10px;
`;

const LeftFoot = styled.View`
  position: absolute;
  bottom: -35px;
  left: 5px;
  width: 30px;
  height: 15px;
  background-color: #8BA3E8;
  border-radius: 8px;
`;

const RightFoot = styled.View`
  position: absolute;
  bottom: -35px;
  right: 5px;
  width: 30px;
  height: 15px;
  background-color: #8BA3E8;
  border-radius: 8px;
`;

const HeadlineContainer = styled(Animatable.View)`
  margin-bottom: 30px;
`;

const HeadlineText = styled.Text`
  font-size: 36px;
  font-weight: 800;
  color: #FFFFFF;
  text-align: left;
  line-height: 42px;
`;

const CO2Container = styled(Animatable.View)`
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 40px;
`;

const CO2Card = styled.View`
  background-color: #FF6B9D;
  border-radius: 16px;
  padding: 32px;
  transform: rotate(-8deg);
  shadow-color: #000;
  shadow-offset: 0px 8px;
  shadow-opacity: 0.4;
  shadow-radius: 10px;
  elevation: 10;
  min-width: 140px;
`;

const CO2Number = styled.Text`
  font-size: 72px;
  font-weight: 900;
  color: #0A1B5C;
  line-height: 72px;
  text-align: center;
`;

const CO2TextContainer = styled.View`
  margin-left: 20px;
  margin-top: 20px;
  flex: 1;
`;

const CO2Text = styled.Text`
  font-size: 28px;
  font-weight: 800;
  color: #FFFFFF;
  line-height: 34px;
`;


const BottomTextContainer = styled(Animatable.View)`
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  padding-horizontal: 24px;
`;

const BottomText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #FFFFFF;
  text-align: center;
`;

interface Slide6EcoProps {
  co2Saved: number;
}

export default function Slide6Eco({ co2Saved = 100 }: Slide6EcoProps) {
  return (
    <Container
      source={require('../../assets/images/fond_bleu_nuage.png')}
      resizeMode="stretch"
    >
      {/* Earth character with legs */}
      <EarthCharacterContainer
        animation="bounce"
        iterationCount="infinite"
        duration={2000}
        delay={600}
      >
        <View style={{ height: 140 }}>
          <EarthCharacter>
            <EarthStripe1 />
            <EarthStripe2 />

            <EyesContainer>
              <Eye>
                <Pupil />
              </Eye>
              <Eye>
                <Pupil />
              </Eye>
            </EyesContainer>

            <LeftLeg />
            <RightLeg />
            <LeftFoot />
            <RightFoot />
          </EarthCharacter>
        </View>
      </EarthCharacterContainer>

      {/* Headline */}
      <HeadlineContainer
        animation="fadeInUp"
        duration={800}
        delay={200}
      >
        <HeadlineText>Votre quartier{'\n'}respire mieux :</HeadlineText>
      </HeadlineContainer>

      {/* CO2 card and text */}
      <CO2Container
        animation="slideInLeft"
        duration={800}
        delay={800}
      >
        <CO2Card>
          <CO2Number>{co2Saved}</CO2Number>
        </CO2Card>

        <CO2TextContainer>
          <CO2Text>kg de CO2 en{'\n'}moins grâce à{'\n'}vous !</CO2Text>
        </CO2TextContainer>
      </CO2Container>

      {/* Bottom message */}
      <BottomTextContainer
        animation="fadeIn"
        duration={800}
        delay={1400}
      >
        <BottomText>C'est votre côté écolo ça 💪</BottomText>
      </BottomTextContainer>
    </Container>
  );
}
