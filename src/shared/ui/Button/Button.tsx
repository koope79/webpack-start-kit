import classNames from "classnames";
import { ButtonHTMLAttributes, FC } from "react";
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}


const Button:FC<ButtonProps> = ({
    className,
    theme,
    children,
    ...otherProps
}) => {
    return (
        <button 
            className={classNames(cls.Button, cls[theme], className)}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;