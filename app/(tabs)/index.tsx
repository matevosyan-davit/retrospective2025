import { Text } from 'react-native';
import styled from 'styled-components/native';
import RetrospectiveBanner from '@/components/RetrospectiveBanner';

const Container = styled.View`
  flex: 1;
  background-color: #F9FAFB;
`;

const ScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

const Header = styled.View`
  padding-horizontal: 16px;
  padding-top: 60px;
  padding-bottom: 16px;
  background-color: #FFFFFF;
`;

const Greeting = styled.Text`
  font-size: 32px;
  font-weight: 800;
  color: #0A1B5C;
  margin-bottom: 4px;
`;

const HeaderSubtitle = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #6B7280;
`;

const ContentSection = styled.View`
  padding-horizontal: 16px;
  margin-top: 8px;
`;

const SectionTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #0A1B5C;
  margin-bottom: 12px;
`;

const PlaceholderCard = styled.View`
  background-color: #FFFFFF;
  border-radius: 16px;
  padding: 24px;
  border-width: 2px;
  border-color: #E5E7EB;
  border-style: dashed;
`;

const PlaceholderText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #9CA3AF;
  text-align: center;
`;

export default function HomeScreen() {
  return (
    <Container>
      <ScrollView>
        <Header>
          <Greeting>Bonjour! 👋</Greeting>
          <HeaderSubtitle>Bienvenue sur votre tableau de bord</HeaderSubtitle>
        </Header>

        <RetrospectiveBanner />

        <ContentSection>
          <SectionTitle>Activité récente</SectionTitle>
          <PlaceholderCard>
            <PlaceholderText>
              Vos statistiques et activités apparaîtront ici
            </PlaceholderText>
          </PlaceholderCard>
        </ContentSection>
      </ScrollView>
    </Container>
  );
}
