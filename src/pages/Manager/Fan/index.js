import classNames from 'classnames/bind';
import styles from './Fan.module.scss';
import { useStore } from '~/store';
import images from '~/assets/img';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AIO_KEY = process.env.REACT_APP_KEY;
const AIO_USERNAME = 'danisolation';

const cx = classNames.bind(styles);

function Fan() {
    const data = useStore();
    const { lastFan } = data;
    const init = parseInt(lastFan);
    const [level, setLevel] = useState();
    const [prevFan, setPrevFan] = useState();
    const [power, setPower] = useState();
    const fetchData = async () => {
        const res = await axios.get(`http://localhost:8080/prevFan`);

        setPrevFan(res.data.value);
    };
    useEffect(() => {
        setLevel(init);
    }, [init]);
    const addLevel = () => {
        setLevel(level + 1);
        handleFanValueSubmit(String(level + 1));
    };
    const subLevel = () => {
        if (level > 0) {
            setLevel(level - 1);
            handleFanValueSubmit(String(level - 1));
        }
    };
    useEffect(() => {
        if (level > 0) {
            setPower(images.powerOn);
        } else {
            setPower(images.power);
        }
    }, [level]);
    const handlePower = () => {
        if (power === images.powerOn) {
            setPower(images.power);
            setLevel(0);
            handleFanValueSubmit(String(0));
            fetchData();
        } else {
            setPower(images.powerOn);

            handleFanValueSubmit(prevFan);
            let a = parseInt(prevFan);

            setLevel(a);
        }
    };

    const handleFanValueSubmit = async (fanValue) => {
        const FEED_NAME = 'fan';
        const newData = {
            value: fanValue,
        };
        axios
            .post(`https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/${FEED_NAME}/data`, newData, {
                headers: {
                    'X-AIO-Key': AIO_KEY,
                },
            })
            .then((response) => {
                console.log('Data added successfully:', response.data);
            })
            .catch((error) => {
                console.error('Error adding data:', error);
            });
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('img')}>
                <img src={images.fan} alt="fan" />
            </div>
            <div className={cx('control')}>
                <div className={cx('level')}>
                    <span>Level:</span>
                    <span onClick={subLevel}>
                        <strong>-</strong>
                    </span>
                    <span>{init !== NaN ? `${level}` : '...'}</span>
                    <span onClick={addLevel}>
                        <strong>+</strong>
                    </span>
                </div>
                <div className={cx('power')} onClick={handlePower}>
                    <img src={power} alt="power" />
                </div>
            </div>
        </div>
    );
}

export default Fan;
