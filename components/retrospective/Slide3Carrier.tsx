import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

const Container = styled(LinearGradient).attrs({
  colors: ['#FF6B9D', '#FF8EB5'],
  locations: [0, 1],
})`
  flex: 1;
  padding-top: 80px;
  padding-horizontal: 24px;
`;

const StarburstContainer = styled(Animatable.View)`
  align-items: center;
  margin-bottom: 30px;
`;

const StarContainer = styled.View`
  width: 180px;
  height: 180px;
  justify-content: center;
  align-items: center;
`;

const StarPoint = styled.View<{ rotation: number }>`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: #FFB3D9;
`;

const StarCenter = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: #FF6B9D;
  z-index: 10;
`;

const Headline = styled(Animatable.Text)`
  font-size: 30px;
  font-weight: 800;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 30px;
  line-height: 38px;
`;

const CarrierCard = styled(Animatable.View)`
  background-color: #0A1B5C;
  border-radius: 16px;
  padding-vertical: 28px;
  padding-horizontal: 32px;
  align-self: center;
  transform: rotate(-8deg);
  shadow-color: #000;
  shadow-offset: 0px 8px;
  shadow-opacity: 0.4;
  shadow-radius: 10px;
  elevation: 10;
  margin-bottom: 40px;
`;

const CarrierName = styled.Text`
  font-size: 56px;
  font-weight: 900;
  color: #FF6B9D;
  text-align: center;
  letter-spacing: 2px;
`;


const BottomTextContainer = styled(Animatable.View)`
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
`;

interface Slide3CarrierProps {
  favoriteCarrier: string;
}

export default function Slide3Carrier({ favoriteCarrier = 'COLISSIMO' }: Slide3CarrierProps) {
  return (
    <Container>
      <StarburstContainer
        animation="pulse"
        iterationCount="infinite"
        duration={2000}
        delay={800}
      >
        <StarContainer>
          {[0, 72, 144, 216, 288].map((rotation) => (
            <StarPoint
              key={rotation}
              rotation={rotation}
              style={{
                transform: [{ rotate: `${rotation}deg` }],
              }}
            />
          ))}
          <StarCenter />
        </StarContainer>
      </StarburstContainer>

      <Headline
        animation="fadeInUp"
        duration={800}
        delay={200}
      >
        Le transporteur n°1{'\n'}dans votre cœur :
      </Headline>

      <CarrierCard
        animation="zoomIn"
        duration={1000}
        delay={800}
      >
        <CarrierName>{favoriteCarrier}</CarrierName>
      </CarrierCard>

      <BottomTextContainer
        animation="fadeIn"
        duration={800}
        delay={1600}
      >
        <BottomText>
          Les livreurs sont devenus vos BFF 💚
        </BottomText>
      </BottomTextContainer>
    </Container>
  );
}
