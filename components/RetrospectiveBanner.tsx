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
  background-color: #1B2571;
  border-radius: 24px;
  padding: 24px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 8px;
  elevation: 8;
`;

const PinkCard = styled.View`
  background-color: #FF7391;
  border-radius: 12px;
  padding: 20px 24px;
  position: relative;
  overflow: visible;
  margin-bottom: 20px;
`;

const TitleText = styled.Text`
  font-size: 32px;
  font-weight: 900;
  color: #1B2571;
  text-align: left;
  letter-spacing: -2px;
  line-height: 56px;
`;

const StampContainer = styled.View`
  position: absolute;
  top: 12px;
  bottom: -12px;
  right: 40px;
  background-color: #8AADFF;
  padding-horizontal: 24px;
  padding-vertical: 10px;
  border-radius: 8px;
  transform: rotate(8deg);
  shadow-color: #000;
  shadow-offset: 0px 3px;
  shadow-opacity: 0.25;
  shadow-radius: 5px;
  elevation: 5;
`;

const StampText = styled.Text`
  font-size: 28px;
  font-weight: 900;
  color: #FFFFFF;
  letter-spacing: 2px;
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
