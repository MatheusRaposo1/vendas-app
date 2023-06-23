import { Text, View } from 'react-native';

import Button from '../../../shared/button/button';
import Input from '../../../shared/input/input';
import { ContainerLogin } from './styles/login-style';

const Login = () => {
  const handleOnPress = () => {
    console.log('Clicou');
  };
  return (
    <View>
      <ContainerLogin>
        <Text>Tela de Login</Text>
        <Input />
        <Button margin="16px" title="Entrar" onPress={handleOnPress} />
      </ContainerLogin>
    </View>
  );
};

export default Login;
