import classNames from 'classnames/bind';
import styles from './Aside.module.scss';
import { AiOutlineSetting } from 'react-icons/ai';
import { MdDashboard } from 'react-icons/md';
import { FaThermometerThreeQuarters } from 'react-icons/fa';
import { SiSimpleanalytics } from 'react-icons/si';
import images from '~/assets/img';
import Button from '~/component/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Aside() {
    const [focusValue, setFocusValue] = useState('id1');

    const handlePathFocus = (e) => {
        document.querySelector(`#${focusValue}`).classList.remove('bgc');
        setFocusValue(e.target.id);
    };

    useEffect(() => {
        document.querySelector(`#${focusValue}`).classList.add('bgc');
    }, [focusValue]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img className={cx('img')} src={images.logo} alt="Forsaken" />
            </div>
            <div className={cx('container')}>
                <Button
                    id={'id1'}
                    primary
                    to={'/'}
                    leftIcon={<MdDashboard className={cx('icon')} />}
                    onFocus={handlePathFocus}
                >
                    DashBoard
                </Button>
                <Button
                    id={'id2'}
                    primary
                    to={'/sensordata'}
                    leftIcon={<FaThermometerThreeQuarters className={cx('icon')} />}
                    onFocus={handlePathFocus}
                >
                    Sensor Data
                </Button>
                <Button
                    id={'id3'}
                    primary
                    to={'/historicaldata'}
                    leftIcon={<SiSimpleanalytics className={cx('icon')} />}
                    onFocus={handlePathFocus}
                >
                    Historical Data and Analytics
                </Button>
                <Button
                    id={'id4'}
                    primary
                    to={'/manager'}
                    leftIcon={<FontAwesomeIcon icon={faPeopleRoof} className={cx('icon')} />}
                    onFocus={handlePathFocus}
                >
                    Device Manager
                </Button>
                <Button
                    id={'id5'}
                    primary
                    to={'/settings'}
                    leftIcon={<AiOutlineSetting className={cx('icon')} />}
                    onFocus={handlePathFocus}
                >
                    Setting and Customization
                </Button>
            </div>
        </div>
    );
}

export default Aside;
