import { FC, HTMLAttributes } from 'react';
import { CardWrapper, CardHeader, CardFooter } from './styles';
import { ElementBorders } from '../interfaces';

export const Card: FC<CardProps> = ({ children, ...rest }) => <CardWrapper {...rest}>{children}</CardWrapper>;

export type CardProps = Pick<ElementBorders, 'pill'> & HTMLAttributes<HTMLElement>;

export { CardHeader, CardFooter };
