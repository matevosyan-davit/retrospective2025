import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

const Container = styled(LinearGradient).attrs({
  colors: ['#FF6B9D', '#FF8EB5'],
  locations: [0, 1],
})`
  flex: 1;
  padding-top: 80px;
  padding-horizontal: 24px;
`;

const StarburstContainer = styled.View`
  position: absolute;
  top: 80px;
  right: 20px;
  align-items: center;
`;

const Starburst = styled.View`
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StarburstCenter = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: #FFAA88;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const Eyes = styled.View`
  flex-direction: row;
  gap: 12px;
  margin-bottom: 4px;
`;

const Eye = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: #FFFFFF;
  justify-content: center;
  align-items: center;
`;

const Pupil = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #000000;
`;

const Mouth = styled.View`
  width: 14px;
  height: 7px;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-width: 2px;
  border-color: #000000;
  border-top-width: 0;
`;

const MainEarningsCard = styled.View`
  background-color: #0A1B5C;
  border-radius: 16px;
  padding: 32px;
  transform: rotate(-8deg);
  shadow-color: #000;
  shadow-offset: 0px 8px;
  shadow-opacity: 0.3;
  shadow-radius: 10px;
  elevation: 10;
  align-self: flex-start;
  margin-left: 20px;
  margin-bottom: 20px;
  position: relative;
`;

const EarningsAmount = styled.Text`
  font-size: 80px;
  font-weight: 900;
  color: #FF6B9D;
  line-height: 80px;
`;

const EuroSymbol = styled.Text`
  font-size: 32px;
  font-weight: 900;
  color: #FFFFFF;
  position: absolute;
  top: 10px;
  right: 16px;
`;

const HeadlineContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 30px;
`;

const HeadlineText = styled.Text`
  font-size: 28px;
  font-weight: 800;
  color: #FFFFFF;
  text-align: left;
  line-height: 34px;
`;

const DontLabel = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 16px;
  margin-left: 8px;
`;

const BreakdownItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

const BreakdownCard = styled.View`
  background-color: #6B9DFF;
  border-radius: 12px;
  padding-vertical: 16px;
  padding-horizontal: 24px;
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
  font-size: 48px;
  font-weight: 900;
  color: #FFFFFF;
  line-height: 48px;
`;

const BreakdownEuro = styled.Text`
  font-size: 20px;
  font-weight: 900;
  color: #FFFFFF;
  position: absolute;
  top: 8px;
  right: 16px;
`;

const BreakdownLabel = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: #FFFFFF;
  margin-left: 16px;
`;


const BottomTextContainer = styled.View`
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  padding-horizontal: 24px;
`;

const BottomText = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #FFFFFF;
  text-align: center;
  line-height: 24px;
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
      {/* Starburst character top right */}
      <StarburstContainer>
        <Starburst>
          {Array.from({ length: 16 }).map((_, index) => (
            <View
              key={index}
              style={{
                position: 'absolute',
                width: 6,
                height: 45,
                backgroundColor: '#FFFFFF',
                borderRadius: 3,
                transform: [
                  { rotate: `${index * 22.5}deg` },
                  { translateY: -32 },
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
      <MainEarningsCard>
        <EarningsAmount>{totalEarnings}</EarningsAmount>
        <EuroSymbol>€</EuroSymbol>
      </MainEarningsCard>

      {/* Headline */}
      <HeadlineContainer>
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
        <BreakdownItem>
          <BreakdownCard>
            <BreakdownAmount>{bonus}</BreakdownAmount>
            <BreakdownEuro>€</BreakdownEuro>
          </BreakdownCard>
          <BreakdownLabel>en bonus</BreakdownLabel>
        </BreakdownItem>
      )}

      {/* Tips breakdown - only show if tips > 0 */}
      {tips > 0 && (
        <BreakdownItem>
          <BreakdownCard>
            <BreakdownAmount>{tips}</BreakdownAmount>
            <BreakdownEuro>€</BreakdownEuro>
          </BreakdownCard>
          <BreakdownLabel>en pourboires</BreakdownLabel>
        </BreakdownItem>
      )}

      {/* Bottom message */}
      <BottomTextContainer>
        <BottomText>
          {getMessage()}
        </BottomText>
      </BottomTextContainer>
    </Container>
  );
}
