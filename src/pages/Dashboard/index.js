import classNames from 'classnames/bind';
import Background from './Background';
import styles from './Dashboard.module.scss';

const cx = classNames.bind(styles);

function DashBoard() {
    return (
        <div className={cx('wrapper')}>
            <Background />
        </div>
    );
}

export default DashBoard;
