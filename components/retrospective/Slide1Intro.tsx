import { useEffect } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  withDelay,
} from 'react-native-reanimated';

const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 24px;
`;

const TitleCard = styled(Animated.View)`
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

const StampContainer = styled(Animated.View)`
  position: absolute;
  bottom: -16px;
  right: 24px;
  background-color: #A5C4FF;
  padding-horizontal: 24px;
  padding-vertical: 10px;
  border-radius: 10px;
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

const Subtitle = styled(Animated.Text)`
  font-size: 24px;
  font-weight: 700;
  color: #FFFFFF;
  text-align: center;
  letter-spacing: 0.5px;
`;

export default function Slide1Intro() {
  const titleOpacity = useSharedValue(0);
  const titleY = useSharedValue(10);
  const stampScale = useSharedValue(0.6);
  const stampRotate = useSharedValue(-5);
  const subtitleOpacity = useSharedValue(0);

  useEffect(() => {
    titleOpacity.value = withTiming(1, { duration: 400 });
    titleY.value = withTiming(0, { duration: 400 });

    stampScale.value = withDelay(200, withSpring(1, { damping: 8, stiffness: 100 }));
    stampRotate.value = withDelay(200, withSpring(8, { damping: 8, stiffness: 100 }));

    subtitleOpacity.value = withDelay(500, withTiming(1, { duration: 400 }));
  }, []);

  const titleStyle = useAnimatedStyle(() => ({
    opacity: titleOpacity.value,
    transform: [{ translateY: titleY.value }],
  }));

  const stampStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: stampScale.value },
      { rotate: `${stampRotate.value}deg` },
    ],
  }));

  const subtitleStyle = useAnimatedStyle(() => ({
    opacity: subtitleOpacity.value,
  }));

  return (
    <Content>
      <TitleCard style={titleStyle}>
        <RetrospectiveText>RÉTROSPECTIVE</RetrospectiveText>

        <StampContainer style={stampStyle}>
          <StampText>2025</StampText>
        </StampContainer>
      </TitleCard>

      <Subtitle style={subtitleStyle}>Votre année de Keeper</Subtitle>
    </Content>
  );
}
