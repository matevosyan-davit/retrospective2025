import { Text, View, Dimensions, Image } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

const Container = styled(LinearGradient).attrs({
  colors: ['#FF8EB5', '#FF6B9D'],
  locations: [0, 1],
})`
  width: 100%;
  height: ${SCREEN_HEIGHT}px;
  justify-content: center;
  align-items: center;
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

const MerciCard = styled(Animatable.View)`
  background-color: #0A1B5C;
  border-radius: 20px;
  padding: 48px 40px;
  transform: rotate(-3deg);
  shadow-color: #000;
  shadow-offset: 0px 8px;
  shadow-opacity: 0.4;
  shadow-radius: 12px;
  elevation: 12;
  position: relative;
  align-items: center;
`;

const MerciText = styled.Text`
  font-size: 72px;
  font-weight: 900;
  color: #FFFFFF;
  text-transform: uppercase;
  letter-spacing: -2px;
  text-align: center;
  line-height: 72px;
  margin-bottom: 8px;
`;

const AVousText = styled.Text`
  font-size: 72px;
  font-weight: 900;
  color: #FFFFFF;
  text-transform: uppercase;
  letter-spacing: -2px;
  text-align: center;
  line-height: 72px;
`;

const BisousBadge = styled.View`
  background-color: #8BA3E8;
  border-radius: 12px;
  padding: 14px 32px;
  transform: rotate(8deg);
  position: absolute;
  bottom: -20px;
  right: -10px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 6px;
  elevation: 6;
`;

const BisousText = styled.Text`
  font-size: 28px;
  font-weight: 900;
  color: #FFFFFF;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const HeartText = styled.Text`
  font-size: 32px;
  position: absolute;
  top: -40px;
  right: 20px;
`;

export default function Slide12Outro() {
  return (
    <Container>
      <BackgroundImage
        source={require('@/assets/images/fond_rose_nuage..png')}
        resizeMode="cover"
      />
      <MerciCard
        animation="zoomIn"
        duration={1000}
        delay={200}
      >
        <HeartText>❤️</HeartText>
        <MerciText>MERCI</MerciText>
        <AVousText>À VOUS</AVousText>
        <BisousBadge>
          <BisousText>BISOUS</BisousText>
        </BisousBadge>
      </MerciCard>
    </Container>
  );
}
