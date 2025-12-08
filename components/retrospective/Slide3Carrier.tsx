import { useEffect } from 'react';
import { Text, View } from 'react-native';
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
  colors: ['#FF6B9D', '#FF8EB5'],
  locations: [0, 1],
})`
  flex: 1;
  padding-top: 80px;
  padding-horizontal: 24px;
`;

const StarburstContainer = styled.View`
  align-items: center;
  margin-bottom: 30px;
`;

const Starburst = styled(Animated.View)`
  width: 120px;
  height: 120px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StarburstCenter = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: #FF6B9D;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const Eyes = styled.View`
  flex-direction: row;
  gap: 16px;
`;

const Eye = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: #FFFFFF;
  justify-content: center;
  align-items: center;
`;

const Pupil = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: #000000;
`;

const Headline = styled(Animated.Text)`
  font-size: 30px;
  font-weight: 800;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 30px;
  line-height: 38px;
`;

const CarrierCard = styled(Animated.View)`
  background-color: #0A1B5C;
  border-radius: 16px;
  padding-vertical: 28px;
  padding-horizontal: 32px;
  align-self: center;
  shadow-color: #000;
  shadow-offset: 0px 8px;
  shadow-opacity: 0.4;
  shadow-radius: 10px;
  elevation: 10;
  margin-bottom: 40px;
`;

const CarrierName = styled.Text`
  font-size: 56px;
  font-weight: 900;
  color: #FF6B9D;
  text-align: center;
  letter-spacing: 2px;
`;


const BottomTextContainer = styled.View`
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  padding-horizontal: 24px;
`;

const BottomText = styled(Animated.Text)`
  font-size: 20px;
  font-weight: 700;
  color: #FFFFFF;
  text-align: center;
`;

interface Slide3CarrierProps {
  favoriteCarrier: string;
}

export default function Slide3Carrier({ favoriteCarrier = 'COLISSIMO' }: Slide3CarrierProps) {
  const headlineOpacity = useSharedValue(0);
  const headlineY = useSharedValue(10);
  const carrierScale = useSharedValue(0.6);
  const carrierRotate = useSharedValue(-5);
  const mascotY = useSharedValue(0);
  const mascotRotate = useSharedValue(0);
  const bottomOpacity = useSharedValue(0);

  useEffect(() => {
    headlineOpacity.value = withTiming(1, { duration: 400 });
    headlineY.value = withTiming(0, { duration: 400 });

    carrierScale.value = withDelay(200, withSpring(1, { damping: 8, stiffness: 100 }));
    carrierRotate.value = withDelay(200, withSpring(-8, { damping: 8, stiffness: 100 }));

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

  const carrierStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: carrierScale.value },
      { rotate: `${carrierRotate.value}deg` },
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
    <Container>
      <StarburstContainer>
        <Starburst style={mascotStyle}>
          {Array.from({ length: 12 }).map((_, index) => (
            <View
              key={index}
              style={{
                position: 'absolute',
                width: 30,
                height: 70,
                backgroundColor: '#0A1B5C',
                borderRadius: 15,
                transform: [
                  { rotate: `${index * 30}deg` },
                  { translateY: -40 },
                ],
              }}
            />
          ))}

          <StarburstCenter>
            <Eyes>
              <Eye>
                <Pupil />
              </Eye>
              <Eye>
                <Pupil />
              </Eye>
            </Eyes>
          </StarburstCenter>
        </Starburst>
      </StarburstContainer>

      <Headline style={headlineStyle}>
        Le transporteur n°1{'\n'}dans votre cœur :
      </Headline>

      <CarrierCard style={carrierStyle}>
        <CarrierName>{favoriteCarrier}</CarrierName>
      </CarrierCard>

      <BottomTextContainer>
        <BottomText style={bottomStyle}>
          Les livreurs sont devenus vos BFF 💚
        </BottomText>
      </BottomTextContainer>
    </Container>
  );
}
