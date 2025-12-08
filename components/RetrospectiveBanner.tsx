import { Text } from 'react-native';
import styled from 'styled-components/native';
import { useRouter } from 'expo-router';

const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  width: 100%;
  padding-horizontal: 16px;
  margin-vertical: 16px;
`;

const OuterCard = styled.View`
  background-color: #0A1B5C;
  border-radius: 24px;
  padding: 20px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 8px;
  elevation: 8;
`;

const PinkCard = styled.View`
  background-color: #FF6B9D;
  border-radius: 16px;
  padding: 24px;
  position: relative;
  overflow: visible;
  margin-bottom: 16px;
`;

const TitleText = styled.Text`
  font-size: 42px;
  font-weight: 900;
  color: #0A1B5C;
  text-align: left;
  letter-spacing: -1px;
  line-height: 52px;
`;

const StampContainer = styled.View`
  position: absolute;
  bottom: -8px;
  right: 16px;
  background-color: #A5C4FF;
  padding-horizontal: 20px;
  padding-vertical: 8px;
  border-radius: 8px;
  transform: rotate(5deg);
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 4;
`;

const StampText = styled.Text`
  font-size: 28px;
  font-weight: 900;
  color: #0A1B5C;
  letter-spacing: 1px;
`;

const SubtitleText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #FFFFFF;
  text-align: left;
  padding-horizontal: 4px;
`;

export default function RetrospectiveBanner() {
  const router = useRouter();

  const handlePress = () => {
    router.push('/retrospective');
  };

  return (
    <Container onPress={handlePress}>
      <OuterCard>
        <PinkCard>
          <TitleText>RÉTROSPECTIVE</TitleText>

          <StampContainer>
            <StampText>2025</StampText>
          </StampContainer>
        </PinkCard>

        <SubtitleText>
          Découvrez vos statistiques de livraison
        </SubtitleText>
      </OuterCard>
    </Container>
  );
}
