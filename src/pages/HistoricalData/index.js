import classNames from 'classnames/bind';
import styles from './HistoricalData.module.scss';
import Box from '~/component/Box';
import images from '~/assets/img';

const cx = classNames.bind(styles);

function HistoricalData() {
    return (
        <div className={cx('wrapper')}>
            <Box analytics to={'/historicaldata/tempchart'}>
                <img className={cx('box')} src={images.tempChart} alt="frequency" />
            </Box>
            <Box analytics to={'/historicaldata/humidchart'}>
                <img className={cx('box')} src={images.humidChart} alt="checked" />
            </Box>
        </div>
    );
}

export default HistoricalData;
