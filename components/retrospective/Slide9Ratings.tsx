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
  colors: ['#FF6B9D', '#FF8EB5'],
  locations: [0, 1],
})`
  flex: 1;
  padding-top: 80px;
  padding-horizontal: 24px;
  align-items: center;
`;

const HeadlineContainer = styled(Animated.View)`
  margin-bottom: 40px;
`;

const HeadlineText = styled.Text`
  font-size: 32px;
  font-weight: 800;
  color: #FFFFFF;
  text-align: center;
  line-height: 38px;
`;

const RatingCountCard = styled(Animated.View)`
  background-color: #0A1B5C;
  border-radius: 16px;
  padding: 32px;
  shadow-color: #000;
  shadow-offset: 0px 8px;
  shadow-opacity: 0.4;
  shadow-radius: 10px;
  elevation: 10;
  margin-bottom: 50px;
`;

const RatingCountNumber = styled.Text`
  font-size: 80px;
  font-weight: 900;
  color: #FF6B9D;
  text-align: center;
  line-height: 80px;
`;

const RatingCountLabel = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: #FFFFFF;
  text-align: center;
  margin-top: 8px;
`;

const AverageRatingSection = styled.View`
  align-items: center;
  margin-bottom: 50px;
`;

const AverageRatingLabel = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 20px;
`;

const StarsContainer = styled(Animated.View)`
  flex-direction: row;
  gap: 12px;
  margin-bottom: 16px;
`;

const StarWrapper = styled.View`
  position: relative;
`;

const Star = styled.View<{ filled: boolean; partial?: number }>`
  width: 50px;
  height: 50px;
  position: relative;
`;

const RatingNumberCard = styled(Animated.View)`
  background-color: #0A1B5C;
  border-radius: 12px;
  padding: 16px 32px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 6px;
  elevation: 6;
`;

const RatingNumberText = styled.Text`
  font-size: 48px;
  font-weight: 900;
  color: #FFFFFF;
  text-align: center;
`;

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

interface Slide9RatingsProps {
  ratingCount: number;
  ratingAvg: number;
}

const StarShape = ({ filled, partial }: { filled: boolean; partial?: number }) => {
  const starColor = filled ? '#FFD700' : 'rgba(255, 255, 255, 0.3)';

  return (
    <View style={{ position: 'relative', width: 50, height: 50 }}>
      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <Text style={{ fontSize: 50, color: starColor, textAlign: 'center', lineHeight: 50 }}>
          ★
        </Text>
      </View>
      {partial !== undefined && partial > 0 && partial < 1 && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${partial * 100}%`,
            height: 50,
            overflow: 'hidden'
          }}
        >
          <Text style={{ fontSize: 50, color: '#FFD700', textAlign: 'center', lineHeight: 50 }}>
            ★
          </Text>
        </View>
      )}
    </View>
  );
};

export default function Slide9Ratings({
  ratingCount = 245,
  ratingAvg = 4.8,
}: Slide9RatingsProps) {
  // Animation values
  const headlineOpacity = useSharedValue(0);
  const headlineTranslateY = useSharedValue(10);
  const ratingCountCardScale = useSharedValue(0.6);
  const ratingCountCardRotation = useSharedValue(-5);
  const starsScale = useSharedValue(0.6);
  const starsRotation = useSharedValue(-5);
  const ratingNumberCardScale = useSharedValue(0.6);
  const ratingNumberCardRotation = useSharedValue(-5);
  const footerOpacity = useSharedValue(0);

  useEffect(() => {
    // Headline: fade-in + upward motion
    headlineOpacity.value = withTiming(1, { duration: 400 });
    headlineTranslateY.value = withTiming(0, { duration: 400 });

    // Rating count card: scale-in with rotation and spring bounce
    ratingCountCardScale.value = withDelay(200, withSpring(1, { damping: 10, stiffness: 100 }));
    ratingCountCardRotation.value = withDelay(200, withTiming(-5, { duration: 600 }));

    // Stars: scale-in with floating animation
    starsScale.value = withDelay(400, withSpring(1, { damping: 10, stiffness: 100 }));
    starsRotation.value = withDelay(
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

    // Rating number card: scale-in with rotation
    ratingNumberCardScale.value = withDelay(600, withSpring(1, { damping: 10, stiffness: 100 }));
    ratingNumberCardRotation.value = withDelay(600, withTiming(3, { duration: 600 }));

    // Footer: fade-in with delay
    footerOpacity.value = withDelay(900, withTiming(1, { duration: 400 }));
  }, []);

  const headlineStyle = useAnimatedStyle(() => ({
    opacity: headlineOpacity.value,
    transform: [{ translateY: headlineTranslateY.value }],
  }));

  const ratingCountCardStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: ratingCountCardScale.value },
      { rotate: `${ratingCountCardRotation.value}deg` },
    ],
  }));

  const starsStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: starsScale.value },
      { rotate: `${starsRotation.value}deg` },
    ],
  }));

  const ratingNumberCardStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: ratingNumberCardScale.value },
      { rotate: `${ratingNumberCardRotation.value}deg` },
    ],
  }));

  const footerStyle = useAnimatedStyle(() => ({
    opacity: footerOpacity.value,
  }));

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(ratingAvg);
    const hasPartialStar = ratingAvg % 1 !== 0;
    const partialAmount = ratingAvg % 1;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<StarShape key={i} filled={true} />);
      } else if (i === fullStars && hasPartialStar) {
        stars.push(<StarShape key={i} filled={false} partial={partialAmount} />);
      } else {
        stars.push(<StarShape key={i} filled={false} />);
      }
    }

    return stars;
  };

  return (
    <Container>
      <HeadlineContainer style={headlineStyle}>
        <HeadlineText>Vous avez reçu</HeadlineText>
      </HeadlineContainer>

      <RatingCountCard style={ratingCountCardStyle}>
        <RatingCountNumber>{ratingCount}</RatingCountNumber>
        <RatingCountLabel>évaluations</RatingCountLabel>
      </RatingCountCard>

      <AverageRatingSection>
        <AverageRatingLabel>Note moyenne :</AverageRatingLabel>

        <StarsContainer style={starsStyle}>
          {renderStars()}
        </StarsContainer>

        <RatingNumberCard style={ratingNumberCardStyle}>
          <RatingNumberText>{ratingAvg.toFixed(1)} / 5</RatingNumberText>
        </RatingNumberCard>
      </AverageRatingSection>

      <BottomTextContainer style={footerStyle}>
        <BottomText>Clairement, vous avez assuré 💛</BottomText>
      </BottomTextContainer>
    </Container>
  );
}
