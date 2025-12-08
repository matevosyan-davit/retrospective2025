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
  padding-top: 70px;
  padding-horizontal: 24px;
  justify-content: space-between;
`;

const HeaderContainer = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

const RetrospectiveBanner = styled(Animated.View)`
  background-color: #FF8EB5;
  border-radius: 14px;
  padding: 20px 28px 32px 28px;
  shadow-color: #000;
  shadow-offset: 0px 6px;
  shadow-opacity: 0.4;
  shadow-radius: 8px;
  elevation: 8;
  position: relative;
  margin-bottom: 32px;
`;

const RetrospectiveText = styled.Text`
  font-size: 34px;
  font-weight: 900;
  color: #0A1B5C;
  text-transform: uppercase;
  letter-spacing: -1px;
  font-style: italic;
  text-align: center;
`;

const YearBadge = styled.View`
  background-color: #8BA3E8;
  border-radius: 8px;
  padding: 10px 20px;
  transform: rotate(8deg);
  position: absolute;
  bottom: -12px;
  right: 16px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 6px;
  elevation: 6;
`;

const YearText = styled.Text`
  font-size: 30px;
  font-weight: 900;
  color: #FFFFFF;
  font-style: italic;
`;

const SubtitleContainer = styled(Animated.View)`
  margin-bottom: 16px;
  padding-horizontal: 8px;
`;

const SubtitleText = styled.Text`
  font-size: 20px;
  font-weight: 800;
  color: #FFFFFF;
  text-align: center;
  line-height: 26px;
`;

const StatsGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const StatCard = styled(Animated.View)`
  background-color: #FFFFFF;
  border-radius: 14px;
  padding: 12px;
  width: 140px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 6px;
  elevation: 6;
  position: relative;
`;

const StatValueCard = styled(Animated.View)`
  background-color: #FF8EB5;
  border-radius: 12px;
  padding: 10px;
  margin-bottom: 8px;
  align-items: center;
  justify-content: center;
  min-height: 50px;
`;

const StatValueCardAlt = styled(StatValueCard)`
  background-color: #0A1B5C;
`;

const StatValue = styled.Text`
  font-size: 32px;
  font-weight: 900;
  color: #0A1B5C;
  text-align: center;
  line-height: 32px;
`;

const StatValueWhite = styled(StatValue)`
  color: #FFFFFF;
`;

const StatLabel = styled.Text`
  font-size: 15px;
  font-weight: 700;
  color: #0A1B5C;
  text-align: center;
  line-height: 19px;
`;

const EuroIcon = styled.Text`
  position: absolute;
  top: 6px;
  right: 10px;
  font-size: 20px;
  font-weight: 900;
  color: #0A1B5C;
`;

const BottomTextContainer = styled(Animated.View)`
  padding-horizontal: 24px;
  padding-bottom: 30px;
`;

const BottomText = styled.Text`
  font-size: 17px;
  font-weight: 700;
  color: #FFFFFF;
  text-align: center;
  line-height: 23px;
`;

interface Slide11SummaryProps {
  year: number;
  rank: number;
  parcelsDelivered: number;
  neighborsHelped: number;
  totalEarnings: number;
  ratingAvg: number;
}

export default function Slide11Summary({
  year = 2025,
  rank = 200,
  parcelsDelivered = 745,
  neighborsHelped = 500,
  totalEarnings = 600,
  ratingAvg = 4.9,
}: Slide11SummaryProps) {
  // Animation values
  const bannerScale = useSharedValue(0.6);
  const bannerRotation = useSharedValue(-5);
  const subtitleOpacity = useSharedValue(0);
  const subtitleTranslateY = useSharedValue(10);
  const statCard1Scale = useSharedValue(0.6);
  const statCard1Rotation = useSharedValue(-5);
  const statCard2Scale = useSharedValue(0.6);
  const statCard2Rotation = useSharedValue(-5);
  const statCard3Scale = useSharedValue(0.6);
  const statCard3Rotation = useSharedValue(-5);
  const statCard4Scale = useSharedValue(0.6);
  const statCard4Rotation = useSharedValue(-5);
  const footerOpacity = useSharedValue(0);

  useEffect(() => {
    // Banner: scale-in with rotation and spring bounce
    bannerScale.value = withDelay(200, withSpring(1, { damping: 10, stiffness: 100 }));
    bannerRotation.value = withDelay(200, withTiming(-2, { duration: 600 }));

    // Subtitle: fade-in + upward motion
    subtitleOpacity.value = withDelay(400, withTiming(1, { duration: 400 }));
    subtitleTranslateY.value = withDelay(400, withTiming(0, { duration: 400 }));

    // Stat cards: scale-in with rotation and spring bounce, staggered
    statCard1Scale.value = withDelay(600, withSpring(1, { damping: 10, stiffness: 100 }));
    statCard1Rotation.value = withDelay(600, withTiming(-3, { duration: 600 }));

    statCard2Scale.value = withDelay(700, withSpring(1, { damping: 10, stiffness: 100 }));
    statCard2Rotation.value = withDelay(700, withTiming(3, { duration: 600 }));

    statCard3Scale.value = withDelay(800, withSpring(1, { damping: 10, stiffness: 100 }));
    statCard3Rotation.value = withDelay(800, withTiming(-3, { duration: 600 }));

    statCard4Scale.value = withDelay(900, withSpring(1, { damping: 10, stiffness: 100 }));
    statCard4Rotation.value = withDelay(900, withTiming(3, { duration: 600 }));

    // Footer: fade-in with delay
    footerOpacity.value = withDelay(1200, withTiming(1, { duration: 400 }));
  }, []);

  const bannerStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: bannerScale.value },
      { rotate: `${bannerRotation.value}deg` },
    ],
  }));

  const subtitleStyle = useAnimatedStyle(() => ({
    opacity: subtitleOpacity.value,
    transform: [{ translateY: subtitleTranslateY.value }],
  }));

  const statCard1Style = useAnimatedStyle(() => ({
    transform: [
      { scale: statCard1Scale.value },
      { rotate: `${statCard1Rotation.value}deg` },
    ],
  }));

  const statCard2Style = useAnimatedStyle(() => ({
    transform: [
      { scale: statCard2Scale.value },
      { rotate: `${statCard2Rotation.value}deg` },
    ],
  }));

  const statCard3Style = useAnimatedStyle(() => ({
    transform: [
      { scale: statCard3Scale.value },
      { rotate: `${statCard3Rotation.value}deg` },
    ],
  }));

  const statCard4Style = useAnimatedStyle(() => ({
    transform: [
      { scale: statCard4Scale.value },
      { rotate: `${statCard4Rotation.value}deg` },
    ],
  }));

  const footerStyle = useAnimatedStyle(() => ({
    opacity: footerOpacity.value,
  }));

  return (
    <Container>
      {/* Header with Retrospective banner */}
      <HeaderContainer>
        <RetrospectiveBanner style={bannerStyle}>
          <RetrospectiveText>RÉTROSPECTIVE</RetrospectiveText>
          <YearBadge>
            <YearText>{year}</YearText>
          </YearBadge>
        </RetrospectiveBanner>
      </HeaderContainer>

      {/* Subtitle */}
      <SubtitleContainer style={subtitleStyle}>
        <SubtitleText>
          Je suis dans le top {rank}{'\n'}des voisins-relais Pickme
        </SubtitleText>
      </SubtitleContainer>

      {/* Stats grid - 2x2 layout */}
      <StatsGrid>
        {/* Parcels delivered - top left */}
        <StatCard style={statCard1Style}>
          <StatValueCard style={useAnimatedStyle(() => ({ transform: [{ rotate: '-5deg' }] }))}>
            <StatValue>{parcelsDelivered}</StatValue>
          </StatValueCard>
          <StatLabel>colis{'\n'}livrés</StatLabel>
        </StatCard>

        {/* Neighbors helped - top right */}
        <StatCard style={statCard2Style}>
          <StatValueCard style={useAnimatedStyle(() => ({ transform: [{ rotate: '-5deg' }] }))}>
            <StatValue>{neighborsHelped}</StatValue>
          </StatValueCard>
          <StatLabel>services{'\n'}rendus</StatLabel>
        </StatCard>

        {/* Total earnings - bottom left */}
        <StatCard style={statCard3Style}>
          <StatValueCard style={useAnimatedStyle(() => ({ transform: [{ rotate: '-5deg' }] }))}>
            <EuroIcon>€</EuroIcon>
            <StatValue>{totalEarnings}</StatValue>
          </StatValueCard>
          <StatLabel>gagnés</StatLabel>
        </StatCard>

        {/* Rating average - bottom right */}
        <StatCard style={statCard4Style}>
          <StatValueCardAlt style={useAnimatedStyle(() => ({ transform: [{ rotate: '-5deg' }] }))}>
            <StatValueWhite>{ratingAvg}/5</StatValueWhite>
          </StatValueCardAlt>
          <StatLabel>note{'\n'}moyenne</StatLabel>
        </StatCard>
      </StatsGrid>

      {/* Bottom message */}
      <BottomTextContainer style={footerStyle}>
        <BottomText>
          Qu'attendez-vous pour me{'\n'}choisir en point de livraison ? 🤭
        </BottomText>
      </BottomTextContainer>
    </Container>
  );
}
