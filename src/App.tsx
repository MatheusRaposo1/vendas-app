import { SafeAreaView, StyleSheet, Text } from 'react-native';
import styled from 'styled-components/native';

const TextNew = styled.Text`
  font-size: 24px;
  color: #e512f8;
`;
const App = () => {
  return (
    <SafeAreaView>
      <Text style={style.container}>Teste</Text>
      <TextNew>Novo teste</TextNew>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    color: 'green',
  },
});

export default App;
