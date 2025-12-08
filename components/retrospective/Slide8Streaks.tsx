import { Text, View, ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

const Container = styled(ImageBackground)`
  flex: 1;
  padding-top: 60px;
  padding-horizontal: 24px;
`;

const FlameContainer = styled(Animatable.View)`
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

const HeadlineContainer = styled(Animatable.View)`
  margin-bottom: 25px;
`;

const HeadlineText = styled.Text`
  font-size: 28px;
  font-weight: 800;
  color: #FFFFFF;
  text-align: left;
  line-height: 34px;
`;

const WeeksContainer = styled(Animatable.View)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 35px;
`;

const WeeksCard = styled.View`
  background-color: #FF6B9D;
  border-radius: 16px;
  padding: 32px;
  transform: rotate(-8deg);
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

const BadgeSection = styled(Animatable.View)`
  margin-bottom: 30px;
`;

const BadgeLabel = styled.Text`
  font-size: 20px;
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 14px;
`;

const BadgeCard = styled.View`
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

interface Slide8StreaksProps {
  flammesWeeks: number;
  flammeBadge: string;
}

export default function Slide8Streaks({
  flammesWeeks = 32,
  flammeBadge = 'DIAMANT - KEEPER ÉTERNEL',
}: Slide8StreaksProps) {
  return (
    <Container
      source={require('../../assets/images/fond_bleu_nuage.png')}
      resizeMode="cover"
    >
      {/* Flame icon at top */}
      <FlameContainer
        animation="pulse"
        iterationCount="infinite"
        duration={1500}
        delay={600}
      >
        <FlameOuter>
          <FlameInner>
            <FlameCore />
          </FlameInner>
        </FlameOuter>
      </FlameContainer>

      {/* Headline */}
      <HeadlineContainer
        animation="fadeInUp"
        duration={800}
        delay={200}
      >
        <HeadlineText>Votre record de flammes est de</HeadlineText>
      </HeadlineContainer>

      {/* Weeks card */}
      <WeeksContainer
        animation="bounceIn"
        duration={1000}
        delay={800}
      >
        <WeeksCard>
          <WeeksNumber>{flammesWeeks}</WeeksNumber>
        </WeeksCard>
        <WeeksLabel>semaines{'\n'}consécutives.</WeeksLabel>
      </WeeksContainer>

      {/* Badge section */}
      <BadgeSection
        animation="fadeInUp"
        duration={800}
        delay={1200}
      >
        <BadgeLabel>Vous avez atteint le badge</BadgeLabel>
        <BadgeCard>
          <BadgeText>{flammeBadge}</BadgeText>
        </BadgeCard>
      </BadgeSection>

      {/* Bottom message */}
      <BottomTextContainer
        animation="fadeIn"
        duration={800}
        delay={1600}
      >
        <BottomText>
          {flammesWeeks >= 32 ? "Respect ! 👑" : "Bravo, c'est déjà top 👋"}
        </BottomText>
      </BottomTextContainer>
    </Container>
  );
}
