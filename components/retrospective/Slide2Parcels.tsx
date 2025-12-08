import { useEffect } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  withDelay,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';

const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 24px;
  padding-top: 60px;
`;

const Headline = styled(Animated.Text)`
  font-size: 36px;
  font-weight: 800;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 20px;
`;

const NumberCard = styled(Animated.View)`
  background-color: #FF6B9D;
  border-radius: 16px;
  padding-vertical: 24px;
  padding-horizontal: 40px;
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

const ColisText = styled.Text`
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


const ParcelContainer = styled(Animated.View)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50px) translateY(-50px);
`;

const Parcel = styled.View`
  align-items: center;
`;

const HeartsContainer = styled.View`
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

const ParcelBox = styled.View`
  width: 80px;
  height: 80px;
  background-color: #FF8E7A;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  border-width: 3px;
  border-color: #FF6B5C;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 6px;
  elevation: 6;
`;

const Eyes = styled.View`
  flex-direction: row;
  gap: 16px;
`;

const Eye = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: #FFFFFF;
  justify-content: center;
  align-items: center;
`;

const Pupil = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #000000;
`;

const BottomTextContainer = styled.View`
  padding-horizontal: 16px;
`;

const BottomText = styled(Animated.Text)`
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

  const headlineOpacity = useSharedValue(0);
  const headlineY = useSharedValue(10);
  const numberScale = useSharedValue(0.6);
  const numberRotate = useSharedValue(-5);
  const mascotY = useSharedValue(0);
  const mascotRotate = useSharedValue(0);
  const bottomOpacity = useSharedValue(0);

  useEffect(() => {
    headlineOpacity.value = withTiming(1, { duration: 400 });
    headlineY.value = withTiming(0, { duration: 400 });

    numberScale.value = withDelay(200, withSpring(1, { damping: 8, stiffness: 100 }));
    numberRotate.value = withDelay(200, withSpring(3, { damping: 8, stiffness: 100 }));

    mascotY.value = withDelay(400, withRepeat(
      withSequence(
        withTiming(-8, { duration: 1500 }),
        withTiming(0, { duration: 1500 })
      ),
      -1,
      false
    ));

    mascotRotate.value = withDelay(400, withRepeat(
      withSequence(
        withTiming(-3, { duration: 2000 }),
        withTiming(3, { duration: 2000 })
      ),
      -1,
      true
    ));

    bottomOpacity.value = withDelay(700, withTiming(1, { duration: 400 }));
  }, []);

  const headlineStyle = useAnimatedStyle(() => ({
    opacity: headlineOpacity.value,
    transform: [{ translateY: headlineY.value }],
  }));

  const numberStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: numberScale.value },
      { rotate: `${numberRotate.value}deg` },
    ],
  }));

  const mascotStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: mascotY.value },
      { rotate: `${mascotRotate.value}deg` },
    ],
  }));

  const bottomStyle = useAnimatedStyle(() => ({
    opacity: bottomOpacity.value,
  }));

  return (
    <Content>
      <Headline style={headlineStyle}>Vous avez livré</Headline>

      <NumberCard style={numberStyle}>
        <NumberText>{parcelsDelivered}</NumberText>
      </NumberCard>

      <ColisText>colis</ColisText>

      <DecorationArea>
        <ParcelContainer style={mascotStyle}>
          <Parcel>
            <HeartsContainer>
              <Heart>❤️</Heart>
              <HeartSmall>❤️</HeartSmall>
            </HeartsContainer>

            <ParcelBox>
              <Eyes>
                <Eye>
                  <Pupil />
                </Eye>
                <Eye>
                  <Pupil />
                </Eye>
              </Eyes>
            </ParcelBox>
          </Parcel>
        </ParcelContainer>
      </DecorationArea>

      <BottomTextContainer>
        <BottomText style={bottomStyle}>
          {message}
        </BottomText>
      </BottomTextContainer>
    </Content>
  );
}
