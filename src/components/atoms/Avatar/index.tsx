import { FC, ImgHTMLAttributes } from 'react';
import { ElementSize } from '../interfaces';
import { AvatarWrapper } from './styles';

export const Avatar: FC<AvatarProps> = (props) => <AvatarWrapper {...props} />;

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
	size?: ElementSize;
}

Avatar.defaultProps = {
	size: 'md',
	src: '/images/avatar.jpg',
};
