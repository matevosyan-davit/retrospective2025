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
  padding-top: 60px;
  padding-horizontal: 24px;
`;

const FlameContainer = styled(Animated.View)`
  align-items: center;
  margin-bottom: 30px;
`;

const FlameOuter = styled.View`
  width: 90px;
  height: 110px;
  background-color: #8BA3E8;
  border-radius: 45px 45px 0 0;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const FlameInner = styled.View`
  width: 70px;
  height: 90px;
  background-color: #FF6B9D;
  border-radius: 35px 35px 0 0;
  position: absolute;
  bottom: 0;
`;

const FlameCore = styled.View`
  width: 50px;
  height: 70px;
  background-color: #FF8EB5;
  border-radius: 25px 25px 0 0;
  position: absolute;
  bottom: 5px;
`;

const HeadlineContainer = styled(Animated.View)`
  margin-bottom: 25px;
`;

const HeadlineText = styled.Text`
  font-size: 28px;
  font-weight: 800;
  color: #FFFFFF;
  text-align: left;
  line-height: 34px;
`;

const WeeksContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 35px;
`;

const WeeksCard = styled(Animated.View)`
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

const WeeksNumber = styled.Text`
  font-size: 80px;
  font-weight: 900;
  color: #0A1B5C;
  line-height: 80px;
  text-align: center;
`;

const WeeksLabel = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: #FFFFFF;
  margin-left: 20px;
  flex: 1;
`;

const BadgeSection = styled.View`
  margin-bottom: 30px;
`;

const BadgeLabel = styled.Text`
  font-size: 20px;
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 14px;
`;

const BadgeCard = styled(Animated.View)`
  background-color: #8BA3E8;
  border-radius: 12px;
  padding: 18px 24px;
  shadow-color: #000;
  shadow-offset: 0px 6px;
  shadow-opacity: 0.4;
  shadow-radius: 8px;
  elevation: 8;
  align-self: flex-start;
`;

const BadgeText = styled.Text`
  font-size: 20px;
  font-weight: 900;
  color: #0A1B5C;
  letter-spacing: 1px;
  text-transform: uppercase;
`;


const StarsContainer = styled.View`
  position: absolute;
  bottom: 100px;
  right: 30px;
`;

const Star = styled.View`
  position: absolute;
`;

const Star1 = styled(Star)`
  right: 0px;
  bottom: 0px;
`;

const Star2 = styled(Star)`
  right: 60px;
  bottom: 40px;
`;

const Star3 = styled(Star)`
  right: 20px;
  bottom: 80px;
`;

const StarShape = styled.View`
  width: 0;
  height: 0;
  background-color: transparent;
  border-style: solid;
`;

const StarPoint1 = styled(StarShape)`
  border-left-width: 8px;
  border-right-width: 8px;
  border-bottom-width: 14px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: #FFFFFF;
`;

const StarPoint2 = styled(StarShape)`
  border-left-width: 8px;
  border-right-width: 8px;
  border-top-width: 14px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: #FFFFFF;
  margin-top: -6px;
`;

const StarComponent = () => (
  <View>
    <StarPoint1 />
    <StarPoint2 />
  </View>
);

const BottomTextContainer = styled(Animated.View)`
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  padding-horizontal: 24px;
`;

const BottomText = styled.Text`
  font-size: 22px;
  font-weight: 700;
  color: #FFFFFF;
  text-align: center;
`;

interface Slide8StreaksProps {
  flammesWeeks: number;
  flammeBadge: string;
}

export default function Slide8Streaks({
  flammesWeeks = 32,
  flammeBadge = 'DIAMANT - KEEPER ÉTERNEL',
}: Slide8StreaksProps) {
  // Animation values
  const headlineOpacity = useSharedValue(0);
  const headlineTranslateY = useSharedValue(10);
  const weeksCardScale = useSharedValue(0.6);
  const weeksCardRotation = useSharedValue(-5);
  const badgeCardScale = useSharedValue(0.6);
  const badgeCardRotation = useSharedValue(-5);
  const flameTranslateY = useSharedValue(0);
  const flameRotation = useSharedValue(0);
  const footerOpacity = useSharedValue(0);

  useEffect(() => {
    // Headline: fade-in + upward motion
    headlineOpacity.value = withTiming(1, { duration: 400 });
    headlineTranslateY.value = withTiming(0, { duration: 400 });

    // Weeks card: scale-in with rotation and spring bounce
    weeksCardScale.value = withDelay(200, withSpring(1, { damping: 10, stiffness: 100 }));
    weeksCardRotation.value = withDelay(200, withTiming(-8, { duration: 600 }));

    // Badge card: scale-in with rotation
    badgeCardScale.value = withDelay(400, withSpring(1, { damping: 10, stiffness: 100 }));
    badgeCardRotation.value = withDelay(400, withTiming(3, { duration: 600 }));

    // Flame mascot: floating loop with rotation oscillation
    flameTranslateY.value = withDelay(
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
    flameRotation.value = withDelay(
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
    footerOpacity.value = withDelay(1000, withTiming(1, { duration: 400 }));
  }, []);

  const headlineStyle = useAnimatedStyle(() => ({
    opacity: headlineOpacity.value,
    transform: [{ translateY: headlineTranslateY.value }],
  }));

  const weeksCardStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: weeksCardScale.value },
      { rotate: `${weeksCardRotation.value}deg` },
    ],
  }));

  const badgeCardStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: badgeCardScale.value },
      { rotate: `${badgeCardRotation.value}deg` },
    ],
  }));

  const flameStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: flameTranslateY.value },
      { rotate: `${flameRotation.value}deg` },
    ],
  }));

  const footerStyle = useAnimatedStyle(() => ({
    opacity: footerOpacity.value,
  }));

  return (
    <Container>
      {/* Flame icon at top */}
      <FlameContainer style={flameStyle}>
        <FlameOuter>
          <FlameInner>
            <FlameCore />
          </FlameInner>
        </FlameOuter>
      </FlameContainer>

      {/* Headline */}
      <HeadlineContainer style={headlineStyle}>
        <HeadlineText>Votre record de flammes est de</HeadlineText>
      </HeadlineContainer>

      {/* Weeks card */}
      <WeeksContainer>
        <WeeksCard style={weeksCardStyle}>
          <WeeksNumber>{flammesWeeks}</WeeksNumber>
        </WeeksCard>
        <WeeksLabel>semaines{'\n'}consécutives.</WeeksLabel>
      </WeeksContainer>

      {/* Badge section */}
      <BadgeSection>
        <BadgeLabel>Vous avez atteint le badge</BadgeLabel>
        <BadgeCard style={badgeCardStyle}>
          <BadgeText>{flammeBadge}</BadgeText>
        </BadgeCard>
      </BadgeSection>

      {/* Bottom message */}
      <BottomTextContainer style={footerStyle}>
        <BottomText>
          {flammesWeeks >= 32 ? "Respect ! 👑" : "Bravo, c'est déjà top 👋"}
        </BottomText>
      </BottomTextContainer>
    </Container>
  );
}
