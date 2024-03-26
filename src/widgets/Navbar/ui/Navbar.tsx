import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import classNames from "classnames";
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar)}>
            <ThemeSwitcher />
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