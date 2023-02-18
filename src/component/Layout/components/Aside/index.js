import classNames from 'classnames/bind';
import styles from './Aside.module.scss';
import { Link } from 'react-router-dom';
import { AiOutlineSetting } from 'react-icons/ai';
import { MdDashboard } from 'react-icons/md';
import { FaThermometerThreeQuarters } from 'react-icons/fa';
import { SiSimpleanalytics } from 'react-icons/si';
import { CiLogout } from 'react-icons/ci';

const cx = classNames.bind(styles);

function Aside() {
    return (
        <div className={cx('wrapper')}>
            <aside>
                <div className={cx('top')}>
                    <div className={cx('logo')}>
                        <h1 className={cx('text-muted')}>
                            For<span style={{ color: '#32cc4c' }}>saken</span>
                        </h1>
                    </div>
                </div>
                <div className={cx('sidebar')}>
                    <Link className={cx('link')} to="/">
                        <span className={cx('icon')}>
                            <MdDashboard />
                        </span>
                        <h3 className={cx('title')}>DashBoard</h3>
                    </Link>
                    <Link className={cx('link')} to="/sensordata">
                        <span className={cx('icon')}>
                            <FaThermometerThreeQuarters />
                        </span>
                        <h3 className={cx('title')}>Sensor Data</h3>
                    </Link>
                    <Link className={cx('link')} to="/historicaldata">
                        <span className={cx('icon')}>
                            <SiSimpleanalytics />
                        </span>
                        <h3 className={cx('title')}>Historical Data and Analytics</h3>
                    </Link>
                    <Link className={cx('link')} to="/settings">
                        <span className={cx('icon')}>
                            <AiOutlineSetting />
                        </span>
                        <h3 className={cx('title')}>Settings and Customization</h3>
                    </Link>
                    <Link to="/" className={cx('link')}>
                        <span className={cx('icon')}>
                            <CiLogout />
                        </span>
                        <h3 className={cx('title')}>Logout</h3>
                    </Link>
                </div>
            </aside>
        </div>
    );
}

export default Aside;
