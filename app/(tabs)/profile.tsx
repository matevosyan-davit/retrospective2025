import { Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F9FAFB;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: #0A1B5C;
  margin-bottom: 8px;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  color: #6B7280;
`;

export default function ProfileScreen() {
  return (
    <Container>
      <Title>Profil</Title>
      <Subtitle>Gérez votre compte ici</Subtitle>
    </Container>
  );
}
