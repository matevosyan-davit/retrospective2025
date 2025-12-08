import { useState, useEffect, useRef } from 'react';
import { View, Pressable } from 'react-native';
import styled from 'styled-components/native';
import { useRouter } from 'expo-router';
import { X } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, cancelAnimation, runOnJS } from 'react-native-reanimated';
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

const ProgressBarContainer = styled.View`
  flex: 1;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  overflow: hidden;
`;

const ProgressBarFill = styled(Animated.View)`
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
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

const SlideContainer = styled(Animated.View)`
  flex: 1;
`;

const SLIDE_DURATION = 5000;

export default function RetrospectiveScreen() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressValues = useRef(Array.from({ length: 12 }, () => useSharedValue(0))).current;
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeRef = useRef<number>(0);
  const prevSlideRef = useRef(0);

  const slideTranslateX = useSharedValue(0);
  const slideOpacity = useSharedValue(1);

  const totalSlides = 12;

  const handleClose = () => {
    router.back();
  };

  const resetProgress = (slideIndex: number) => {
    progressValues[slideIndex].value = 0;
  };

  const startSlideProgress = (slideIndex: number, startFrom: number = 0) => {
    if (slideIndex === totalSlides - 1) {
      return;
    }

    const remainingDuration = SLIDE_DURATION * (1 - startFrom);
    progressValues[slideIndex].value = startFrom;
    progressValues[slideIndex].value = withTiming(1, {
      duration: remainingDuration,
      easing: Easing.linear,
    });

    timerRef.current = setTimeout(() => {
      setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
    }, remainingDuration);
  };

  const pauseProgress = () => {
    if (currentSlide < totalSlides - 1) {
      cancelAnimation(progressValues[currentSlide]);
      pauseTimeRef.current = progressValues[currentSlide].value;

      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    }
  };

  const resumeProgress = () => {
    if (currentSlide < totalSlides - 1) {
      startSlideProgress(currentSlide, pauseTimeRef.current);
    }
  };

  const handlePressIn = () => {
    setIsPaused(true);
    pauseProgress();
  };

  const handlePressOut = () => {
    setIsPaused(false);
    resumeProgress();
  };

  const goToPrevious = () => {
    if (currentSlide > 0) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      cancelAnimation(progressValues[currentSlide]);
      resetProgress(currentSlide);
      setIsPaused(false);
      pauseTimeRef.current = 0;
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToNext = () => {
    if (currentSlide < totalSlides - 1) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      cancelAnimation(progressValues[currentSlide]);
      resetProgress(currentSlide);
      setIsPaused(false);
      pauseTimeRef.current = 0;
      setCurrentSlide(currentSlide + 1);
    } else {
      handleClose();
    }
  };

  useEffect(() => {
    const isMovingForward = currentSlide > prevSlideRef.current;

    if (currentSlide !== 0) {
      slideTranslateX.value = isMovingForward ? 100 : -100;
      slideOpacity.value = 0;

      slideTranslateX.value = withTiming(0, {
        duration: 400,
        easing: Easing.out(Easing.ease),
      });
      slideOpacity.value = withTiming(1, {
        duration: 400,
        easing: Easing.out(Easing.ease),
      });
    }

    prevSlideRef.current = currentSlide;

    if (currentSlide < totalSlides - 1) {
      pauseTimeRef.current = 0;
      startSlideProgress(currentSlide, 0);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentSlide]);

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

  const ProgressBar = ({ index }: { index: number }) => {
    const animatedStyle = useAnimatedStyle(() => {
      if (index < currentSlide) {
        return { width: '100%' };
      } else if (index === currentSlide) {
        return { width: `${progressValues[index].value * 100}%` };
      } else {
        return { width: '0%' };
      }
    });

    return (
      <ProgressBarContainer>
        <ProgressBarFill style={animatedStyle} />
      </ProgressBarContainer>
    );
  };

  const slideAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: slideTranslateX.value }],
      opacity: slideOpacity.value,
    };
  });

  return (
    <Container>
      <Gradient>
        <ProgressContainer>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <ProgressBar key={index} index={index} />
          ))}
        </ProgressContainer>

        <CloseButton onPress={handleClose}>
          <X size={28} color="#FFFFFF" strokeWidth={2.5} />
        </CloseButton>

        <TapZonesContainer>
          <TapZoneLeft
            onPress={goToPrevious}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          />
          <TapZoneRight
            onPress={goToNext}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          />
        </TapZonesContainer>

        <SlideContainer style={slideAnimatedStyle}>
          {renderSlide()}
        </SlideContainer>
      </Gradient>
    </Container>
  );
}
