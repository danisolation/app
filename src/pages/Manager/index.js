import classNames from 'classnames/bind';
import Box from '~/component/Box';
import styles from './Manager.module.scss';
import images from '~/assets/img';

const cx = classNames.bind(styles);

function Manager() {
    return (
        <div className={cx('wrapper')}>
            <Box dev to={'/manager/fan'}>
                <img className={cx('img')} src={images.fan} alt="fan" />
            </Box>
            <Box dev to={'/manager/light'}>
                <img className={cx('img')} src={images.lamp} alt="lamp" />
            </Box>
            <Box dev to={'/manager/pump'}>
                <img className={cx('img')} src={images.water} alt="water-tap" />
            </Box>
        </div>
    );
}

export default Manager;
