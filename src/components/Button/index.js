import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function CustomButton({ children, href, to, onClick, active, leftIcon, rightIcon, text, ...passProps }) {
    let Component = 'button';
    const props = {
        ...passProps,
        onClick,
    };
    if (href) {
        props.href = href;
        Component = 'a';
    } else if (to) {
        props.to = to;
        Component = Link;
    }

    const classes = cx('wrapper', {
        active,
    });
    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon-left')}>{leftIcon}</span>}
            {children}
            {rightIcon && <span>{rightIcon}</span>}
            {text && <span className={cx('text-left')}>{text}</span>}
        </Component>
    );
}

export default CustomButton;
