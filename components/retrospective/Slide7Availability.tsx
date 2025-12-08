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

const CalendarContainer = styled.View`
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

const HeadlineContainer = styled.View`
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
  margin-bottom: 60px;
`;

const DaysCard = styled.View`
  background-color: #0A1B5C;
  border-radius: 16px;
  padding: 32px;
  transform: rotate(-8deg);
  shadow-color: #000;
  shadow-offset: 0px 8px;
  shadow-opacity: 0.4;
  shadow-radius: 10px;
  elevation: 10;
  min-width: 160px;
`;

const DaysNumber = styled.Text`
  font-size: 80px;
  font-weight: 900;
  color: #FF6B9D;
  line-height: 80px;
  text-align: center;
`;

const DaysLabel = styled.Text`
  font-size: 32px;
  font-weight: 800;
  color: #FFFFFF;
  margin-left: 20px;
  margin-top: 10px;
`;

const BestDaySection = styled.View`
  margin-bottom: 40px;
`;

const BestDayLabel = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 16px;
`;

const BestDayCard = styled.View`
  background-color: #0A1B5C;
  border-radius: 16px;
  padding: 24px 32px;
  transform: rotate(3deg);
  shadow-color: #000;
  shadow-offset: 0px 6px;
  shadow-opacity: 0.4;
  shadow-radius: 8px;
  elevation: 8;
  align-self: flex-start;
`;

const BestDayText = styled.Text`
  font-size: 40px;
  font-weight: 900;
  color: #FF6B9D;
  letter-spacing: 2px;
`;


const BottomTextContainer = styled.View`
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
  return (
    <Container>
      {/* Calendar icon at top */}
      <CalendarContainer>
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
      <HeadlineContainer>
        <HeadlineText>Vous avez été dispo</HeadlineText>
      </HeadlineContainer>

      {/* Days available card */}
      <DaysContainer>
        <DaysCard>
          <DaysNumber>{availabilityDays}</DaysNumber>
        </DaysCard>
        <DaysLabel>jours</DaysLabel>
      </DaysContainer>

      {/* Best day section */}
      <BestDaySection>
        <BestDayLabel>Votre meilleur{'\n'}jour de livraison :</BestDayLabel>
        <BestDayCard>
          <BestDayText>{bestDay}</BestDayText>
        </BestDayCard>
      </BestDaySection>

      {/* Bottom message */}
      <BottomTextContainer>
        <BottomText>
          {availabilityDays >= 200
            ? "Quand vous vous y mettez,{'\n'}vous ne faites pas semblant 😄"
            : "N'hésitez pas à en mettre plus{'\n'}si vous voulez recevoir + de colis !"}
        </BottomText>
      </BottomTextContainer>
    </Container>
  );
}
