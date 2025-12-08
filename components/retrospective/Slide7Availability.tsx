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

const CalendarContainer = styled(Animatable.View)`
  align-items: center;
  margin-bottom: 25px;
`;

const Calendar = styled.View`
  width: 90px;
  height: 75px;
  background-color: #6B9DFF;
  border-radius: 8px;
  padding: 10px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 6px;
  elevation: 8;
`;

const CalendarHooks = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 6px;
`;

const Hook = styled.View`
  width: 10px;
  height: 16px;
  background-color: #0A1B5C;
  border-radius: 5px;
  margin-top: -16px;
`;

const CalendarGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: space-between;
`;

const CalendarDay = styled.View`
  width: 15px;
  height: 15px;
  background-color: #FFFFFF;
  border-radius: 3px;
`;

const HeadlineContainer = styled(Animatable.View)`
  margin-bottom: 20px;
`;

const HeadlineText = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: #FFFFFF;
  text-align: left;
  line-height: 30px;
`;

const DaysContainer = styled(Animatable.View)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 25px;
`;

const DaysCard = styled.View`
  background-color: #0A1B5C;
  border-radius: 16px;
  padding: 24px 28px;
  transform: rotate(-8deg);
  shadow-color: #000;
  shadow-offset: 0px 8px;
  shadow-opacity: 0.4;
  shadow-radius: 10px;
  elevation: 10;
  min-width: 120px;
`;

const DaysNumber = styled.Text`
  font-size: 64px;
  font-weight: 900;
  color: #FF6B9D;
  line-height: 64px;
  text-align: center;
`;

const DaysLabel = styled.Text`
  font-size: 22px;
  font-weight: 800;
  color: #FFFFFF;
  margin-left: 18px;
  margin-top: 8px;
`;

const BestDaySection = styled(Animatable.View)`
  margin-bottom: 20px;
`;

const BestDayLabel = styled.Text`
  font-size: 17px;
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 10px;
`;

const BestDayCard = styled.View`
  background-color: #0A1B5C;
  border-radius: 12px;
  padding: 12px 20px;
  transform: rotate(3deg);
  shadow-color: #000;
  shadow-offset: 0px 6px;
  shadow-opacity: 0.4;
  shadow-radius: 8px;
  elevation: 8;
  align-self: flex-start;
`;

const BestDayText = styled.Text`
  font-size: 22px;
  font-weight: 900;
  color: #FF6B9D;
  letter-spacing: 0.5px;
`;


const BottomTextContainer = styled(Animatable.View)`
  position: absolute;
  bottom: 12px;
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

interface Slide7AvailabilityProps {
  availabilityDays: number;
  bestDay: string;
}

export default function Slide7Availability({
  availabilityDays = 320,
  bestDay = 'MERCREDI',
}: Slide7AvailabilityProps) {
  return (
    <Container>
      <BackgroundImage
        source={require('@/assets/images/fond_rose_nuage..png')}
        resizeMode="cover"
      />
      {/* Calendar icon at top */}
      <CalendarContainer
        animation="bounceIn"
        duration={1000}
        delay={200}
      >
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
      <HeadlineContainer
        animation="fadeInUp"
        duration={800}
        delay={600}
      >
        <HeadlineText>Vous avez été dispo</HeadlineText>
      </HeadlineContainer>

      {/* Days available card */}
      <DaysContainer
        animation="slideInLeft"
        duration={800}
        delay={1000}
      >
        <DaysCard>
          <DaysNumber>{availabilityDays}</DaysNumber>
        </DaysCard>
        <DaysLabel>jours</DaysLabel>
      </DaysContainer>

      {/* Best day section */}
      <BestDaySection
        animation="fadeInUp"
        duration={800}
        delay={1400}
      >
        <BestDayLabel>Votre meilleur{'\n'}jour de livraison :</BestDayLabel>
        <BestDayCard>
          <BestDayText>{bestDay}</BestDayText>
        </BestDayCard>
      </BestDaySection>

      {/* Bottom message */}
      <BottomTextContainer
        animation="fadeIn"
        duration={800}
        delay={1800}
      >
        <BottomText>
          {availabilityDays >= 200
            ? "Quand vous vous y mettez, vous ne faites pas semblant 😄"
            : "N'hésitez pas à en mettre plus si vous voulez recevoir + de colis !"}
        </BottomText>
      </BottomTextContainer>
    </Container>
  );
}
