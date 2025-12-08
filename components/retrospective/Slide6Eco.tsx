import { Text, View } from 'react-native';
import { useEffect } from 'react';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  withDelay,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';

const Container = styled(LinearGradient).attrs({
  colors: ['#1B2A7C', '#0A1B5C'],
  locations: [0, 1],
})`
  flex: 1;
  padding-top: 80px;
  padding-horizontal: 24px;
`;

const EarthCharacterContainer = styled(Animated.View)`
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

const HeadlineContainer = styled(Animated.View)`
  margin-bottom: 30px;
`;

const HeadlineText = styled.Text`
  font-size: 36px;
  font-weight: 800;
  color: #FFFFFF;
  text-align: left;
  line-height: 42px;
`;

const CO2Container = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 40px;
`;

const CO2Card = styled(Animated.View)`
  background-color: #FF6B9D;
  border-radius: 16px;
  padding: 32px;
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


const BottomTextContainer = styled(Animated.View)`
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
  // Animation values
  const headlineOpacity = useSharedValue(0);
  const headlineTranslateY = useSharedValue(10);
  const cardScale = useSharedValue(0.6);
  const cardRotation = useSharedValue(-5);
  const mascotTranslateY = useSharedValue(0);
  const mascotRotation = useSharedValue(0);
  const footerOpacity = useSharedValue(0);

  useEffect(() => {
    // Headline: fade-in + upward motion
    headlineOpacity.value = withTiming(1, { duration: 400 });
    headlineTranslateY.value = withTiming(0, { duration: 400 });

    // CO2 card: scale-in with rotation and spring bounce
    cardScale.value = withDelay(200, withSpring(1, { damping: 10, stiffness: 100 }));
    cardRotation.value = withDelay(
      200,
      withTiming(3, { duration: 600 })
    );

    // Mascot: floating loop with rotation oscillation
    mascotTranslateY.value = withDelay(
      300,
      withRepeat(
        withSequence(
          withTiming(-8, { duration: 1500 }),
          withTiming(0, { duration: 1500 })
        ),
        -1,
        false
      )
    );
    mascotRotation.value = withDelay(
      400,
      withRepeat(
        withSequence(
          withTiming(-3, { duration: 2000 }),
          withTiming(3, { duration: 2000 })
        ),
        -1,
        true
      )
    );

    // Footer: fade-in with delay
    footerOpacity.value = withDelay(700, withTiming(1, { duration: 400 }));
  }, []);

  const headlineStyle = useAnimatedStyle(() => ({
    opacity: headlineOpacity.value,
    transform: [{ translateY: headlineTranslateY.value }],
  }));

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: cardScale.value },
      { rotate: `${cardRotation.value}deg` },
    ],
  }));

  const mascotStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: mascotTranslateY.value },
      { rotate: `${mascotRotation.value}deg` },
    ],
  }));

  const footerStyle = useAnimatedStyle(() => ({
    opacity: footerOpacity.value,
  }));

  return (
    <Container>
      {/* Earth character with legs */}
      <EarthCharacterContainer style={mascotStyle}>
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
      <HeadlineContainer style={headlineStyle}>
        <HeadlineText>Votre quartier{'\n'}respire mieux :</HeadlineText>
      </HeadlineContainer>

      {/* CO2 card and text */}
      <CO2Container>
        <CO2Card style={cardStyle}>
          <CO2Number>{co2Saved}</CO2Number>
        </CO2Card>

        <CO2TextContainer>
          <CO2Text>kg de CO2 en{'\n'}moins grâce à{'\n'}vous !</CO2Text>
        </CO2TextContainer>
      </CO2Container>

      {/* Bottom message */}
      <BottomTextContainer style={footerStyle}>
        <BottomText>C'est votre côté écolo ça 💪</BottomText>
      </BottomTextContainer>
    </Container>
  );
}
