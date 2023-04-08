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
            <Box analytics>
                <img className={cx('box')} src={images.checked} alt="checked" />
            </Box>
            <Box analytics>
                <img className={cx('box')} src={images.home} alt="home" />
            </Box>
        </div>
    );
}

export default HistoricalData;
