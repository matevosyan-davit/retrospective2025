import { useState } from 'react';
import { View, Pressable } from 'react-native';
import styled from 'styled-components/native';
import { useRouter } from 'expo-router';
import { X } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Slide1Intro from '@/components/retrospective/Slide1Intro';
import Slide2Parcels from '@/components/retrospective/Slide2Parcels';
import Slide3Carrier from '@/components/retrospective/Slide3Carrier';
import Slide4Neighbors from '@/components/retrospective/Slide4Neighbors';
import Slide5Earnings from '@/components/retrospective/Slide5Earnings';
import Slide6Eco from '@/components/retrospective/Slide6Eco';
import Slide7Availability from '@/components/retrospective/Slide7Availability';
import Slide8Streaks from '@/components/retrospective/Slide8Streaks';
import Slide9Ratings from '@/components/retrospective/Slide9Ratings';
import Slide10Metrics from '@/components/retrospective/Slide10Metrics';
import Slide11Summary from '@/components/retrospective/Slide11Summary';
import Slide12Outro from '@/components/retrospective/Slide12Outro';

const Container = styled.View`
  flex: 1;
  background-color: #0A1B5C;
`;

const Gradient = styled(LinearGradient).attrs({
  colors: ['#0A1B5C', '#1B3A8C', '#0A1B5C'],
  locations: [0, 0.5, 1],
})`
  flex: 1;
`;

const ProgressContainer = styled.View`
  flex-direction: row;
  padding-horizontal: 8px;
  padding-top: 50px;
  gap: 4px;
  z-index: 5;
`;

interface ProgressBarProps {
  isActive: boolean;
}

const ProgressBar = styled.View<ProgressBarProps>`
  flex: 1;
  height: 3px;
  background-color: ${(props: ProgressBarProps) =>
    props.isActive ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.3)'
  };
  border-radius: 2px;
`;

const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 50px;
  right: 20px;
  z-index: 10;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
`;

const TapZonesContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  flex-direction: row;
  z-index: 1;
`;

const TapZoneLeft = styled(Pressable)`
  flex: 1;
`;

const TapZoneRight = styled(Pressable)`
  flex: 2;
`;

export default function RetrospectiveScreen() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = 12;

  const handleClose = () => {
    router.back();
  };

  const goToPrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      handleClose();
    }
  };

  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return <Slide1Intro />;
      case 1:
        return <Slide2Parcels parcelsDelivered={560} topPercentage={5} />;
      case 2:
        return <Slide3Carrier favoriteCarrier="COLISSIMO" />;
      case 3:
        return <Slide4Neighbors neighborsHelped={500} />;
      case 4:
        return <Slide5Earnings totalEarnings={560} tips={200} bonus={200} />;
      case 5:
        return <Slide6Eco co2Saved={100} />;
      case 6:
        return <Slide7Availability availabilityDays={320} bestDay="MERCREDI" />;
      case 7:
        return <Slide8Streaks flammesWeeks={32} flammeBadge="DIAMANT - KEEPER ÉTERNEL" />;
      case 8:
        return <Slide9Ratings ratingCount={245} ratingAvg={4.8} />;
      case 9:
        return <Slide10Metrics successRate={95} deliverySpeedHours={13} serviceContacts={2} />;
      case 10:
        return <Slide11Summary year={2025} rank={200} parcelsDelivered={745} neighborsHelped={500} totalEarnings={600} ratingAvg={4.9} />;
      case 11:
        return <Slide12Outro />;
      default:
        return <Slide1Intro />;
    }
  };

  return (
    <Container>
      <Gradient>
        <ProgressContainer>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <ProgressBar key={index} isActive={index <= currentSlide} />
          ))}
        </ProgressContainer>

        <CloseButton onPress={handleClose}>
          <X size={28} color="#FFFFFF" strokeWidth={2.5} />
        </CloseButton>

        <TapZonesContainer>
          <TapZoneLeft onPress={goToPrevious} />
          <TapZoneRight onPress={goToNext} />
        </TapZonesContainer>

        {renderSlide()}
      </Gradient>
    </Container>
  );
}
