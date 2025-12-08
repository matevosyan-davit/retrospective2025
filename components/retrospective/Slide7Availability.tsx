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
`;

const CalendarContainer = styled(Animated.View)`
  align-items: center;
  margin-bottom: 40px;
`;

const Calendar = styled.View`
  width: 120px;
  height: 100px;
  background-color: #6B9DFF;
  border-radius: 8px;
  padding: 12px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 6px;
  elevation: 8;
`;

const CalendarHooks = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 8px;
`;

const Hook = styled.View`
  width: 12px;
  height: 20px;
  background-color: #0A1B5C;
  border-radius: 6px;
  margin-top: -20px;
`;

const CalendarGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: space-between;
`;

const CalendarDay = styled.View`
  width: 20px;
  height: 20px;
  background-color: #FFFFFF;
  border-radius: 4px;
`;

const HeadlineContainer = styled(Animated.View)`
  margin-bottom: 30px;
`;

const HeadlineText = styled.Text`
  font-size: 32px;
  font-weight: 800;
  color: #FFFFFF;
  text-align: left;
  line-height: 38px;
`;

const DaysContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
`;

const DaysCard = styled(Animated.View)`
  background-color: #0A1B5C;
  border-radius: 16px;
  padding: 28px;
  shadow-color: #000;
  shadow-offset: 0px 8px;
  shadow-opacity: 0.4;
  shadow-radius: 10px;
  elevation: 10;
  min-width: 150px;
`;

const DaysNumber = styled.Text`
  font-size: 72px;
  font-weight: 900;
  color: #FF6B9D;
  line-height: 72px;
  text-align: center;
`;

const DaysLabel = styled.Text`
  font-size: 28px;
  font-weight: 800;
  color: #FFFFFF;
  margin-left: 20px;
  margin-top: 10px;
`;

const BestDaySection = styled.View`
  margin-bottom: 20px;
`;

const BestDayLabel = styled.Text`
  font-size: 18px;
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 10px;
`;

const BestDayCard = styled(Animated.View)`
  background-color: #0A1B5C;
  border-radius: 12px;
  padding: 14px 22px;
  shadow-color: #000;
  shadow-offset: 0px 6px;
  shadow-opacity: 0.4;
  shadow-radius: 8px;
  elevation: 8;
  align-self: flex-start;
`;

const BestDayText = styled.Text`
  font-size: 26px;
  font-weight: 900;
  color: #FF6B9D;
  letter-spacing: 1px;
`;


const BottomTextContainer = styled(Animated.View)`
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  padding-horizontal: 24px;
`;

const BottomText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #FFFFFF;
  text-align: center;
  line-height: 26px;
`;

interface Slide7AvailabilityProps {
  availabilityDays: number;
  bestDay: string;
}

export default function Slide7Availability({
  availabilityDays = 320,
  bestDay = 'MERCREDI',
}: Slide7AvailabilityProps) {
  // Animation values
  const headlineOpacity = useSharedValue(0);
  const headlineTranslateY = useSharedValue(10);
  const daysCardScale = useSharedValue(0.6);
  const daysCardRotation = useSharedValue(-5);
  const bestDayCardScale = useSharedValue(0.6);
  const bestDayCardRotation = useSharedValue(-5);
  const calendarTranslateY = useSharedValue(0);
  const calendarRotation = useSharedValue(0);
  const footerOpacity = useSharedValue(0);

  useEffect(() => {
    // Headline: fade-in + upward motion
    headlineOpacity.value = withTiming(1, { duration: 400 });
    headlineTranslateY.value = withTiming(0, { duration: 400 });

    // Days card: scale-in with rotation and spring bounce
    daysCardScale.value = withDelay(200, withSpring(1, { damping: 10, stiffness: 100 }));
    daysCardRotation.value = withDelay(200, withTiming(-8, { duration: 600 }));

    // Best day card: scale-in with rotation
    bestDayCardScale.value = withDelay(400, withSpring(1, { damping: 10, stiffness: 100 }));
    bestDayCardRotation.value = withDelay(400, withTiming(3, { duration: 600 }));

    // Calendar mascot: floating loop with rotation oscillation
    calendarTranslateY.value = withDelay(
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
    calendarRotation.value = withDelay(
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
    footerOpacity.value = withDelay(800, withTiming(1, { duration: 400 }));
  }, []);

  const headlineStyle = useAnimatedStyle(() => ({
    opacity: headlineOpacity.value,
    transform: [{ translateY: headlineTranslateY.value }],
  }));

  const daysCardStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: daysCardScale.value },
      { rotate: `${daysCardRotation.value}deg` },
    ],
  }));

  const bestDayCardStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: bestDayCardScale.value },
      { rotate: `${bestDayCardRotation.value}deg` },
    ],
  }));

  const calendarStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: calendarTranslateY.value },
      { rotate: `${calendarRotation.value}deg` },
    ],
  }));

  const footerStyle = useAnimatedStyle(() => ({
    opacity: footerOpacity.value,
  }));

  return (
    <Container>
      {/* Calendar icon at top */}
      <CalendarContainer style={calendarStyle}>
        <View>
          <CalendarHooks>
            <Hook />
            <Hook />
          </CalendarHooks>
          <Calendar>
            <CalendarGrid>
              {Array.from({ length: 12 }).map((_, index) => (
                <CalendarDay key={index} />
              ))}
            </CalendarGrid>
          </Calendar>
        </View>
      </CalendarContainer>

      {/* Headline */}
      <HeadlineContainer style={headlineStyle}>
        <HeadlineText>Vous avez été dispo</HeadlineText>
      </HeadlineContainer>

      {/* Days available card */}
      <DaysContainer>
        <DaysCard style={daysCardStyle}>
          <DaysNumber>{availabilityDays}</DaysNumber>
        </DaysCard>
        <DaysLabel>jours</DaysLabel>
      </DaysContainer>

      {/* Best day section */}
      <BestDaySection>
        <BestDayLabel>Votre meilleur{'\n'}jour de livraison :</BestDayLabel>
        <BestDayCard style={bestDayCardStyle}>
          <BestDayText>{bestDay}</BestDayText>
        </BestDayCard>
      </BestDaySection>

      {/* Bottom message */}
      <BottomTextContainer style={footerStyle}>
        <BottomText>
          {availabilityDays >= 200
            ? "Quand vous vous y mettez, vous ne faites pas semblant 😄"
            : "N'hésitez pas à en mettre plus si vous voulez recevoir + de colis !"}
        </BottomText>
      </BottomTextContainer>
    </Container>
  );
}
