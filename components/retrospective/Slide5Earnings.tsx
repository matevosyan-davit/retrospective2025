import { Text, View, Dimensions, Image } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

const Container = styled(LinearGradient).attrs({
  colors: ['#FF6B9D', '#FF8EB5'],
  locations: [0, 1],
})`
  width: 100%;
  height: ${SCREEN_HEIGHT}px;
  padding-top: 40px;
  padding-horizontal: 24px;
`;

const BackgroundImage = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  width: ${SCREEN_WIDTH}px;
  height: ${SCREEN_HEIGHT}px;
  opacity: 0.3;
`;

const StarburstContainer = styled(Animatable.View)`
  position: absolute;
  top: 40px;
  right: 20px;
  align-items: center;
`;

const Starburst = styled.View`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StarburstCenter = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #FFAA88;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const Eyes = styled.View`
  flex-direction: row;
  gap: 8px;
  margin-bottom: 3px;
`;

const Eye = styled.View`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: #FFFFFF;
  justify-content: center;
  align-items: center;
`;

const Pupil = styled.View`
  width: 7px;
  height: 7px;
  border-radius: 3.5px;
  background-color: #000000;
`;

const Mouth = styled.View`
  width: 10px;
  height: 5px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-width: 1.5px;
  border-color: #000000;
  border-top-width: 0;
`;

const MainEarningsCard = styled(Animatable.View)`
  background-color: #0A1B5C;
  border-radius: 16px;
  padding: 24px 28px;
  transform: rotate(-8deg);
  shadow-color: #000;
  shadow-offset: 0px 8px;
  shadow-opacity: 0.3;
  shadow-radius: 10px;
  elevation: 10;
  align-self: flex-start;
  margin-left: 20px;
  margin-bottom: 16px;
  position: relative;
`;

const EarningsAmount = styled.Text`
  font-size: 64px;
  font-weight: 900;
  color: #FF6B9D;
  line-height: 64px;
`;

const EuroSymbol = styled.Text`
  font-size: 26px;
  font-weight: 900;
  color: #FFFFFF;
  position: absolute;
  top: 8px;
  right: 14px;
`;

const HeadlineContainer = styled(Animatable.View)`
  margin-top: 16px;
  margin-bottom: 20px;
`;

const HeadlineText = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: #FFFFFF;
  text-align: left;
  line-height: 30px;
`;

const DontLabel = styled.Text`
  font-size: 18px;
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 10px;
  margin-left: 8px;
`;

const BreakdownItem = styled(Animatable.View)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const BreakdownCard = styled.View`
  background-color: #6B9DFF;
  border-radius: 12px;
  padding-vertical: 10px;
  padding-horizontal: 18px;
  flex-direction: row;
  align-items: center;
  position: relative;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.2;
  shadow-radius: 6px;
  elevation: 6;
  margin-left: 8px;
`;

const BreakdownAmount = styled.Text`
  font-size: 28px;
  font-weight: 900;
  color: #FFFFFF;
  line-height: 28px;
`;

const BreakdownEuro = styled.Text`
  font-size: 14px;
  font-weight: 900;
  color: #FFFFFF;
  position: absolute;
  top: 5px;
  right: 10px;
`;

const BreakdownLabel = styled.Text`
  font-size: 18px;
  font-weight: 800;
  color: #FFFFFF;
  margin-left: 10px;
`;


const BottomTextContainer = styled(Animatable.View)`
  position: absolute;
  bottom: 22px;
  left: 0;
  right: 0;
  padding-horizontal: 24px;
`;

const BottomText = styled.Text`
  font-size: 17px;
  font-weight: 700;
  color: #FFFFFF;
  text-align: center;
  line-height: 22px;
`;

interface Slide5EarningsProps {
  totalEarnings: number;
  tips: number;
  bonus: number;
}

export default function Slide5Earnings({
  totalEarnings = 560,
  tips = 200,
  bonus = 200,
}: Slide5EarningsProps) {
  const getMessage = () => {
    if (totalEarnings > 500) {
      return 'Un beau week-end à deux ✈️ ou un projet perso 💡';
    } else if (totalEarnings >= 200) {
      return 'Une super session shopping 🛍️ ou une partie de ton assurance 🚗';
    } else if (totalEarnings >= 100) {
      return 'Un plein de courses 🛒 ou un cadeau 🎁';
    } else if (totalEarnings >= 50) {
      return 'Une sortie restau 🍜 ou la facture d\'électricité 🔌';
    } else {
      return 'Un plein d\'essence ⛽ ou une sortie fun 💛';
    }
  };

  return (
    <Container>
      <BackgroundImage
        source={require('@/assets/images/fond_rose_nuage..png')}
        resizeMode="stretch"
      />
      {/* Starburst character top right */}
      <StarburstContainer
        animation="pulse"
        iterationCount="infinite"
        duration={2000}
        delay={800}
      >
        <Starburst>
          {Array.from({ length: 16 }).map((_, index) => (
            <View
              key={index}
              style={{
                position: 'absolute',
                width: 4,
                height: 32,
                backgroundColor: '#FFFFFF',
                borderRadius: 2,
                transform: [
                  { rotate: `${index * 22.5}deg` },
                  { translateY: -22 },
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
            <Mouth />
          </StarburstCenter>
        </Starburst>
      </StarburstContainer>

      {/* Main earnings card */}
      <MainEarningsCard
        animation="bounceIn"
        duration={1000}
        delay={200}
      >
        <EarningsAmount>{totalEarnings}</EarningsAmount>
        <EuroSymbol>€</EuroSymbol>
      </MainEarningsCard>

      {/* Headline */}
      <HeadlineContainer
        animation="fadeInUp"
        duration={800}
        delay={600}
      >
        <HeadlineText>
          dans la poche{'\n'}juste en sauvant{'\n'}des colis.
        </HeadlineText>
      </HeadlineContainer>

      {/* "Dont :" label - only show if there are bonuses or tips */}
      {(bonus > 0 || tips > 0) && (
        <DontLabel>Dont :</DontLabel>
      )}

      {/* Bonus breakdown - only show if bonus > 0 */}
      {bonus > 0 && (
        <BreakdownItem
          animation="slideInLeft"
          duration={600}
          delay={1000}
        >
          <BreakdownCard>
            <BreakdownAmount>{bonus}</BreakdownAmount>
            <BreakdownEuro>€</BreakdownEuro>
          </BreakdownCard>
          <BreakdownLabel>en bonus</BreakdownLabel>
        </BreakdownItem>
      )}

      {/* Tips breakdown - only show if tips > 0 */}
      {tips > 0 && (
        <BreakdownItem
          animation="slideInLeft"
          duration={600}
          delay={1200}
        >
          <BreakdownCard>
            <BreakdownAmount>{tips}</BreakdownAmount>
            <BreakdownEuro>€</BreakdownEuro>
          </BreakdownCard>
          <BreakdownLabel>en pourboires</BreakdownLabel>
        </BreakdownItem>
      )}

      {/* Bottom message */}
      <BottomTextContainer
        animation="fadeIn"
        duration={800}
        delay={1600}
      >
        <BottomText>
          {getMessage()}
        </BottomText>
      </BottomTextContainer>
    </Container>
  );
}
