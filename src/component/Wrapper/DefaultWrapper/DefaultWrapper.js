import classNames from 'classnames/bind';
import styles from './DefaultWrapper.module.scss';

const cx = classNames.bind(styles);

function DefaultWrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

export default DefaultWrapper;
