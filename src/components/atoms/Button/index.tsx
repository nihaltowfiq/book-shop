import { ButtonHTMLAttributes, FC } from 'react';
import { ButtonVariant, ElementBorders } from '../interfaces';
import { ButtonWrapper } from './styles';

export const Button: FC<ButtonProps> = ({ children, ...rest }) => {
    return <ButtonWrapper {...rest}>{children}</ButtonWrapper>;
};

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        Pick<ElementBorders, 'pill'> {
    variant?: ButtonVariant;
    block?: boolean;
}

Button.defaultProps = {
    variant: 'primary',
    pill: false,
    block: false,
};
