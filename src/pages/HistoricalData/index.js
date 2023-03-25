import classNames from 'classnames/bind';
import styles from './HistoricalData.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function HistoricalData() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('link')}>
                <Link to={'/historicaldata/historical'}>
                    <div className={cx('text', 'his')}>
                        <span>Historical Data</span>
                    </div>
                </Link>
            </div>

            <div className={cx('link')}>
                <Link to={'/historicaldata/analytics'}>
                    <div className={cx('text', 'ana')}>
                        <span>Analytics</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default HistoricalData;
