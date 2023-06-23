import { TouchableOpacityProps } from 'react-native';

import { theme } from '../../themes/themes';
import Text from '../text/text';
import { TextTypes } from '../text/textTypes';
import { ButtonContainer } from './button-style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
}

const Button = ({ title, margin, ...props }: ButtonProps) => {
  return (
    <ButtonContainer margin={margin} {...props}>
      <Text type={TextTypes.TITLE} color={theme.colors.neutralTheme.white}>
        {title}
      </Text>
    </ButtonContainer>
  );
};

export default Button;
