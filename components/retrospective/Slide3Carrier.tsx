import { Text, Image } from 'react-native';
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
        <Image
          source={require('@/assets/images/étoile_rose.png')}
          style={{ width: 140, height: 140 }}
          resizeMode="contain"
        />
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
