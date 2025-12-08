import { Text, View, ImageBackground, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const Container = styled(ImageBackground)`
  width: 100%;
  height: ${SCREEN_HEIGHT}px;
  padding-vertical: 60px;
  padding-horizontal: 32px;
  justify-content: space-between;
`;

const HeaderContainer = styled(Animatable.View)`
  align-items: center;
  margin-bottom: 12px;
`;

const RetrospectiveBanner = styled.View`
  background-color: #FF8EB5;
  border-radius: 14px;
  padding: 16px 24px 28px 24px;
  transform: rotate(-2deg);
  shadow-color: #000;
  shadow-offset: 0px 6px;
  shadow-opacity: 0.4;
  shadow-radius: 8px;
  elevation: 8;
  position: relative;
  margin-bottom: 24px;
`;

const RetrospectiveText = styled.Text`
  font-size: 28px;
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
  padding: 8px 18px;
  transform: rotate(8deg);
  position: absolute;
  bottom: -10px;
  right: 12px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 6px;
  elevation: 6;
`;

const YearText = styled.Text`
  font-size: 26px;
  font-weight: 900;
  color: #FFFFFF;
  font-style: italic;
`;

const SubtitleContainer = styled(Animatable.View)`
  margin-bottom: 12px;
  padding-horizontal: 8px;
`;

const SubtitleText = styled.Text`
  font-size: 17px;
  font-weight: 800;
  color: #FFFFFF;
  text-align: center;
  line-height: 23px;
`;

const StatsGrid = styled(Animatable.View)`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
`;

const StatCard = styled.View`
  background-color: #FFFFFF;
  border-radius: 12px;
  padding: 10px;
  width: 135px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 6px;
  elevation: 6;
  position: relative;
`;

const StatValueCard = styled.View`
  background-color: #FF8EB5;
  border-radius: 10px;
  padding: 8px;
  transform: rotate(-5deg);
  margin-bottom: 6px;
  align-items: center;
  justify-content: center;
  min-height: 45px;
`;

const StatValueCardAlt = styled(StatValueCard)`
  background-color: #0A1B5C;
`;

const StatValue = styled.Text`
  font-size: 28px;
  font-weight: 900;
  color: #0A1B5C;
  text-align: center;
  line-height: 28px;
`;

const StatValueWhite = styled(StatValue)`
  color: #FFFFFF;
`;

const StatLabel = styled.Text`
  font-size: 13px;
  font-weight: 700;
  color: #0A1B5C;
  text-align: center;
  line-height: 17px;
`;

const EuroIcon = styled.Text`
  position: absolute;
  top: 4px;
  right: 8px;
  font-size: 18px;
  font-weight: 900;
  color: #0A1B5C;
`;

const BottomTextContainer = styled(Animatable.View)`
  align-self: stretch;
`;

const BottomText = styled.Text`
  font-size: 15px;
  font-weight: 700;
  color: #FFFFFF;
  text-align: center;
  line-height: 20px;
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
  return (
    <Container
      source={require('../../assets/images/fond_bleu_nuage.png')}
      resizeMode="stretch"
    >
      <View>
      {/* Header with Retrospective banner */}
      <HeaderContainer
        animation="bounceIn"
        duration={1000}
        delay={200}
      >
        <RetrospectiveBanner>
          <RetrospectiveText>RÉTROSPECTIVE</RetrospectiveText>
          <YearBadge>
            <YearText>{year}</YearText>
          </YearBadge>
        </RetrospectiveBanner>
      </HeaderContainer>

      {/* Subtitle */}
      <SubtitleContainer
        animation="fadeInUp"
        duration={800}
        delay={600}
      >
        <SubtitleText>
          Je suis dans le top {rank}{'\n'}des voisins-relais Pickme
        </SubtitleText>
      </SubtitleContainer>

      {/* Stats grid - 2x2 layout */}
      <StatsGrid
        animation="fadeInUp"
        duration={800}
        delay={1000}
      >
        {/* Parcels delivered - top left */}
        <StatCard>
          <StatValueCard>
            <StatValue>{parcelsDelivered}</StatValue>
          </StatValueCard>
          <StatLabel>colis{'\n'}livrés</StatLabel>
        </StatCard>

        {/* Neighbors helped - top right */}
        <StatCard>
          <StatValueCard>
            <StatValue>{neighborsHelped}</StatValue>
          </StatValueCard>
          <StatLabel>services{'\n'}rendus</StatLabel>
        </StatCard>

        {/* Total earnings - bottom left */}
        <StatCard>
          <StatValueCard>
            <EuroIcon>€</EuroIcon>
            <StatValue>{totalEarnings}</StatValue>
          </StatValueCard>
          <StatLabel>gagnés</StatLabel>
        </StatCard>

        {/* Rating average - bottom right */}
        <StatCard>
          <StatValueCardAlt>
            <StatValueWhite>{ratingAvg}/5</StatValueWhite>
          </StatValueCardAlt>
          <StatLabel>note{'\n'}moyenne</StatLabel>
        </StatCard>
      </StatsGrid>
      </View>

      {/* Bottom message */}
      <BottomTextContainer
        animation="fadeIn"
        duration={800}
        delay={1400}
      >
        <BottomText>
          Qu'attendez-vous pour me{'\n'}choisir en point de livraison ? 🤭
        </BottomText>
      </BottomTextContainer>
    </Container>
  );
}
