import classNames from 'classnames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const Sidebar = ({className}: SidebarProps) => {
    const [colapsed, setColapsed] = useState(false);

    const onToggle = () => {
        setColapsed(prev => !prev);
    };
    
    return (
        <div className={classNames(cls.Sidebar, {[cls.colapsed]: colapsed}, className)}>
            <button onClick={onToggle}>Toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};

export default Sidebar;