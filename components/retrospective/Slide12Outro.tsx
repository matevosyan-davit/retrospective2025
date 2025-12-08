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
  colors: ['#FF8EB5', '#FF6B9D'],
  locations: [0, 1],
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 24px;
`;

const MerciCard = styled(Animated.View)`
  background-color: #0A1B5C;
  border-radius: 20px;
  padding: 48px 40px;
  shadow-color: #000;
  shadow-offset: 0px 8px;
  shadow-opacity: 0.4;
  shadow-radius: 12px;
  elevation: 12;
  position: relative;
  align-items: center;
`;

const MerciText = styled.Text`
  font-size: 72px;
  font-weight: 900;
  color: #FFFFFF;
  text-transform: uppercase;
  letter-spacing: -2px;
  text-align: center;
  line-height: 72px;
  margin-bottom: 8px;
`;

const AVousText = styled.Text`
  font-size: 72px;
  font-weight: 900;
  color: #FFFFFF;
  text-transform: uppercase;
  letter-spacing: -2px;
  text-align: center;
  line-height: 72px;
`;

const BisousBadge = styled(Animated.View)`
  background-color: #8BA3E8;
  border-radius: 12px;
  padding: 14px 32px;
  position: absolute;
  bottom: -20px;
  right: -10px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 6px;
  elevation: 6;
`;

const BisousText = styled.Text`
  font-size: 28px;
  font-weight: 900;
  color: #FFFFFF;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const HeartText = styled(Animated.Text)`
  font-size: 32px;
  position: absolute;
  top: -40px;
  right: 20px;
`;

export default function Slide12Outro() {
  // Animation values
  const merciCardScale = useSharedValue(0.6);
  const merciCardRotation = useSharedValue(-5);
  const bisousBadgeScale = useSharedValue(0.6);
  const bisousBadgeRotation = useSharedValue(-5);
  const heartScale = useSharedValue(0.6);
  const heartRotation = useSharedValue(0);

  useEffect(() => {
    // Merci card: scale-in with rotation and spring bounce
    merciCardScale.value = withDelay(200, withSpring(1, { damping: 10, stiffness: 100 }));
    merciCardRotation.value = withDelay(200, withTiming(-3, { duration: 600 }));

    // Bisous badge: scale-in with rotation and spring bounce
    bisousBadgeScale.value = withDelay(400, withSpring(1, { damping: 10, stiffness: 100 }));
    bisousBadgeRotation.value = withDelay(400, withTiming(8, { duration: 600 }));

    // Heart: scale-in and continuous floating with rotation
    heartScale.value = withDelay(300, withSpring(1, { damping: 10, stiffness: 100 }));
    heartRotation.value = withDelay(
      600,
      withRepeat(
        withSequence(
          withTiming(-3, { duration: 2000 }),
          withTiming(3, { duration: 2000 })
        ),
        -1,
        true
      )
    );
  }, []);

  const merciCardStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: merciCardScale.value },
      { rotate: `${merciCardRotation.value}deg` },
    ],
  }));

  const bisousBadgeStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: bisousBadgeScale.value },
      { rotate: `${bisousBadgeRotation.value}deg` },
    ],
  }));

  const heartStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: heartScale.value },
      { rotate: `${heartRotation.value}deg` },
    ],
  }));

  return (
    <Container>
      <MerciCard style={merciCardStyle}>
        <HeartText style={heartStyle}>❤️</HeartText>
        <MerciText>MERCI</MerciText>
        <AVousText>À VOUS</AVousText>
        <BisousBadge style={bisousBadgeStyle}>
          <BisousText>BISOUS</BisousText>
        </BisousBadge>
      </MerciCard>
    </Container>
  );
}
