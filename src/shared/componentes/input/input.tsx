import { TextInputProps } from 'react-native';

import { ContainerInput } from './input-style';
type inputProps = TextInputProps;

const Input = ({ ...props }: inputProps) => {
  return <ContainerInput {...props} />;
};

export default Input;
