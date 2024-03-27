import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import classNames from "classnames";
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar)}>
            <div className={cls.links}>
                <AppLink 
                    to={'/'} 
                    theme={AppLinkTheme.SECONDARY} 
                    className={classNames(cls.mainLink, className)}
                >Главная</AppLink>
                <AppLink 
                    to={'/about'} 
                    theme={AppLinkTheme.SECONDARY}
                >О сайте</AppLink>
            </div>
        </div>
    );
};