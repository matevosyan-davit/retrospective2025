import { useEffect } from 'react';
import { Text, View } from 'react-native';
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
`;

const StarburstContainer = styled.View`
  position: absolute;
  top: 80px;
  right: 20px;
  align-items: center;
`;

const Starburst = styled(Animated.View)`
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

const MainEarningsCard = styled(Animated.View)`
  background-color: #0A1B5C;
  border-radius: 16px;
  padding: 32px;
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
  margin-bottom: 24px;
`;

const HeadlineText = styled(Animated.Text)`
  font-size: 28px;
  font-weight: 800;
  color: #FFFFFF;
  text-align: left;
  line-height: 34px;
`;

const DontLabel = styled(Animated.Text)`
  font-size: 22px;
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 12px;
  margin-left: 8px;
`;

const BreakdownItem = styled(Animated.View)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

const BreakdownCard = styled.View`
  background-color: #6B9DFF;
  border-radius: 12px;
  padding-vertical: 12px;
  padding-horizontal: 20px;
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
  font-size: 36px;
  font-weight: 900;
  color: #FFFFFF;
  line-height: 36px;
`;

const BreakdownEuro = styled.Text`
  font-size: 16px;
  font-weight: 900;
  color: #FFFFFF;
  position: absolute;
  top: 6px;
  right: 12px;
`;

const BreakdownLabel = styled.Text`
  font-size: 20px;
  font-weight: 800;
  color: #FFFFFF;
  margin-left: 12px;
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

  const earningsScale = useSharedValue(0.6);
  const earningsRotate = useSharedValue(-5);
  const headlineOpacity = useSharedValue(0);
  const headlineY = useSharedValue(10);
  const dontOpacity = useSharedValue(0);
  const breakdown1Opacity = useSharedValue(0);
  const breakdown1X = useSharedValue(-20);
  const breakdown2Opacity = useSharedValue(0);
  const breakdown2X = useSharedValue(-20);
  const mascotY = useSharedValue(0);
  const mascotRotate = useSharedValue(0);
  const bottomOpacity = useSharedValue(0);

  useEffect(() => {
    earningsScale.value = withDelay(200, withSpring(1, { damping: 8, stiffness: 100 }));
    earningsRotate.value = withDelay(200, withSpring(-8, { damping: 8, stiffness: 100 }));

    headlineOpacity.value = withDelay(400, withTiming(1, { duration: 400 }));
    headlineY.value = withDelay(400, withTiming(0, { duration: 400 }));

    dontOpacity.value = withDelay(600, withTiming(1, { duration: 400 }));

    breakdown1Opacity.value = withDelay(700, withTiming(1, { duration: 400 }));
    breakdown1X.value = withDelay(700, withTiming(0, { duration: 400 }));

    breakdown2Opacity.value = withDelay(850, withTiming(1, { duration: 400 }));
    breakdown2X.value = withDelay(850, withTiming(0, { duration: 400 }));

    mascotY.value = withDelay(300, withRepeat(
      withSequence(
        withTiming(-8, { duration: 1500 }),
        withTiming(0, { duration: 1500 })
      ),
      -1,
      false
    ));

    mascotRotate.value = withDelay(300, withRepeat(
      withSequence(
        withTiming(-3, { duration: 2000 }),
        withTiming(3, { duration: 2000 })
      ),
      -1,
      true
    ));

    bottomOpacity.value = withDelay(1000, withTiming(1, { duration: 400 }));
  }, []);

  const earningsStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: earningsScale.value },
      { rotate: `${earningsRotate.value}deg` },
    ],
  }));

  const headlineStyle = useAnimatedStyle(() => ({
    opacity: headlineOpacity.value,
    transform: [{ translateY: headlineY.value }],
  }));

  const dontStyle = useAnimatedStyle(() => ({
    opacity: dontOpacity.value,
  }));

  const breakdown1Style = useAnimatedStyle(() => ({
    opacity: breakdown1Opacity.value,
    transform: [{ translateX: breakdown1X.value }],
  }));

  const breakdown2Style = useAnimatedStyle(() => ({
    opacity: breakdown2Opacity.value,
    transform: [{ translateX: breakdown2X.value }],
  }));

  const mascotStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: mascotY.value },
      { rotate: `${mascotRotate.value}deg` },
    ],
  }));

  const bottomStyle = useAnimatedStyle(() => ({
    opacity: bottomOpacity.value,
  }));

  return (
    <Container>
      <StarburstContainer>
        <Starburst style={mascotStyle}>
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

      <MainEarningsCard style={earningsStyle}>
        <EarningsAmount>{totalEarnings}</EarningsAmount>
        <EuroSymbol>€</EuroSymbol>
      </MainEarningsCard>

      <HeadlineContainer>
        <HeadlineText style={headlineStyle}>
          dans la poche{'\n'}juste en sauvant{'\n'}des colis.
        </HeadlineText>
      </HeadlineContainer>

      {(bonus > 0 || tips > 0) && (
        <DontLabel style={dontStyle}>Dont :</DontLabel>
      )}

      {bonus > 0 && (
        <BreakdownItem style={breakdown1Style}>
          <BreakdownCard>
            <BreakdownAmount>{bonus}</BreakdownAmount>
            <BreakdownEuro>€</BreakdownEuro>
          </BreakdownCard>
          <BreakdownLabel>en bonus</BreakdownLabel>
        </BreakdownItem>
      )}

      {tips > 0 && (
        <BreakdownItem style={breakdown2Style}>
          <BreakdownCard>
            <BreakdownAmount>{tips}</BreakdownAmount>
            <BreakdownEuro>€</BreakdownEuro>
          </BreakdownCard>
          <BreakdownLabel>en pourboires</BreakdownLabel>
        </BreakdownItem>
      )}

      <BottomTextContainer>
        <BottomText style={bottomStyle}>
          {getMessage()}
        </BottomText>
      </BottomTextContainer>
    </Container>
  );
}
