import { FC, useRef } from 'react';
import Icon, { imageAdd } from '../../../libs/icons';
import { FormInputProps } from '../../atoms';
import {
    DropImage,
    FormControl,
    FormFeedback,
    FormGroup,
    FormLabel,
} from './styles';

export const FormUpload: FC<FormUploadProps> = (props) => {
    const { label, srOnly, message, className, style, required, ...rest } =
        props;
    const groupProps = { className, style };
    const labelProps = { required, srOnly, children: label };
    const controlProps = {
        isInvalid: !!(required && message),
        required,
        ...rest,
    };
    const imageRef = useRef<HTMLInputElement>(null);

    return (
        <FormGroup {...groupProps} onClick={() => imageRef.current!.click()}>
            <FormLabel {...labelProps} />
            <DropImage isInvalid={!!(required && message)}>
                <Icon path={imageAdd} width={32} height={32} />
                <p className="SelectText">Upload image</p>
            </DropImage>
            <FormControl type="file" ref={imageRef} {...controlProps} />
            {required && <FormFeedback>{message}</FormFeedback>}
        </FormGroup>
    );
};

export type FormUploadProps = Omit<FormInputProps, 'type'>;
