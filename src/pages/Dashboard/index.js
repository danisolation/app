import classNames from 'classnames/bind';
import Box from '~/component/Box';
import Background from './Background';
import styles from './Dashboard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHalf, faDroplet, faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useStore } from '~/store';

const cx = classNames.bind(styles);

function DashBoard() {
    const data = useStore();
    const { lastTemp, lastHumid } = data;

    return (
        <div className={cx('wrapper')}>
            <Background />
            <Link to={'/sensordata'}>
                <Box
                    style={{
                        background: 'var(--temp)',
                    }}
                    leftIcon={<FontAwesomeIcon className={cx('icon')} icon={faTemperatureHalf} />}
                >
                    {lastTemp ? `${lastTemp}oC` : '...'}
                </Box>
            </Link>
            <Link to={'/sensordata'}>
                <Box
                    style={{
                        background: 'var(--hud)',
                    }}
                    leftIcon={<FontAwesomeIcon className={cx('icon')} icon={faDroplet} />}
                >
                    {lastHumid ? `${lastHumid}%` : '...'}
                </Box>
            </Link>
            <Link to={'/sensordata'}>
                <Box
                    style={{
                        background: 'var(--home)',
                    }}
                    leftIcon={<FontAwesomeIcon className={cx('icon')} icon={faHouse} />}
                >
                    Good
                </Box>
            </Link>
        </div>
    );
}

export default DashBoard;
