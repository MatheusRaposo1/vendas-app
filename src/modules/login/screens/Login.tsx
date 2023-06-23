import { Text, View } from 'react-native';

import Button from '../../../shared/componentes/button/button';
import Input from '../../../shared/componentes/input/input';
import { ContainerLogin } from './styles/login-style';

const Login = () => {
  const handleOnPress = () => {
    console.log('Clicou');
  };
  return (
    <View>
      <ContainerLogin>
        <Text></Text>
        <Input />
        <Button margin="16px" title="Entrar" onPress={handleOnPress} />
      </ContainerLogin>
    </View>
  );
};

export default Login;
