import classNames from 'classnames/bind';
import Box from '~/component/Box';
import Back from '../Back';
import styles from './Analytics.module.scss';
import images from '~/assets/img';

const cx = classNames.bind(styles);

function Analytics() {
    return (
        <div className={cx('wrapper')}>
            <Back />
            <Box analytics>
                <img className={cx('box')} src={images.frequency} alt="frequency" />
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

export default Analytics;
