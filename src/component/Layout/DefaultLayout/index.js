import Aside from '../components/Aside/Aside';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Aside />
            <div className={cx('content')}>{children}</div>
        </div>
    );
}

export default DefaultLayout;
