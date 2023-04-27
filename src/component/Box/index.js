import classNames from 'classnames/bind';
import styles from './Box.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Box({
    to,
    primary = false,
    dev = false,
    dev1 = false,
    plus = false,
    analytics = false,
    style,
    children,
    id,
    className,
    leftIcon,
    rightIcon,
    ...passProps
}) {
    let Comp = 'div';
    const props = {
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        dev,
        dev1,
        plus,
        analytics,
    });
    return (
        <Comp id={id} className={classes} {...props}>
            <div style={style} className={cx('container')}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <span className={cx('title')}>{children}</span>
                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            </div>
        </Comp>
    );
}

export default Box;
