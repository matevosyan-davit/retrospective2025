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
  padding-top: 40px;
`;

const HeadlineContainer = styled.View`
  margin-bottom: 20px;
`;

const HeadlinePart1 = styled(Animated.Text)`
  font-size: 36px;
  font-weight: 800;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 4px;
`;

const HeadlinePart2 = styled(Animated.Text)`
  font-size: 36px;
  font-weight: 800;
  color: #FFFFFF;
  text-align: center;
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
  margin-vertical: 20px;
`;

const NumberText = styled.Text`
  font-size: 88px;
  font-weight: 900;
  color: #0A1B5C;
  text-align: center;
  letter-spacing: -2px;
`;

const HeadlinePart3 = styled(Animated.Text)`
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

const BottomText = styled(Animated.Text)`
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
  const message = neighborsHelped >= 50
    ? 'Votre sourire est désormais plus connu que celui du facteur…'
    : 'Assez pour organiser un super apéro entre voisins 😌…';

  const headline1Opacity = useSharedValue(0);
  const headline1Y = useSharedValue(10);
  const headline2Opacity = useSharedValue(0);
  const headline2Y = useSharedValue(10);
  const numberScale = useSharedValue(0.6);
  const numberRotate = useSharedValue(-5);
  const headline3Opacity = useSharedValue(0);
  const headline3Y = useSharedValue(10);
  const bottomOpacity = useSharedValue(0);

  useEffect(() => {
    headline1Opacity.value = withTiming(1, { duration: 400 });
    headline1Y.value = withTiming(0, { duration: 400 });

    headline2Opacity.value = withDelay(100, withTiming(1, { duration: 400 }));
    headline2Y.value = withDelay(100, withTiming(0, { duration: 400 }));

    numberScale.value = withDelay(300, withSpring(1, { damping: 8, stiffness: 100 }));
    numberRotate.value = withDelay(300, withSpring(3, { damping: 8, stiffness: 100 }));

    headline3Opacity.value = withDelay(500, withTiming(1, { duration: 400 }));
    headline3Y.value = withDelay(500, withTiming(0, { duration: 400 }));

    bottomOpacity.value = withDelay(800, withTiming(1, { duration: 400 }));
  }, []);

  const headline1Style = useAnimatedStyle(() => ({
    opacity: headline1Opacity.value,
    transform: [{ translateY: headline1Y.value }],
  }));

  const headline2Style = useAnimatedStyle(() => ({
    opacity: headline2Opacity.value,
    transform: [{ translateY: headline2Y.value }],
  }));

  const numberStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: numberScale.value },
      { rotate: `${numberRotate.value}deg` },
    ],
  }));

  const headline3Style = useAnimatedStyle(() => ({
    opacity: headline3Opacity.value,
    transform: [{ translateY: headline3Y.value }],
  }));

  const bottomStyle = useAnimatedStyle(() => ({
    opacity: bottomOpacity.value,
  }));

  return (
    <Content>
      <HeadlineContainer>
        <HeadlinePart1 style={headline1Style}>Vous avez refait</HeadlinePart1>
        <HeadlinePart2 style={headline2Style}>la journée de</HeadlinePart2>
      </HeadlineContainer>

      <NumberCard style={numberStyle}>
        <NumberText>{neighborsHelped}</NumberText>
      </NumberCard>

      <HeadlinePart3 style={headline3Style}>
        voisins dans{'\n'}votre quartier !
      </HeadlinePart3>

      <BottomTextContainer>
        <BottomText style={bottomStyle}>
          {message}
        </BottomText>
      </BottomTextContainer>
    </Content>
  );
}
