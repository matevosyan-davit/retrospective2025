import { Text, View, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const Container = styled(LinearGradient).attrs({
  colors: ['#FF6B9D', '#FF8EB5'],
  locations: [0, 1],
})`
  width: 100%;
  height: ${SCREEN_HEIGHT}px;
  padding-top: 80px;
  padding-horizontal: 24px;
  align-items: center;
`;

const HeadlineContainer = styled(Animatable.View)`
  margin-bottom: 40px;
`;

const HeadlineText = styled.Text`
  font-size: 32px;
  font-weight: 800;
  color: #FFFFFF;
  text-align: center;
  line-height: 38px;
`;

const RatingCountCard = styled(Animatable.View)`
  background-color: #0A1B5C;
  border-radius: 16px;
  padding: 32px;
  transform: rotate(-5deg);
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

const AverageRatingSection = styled(Animatable.View)`
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

const StarsContainer = styled.View`
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

const RatingNumberCard = styled.View`
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

const BottomTextContainer = styled(Animatable.View)`
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
      <HeadlineContainer
        animation="fadeInUp"
        duration={800}
        delay={200}
      >
        <HeadlineText>Vous avez reçu</HeadlineText>
      </HeadlineContainer>

      <RatingCountCard
        animation="bounceIn"
        duration={1000}
        delay={600}
      >
        <RatingCountNumber>{ratingCount}</RatingCountNumber>
        <RatingCountLabel>évaluations</RatingCountLabel>
      </RatingCountCard>

      <AverageRatingSection
        animation="fadeInUp"
        duration={800}
        delay={1000}
      >
        <AverageRatingLabel>Note moyenne :</AverageRatingLabel>

        <StarsContainer>
          {renderStars()}
        </StarsContainer>

        <RatingNumberCard>
          <RatingNumberText>{ratingAvg.toFixed(1)} / 5</RatingNumberText>
        </RatingNumberCard>
      </AverageRatingSection>

      <BottomTextContainer
        animation="fadeIn"
        duration={800}
        delay={1600}
      >
        <BottomText>Clairement, vous avez assuré 💛</BottomText>
      </BottomTextContainer>
    </Container>
  );
}
