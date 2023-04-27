import classNames from 'classnames/bind';
import Box from '~/component/Box';
import Background from './Background';
import styles from './Dashboard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHalf, faDroplet, faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useStore } from '~/store';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function DashBoard() {
    const data = useStore();
    const { lastTemp, lastHumid } = data;
    const [status, setStatus] = useState('GOOD');

    useEffect(() => {
        if (parseInt(lastTemp) > 40) {
            setStatus('WARN!');
        } else {
            setStatus('GOOD');
        }
    }, [parseInt(lastTemp)]);

    return (
        <div className={cx('wrapper')}>
            <Background />
            <Link to={'/historicaldata/tempchart'}>
                <Box
                    style={{
                        background: 'var(--temp)',
                    }}
                    leftIcon={<FontAwesomeIcon className={cx('icon')} icon={faTemperatureHalf} />}
                >
                    {lastTemp ? `${lastTemp}oC` : '...'}
                </Box>
            </Link>
            <Link to={'/historicaldata/humidchart'}>
                <Box
                    style={{
                        background: 'var(--hud)',
                    }}
                    leftIcon={<FontAwesomeIcon className={cx('icon')} icon={faDroplet} />}
                >
                    {lastHumid ? `${lastHumid}%` : '...'}
                </Box>
            </Link>
            <Link>
                <Box
                    style={{
                        background: `${status === 'GOOD' ? 'var(--home)' : 'var(--warn)'}`,
                        fontsize: '1px',
                    }}
                    leftIcon={<FontAwesomeIcon className={cx('icon')} icon={faHouse} />}
                >
                    {status}
                </Box>
            </Link>
        </div>
    );
}

export default DashBoard;
