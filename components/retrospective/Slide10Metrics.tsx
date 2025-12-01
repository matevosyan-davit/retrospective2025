import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

const Container = styled(LinearGradient).attrs({
  colors: ['#1B2A7C', '#0A1B5C'],
  locations: [0, 1],
})`
  flex: 1;
  padding-top: 80px;
  padding-horizontal: 24px;
`;

const MagnifyingGlassContainer = styled.View`
  align-items: center;
  margin-bottom: 40px;
`;

const MagnifyingGlassWrapper = styled.View`
  position: relative;
  width: 100px;
  height: 100px;
`;

const GlassCircleOuter = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  border-width: 6px;
  border-color: #FFD700;
  background-color: #6B9DFF;
  position: absolute;
  top: 0;
  left: 10px;
`;

const GlassCircleInner = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border-width: 4px;
  border-color: #FFFFFF;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const GlassHandle = styled.View`
  width: 35px;
  height: 10px;
  background-color: #FFD700;
  border-radius: 5px;
  position: absolute;
  bottom: 15px;
  right: 5px;
  transform: rotate(45deg);
`;

const Sparkle = styled.View`
  position: absolute;
  width: 3px;
  height: 12px;
  background-color: #FFA500;
`;

const SparkleHorizontal = styled.View`
  position: absolute;
  width: 12px;
  height: 3px;
  background-color: #FFA500;
`;

const Sparkle1 = styled.View`
  position: absolute;
  top: 5px;
  left: -5px;
`;

const Sparkle2 = styled.View`
  position: absolute;
  top: 15px;
  right: -10px;
`;

const Sparkle3 = styled.View`
  position: absolute;
  bottom: 25px;
  right: 0px;
`;

const MetricsContainer = styled.View`
  gap: 32px;
  margin-bottom: 40px;
`;

const MetricRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MetricLabel = styled.Text`
  font-size: 22px;
  font-weight: 800;
  color: #FFFFFF;
  flex: 1;
  line-height: 28px;
`;

const MetricCard = styled.View`
  background-color: #8BA3E8;
  border-radius: 12px;
  padding: 16px 24px;
  min-width: 100px;
  transform: rotate(3deg);
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 6px;
  elevation: 6;
  position: relative;
`;

const MetricValue = styled.Text`
  font-size: 48px;
  font-weight: 900;
  color: #0A1B5C;
  text-align: center;
  line-height: 48px;
`;

const MetricUnit = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #0A1B5C;
  text-align: right;
  position: absolute;
  top: 8px;
  right: 12px;
`;

const MetricSubtext = styled.Text`
  font-size: 12px;
  font-weight: 700;
  color: #0A1B5C;
  text-align: center;
  margin-top: 2px;
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

interface Slide10MetricsProps {
  successRate: number;
  deliverySpeedHours: number;
  serviceContacts: number;
}

export default function Slide10Metrics({
  successRate = 95,
  deliverySpeedHours = 13,
  serviceContacts = 2,
}: Slide10MetricsProps) {
  return (
    <Container>
      {/* Magnifying glass at top */}
      <MagnifyingGlassContainer>
        <MagnifyingGlassWrapper>
          <GlassCircleOuter>
            <GlassCircleInner />
          </GlassCircleOuter>
          <GlassHandle />

          {/* Sparkles around the magnifying glass */}
          <Sparkle1>
            <Sparkle />
            <SparkleHorizontal style={{ top: 4.5 }} />
          </Sparkle1>

          <Sparkle2>
            <Sparkle />
            <SparkleHorizontal style={{ top: 4.5 }} />
          </Sparkle2>

          <Sparkle3>
            <Sparkle />
            <SparkleHorizontal style={{ top: 4.5 }} />
          </Sparkle3>
        </MagnifyingGlassWrapper>
      </MagnifyingGlassContainer>

      {/* Metrics */}
      <MetricsContainer>
        {/* Success rate */}
        <MetricRow>
          <MetricLabel>Taux de succès{'\n'}livraison :</MetricLabel>
          <MetricCard>
            <MetricUnit>%</MetricUnit>
            <MetricValue>{successRate}</MetricValue>
          </MetricCard>
        </MetricRow>

        {/* Delivery speed */}
        <MetricRow>
          <MetricLabel>Rapidité de{'\n'}livraison :</MetricLabel>
          <MetricCard>
            <MetricValue>{deliverySpeedHours}</MetricValue>
            <MetricSubtext>heures (en{'\n'}moyenne)</MetricSubtext>
          </MetricCard>
        </MetricRow>

        {/* Service contacts */}
        <MetricRow>
          <MetricLabel>Nombre de{'\n'}contact au{'\n'}service client :</MetricLabel>
          <MetricCard>
            <MetricValue>{serviceContacts}</MetricValue>
          </MetricCard>
        </MetricRow>
      </MetricsContainer>

      {/* Bottom message */}
      <BottomTextContainer>
        <BottomText>
          Rapide, autonome et fiable :{'\n'}impressionnant ! 😎
        </BottomText>
      </BottomTextContainer>
    </Container>
  );
}
