import { Link, LinkProps } from 'react-router-dom';
import classNames from "classnames";
import cls from './AppLink.module.scss';
import { FC } from 'react';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
    to,
    className,
    theme = AppLinkTheme.PRIMARY, 
    children,
    ...otherProps
}) => {
    return (
        <Link 
            to={to} 
            className={classNames(cls.AppLink, cls[theme], className)}
            {...otherProps}
        >
            {children}
        </Link>
    );
};