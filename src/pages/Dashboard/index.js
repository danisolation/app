import classNames from 'classnames/bind';
import Box from '~/component/Box';
import Background from './Background';
import styles from './Dashboard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHalf, faDroplet, faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function DashBoard() {
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
                    27&#8451;
                </Box>
            </Link>
            <Link to={'/sensordata'}>
                <Box
                    style={{
                        background: 'var(--hud)',
                    }}
                    leftIcon={<FontAwesomeIcon className={cx('icon')} icon={faDroplet} />}
                >
                    35%
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
