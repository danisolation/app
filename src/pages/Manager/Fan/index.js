import classNames from 'classnames/bind';
import styles from './Fan.module.scss';
import { useStore } from '~/store';
import images from '~/assets/img';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Back from '~/component/Back';
import 'react-notifications-component/dist/theme.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AIO_KEY = process.env.REACT_APP_KEY;
const AIO_USERNAME = 'Danny0943777525';

const cx = classNames.bind(styles);

function Fan() {
    const data = useStore();
    const { lastFan } = data;
    const init = parseInt(lastFan);
    const [level, setLevel] = useState();
    const [power, setPower] = useState();

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
        } else {
            setPower(images.powerOn);
            handleFanValueSubmit(String(30));

            setLevel(30);
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
                toast.success('Thành công', {
                    position: 'bottom-right',
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                });
            })
            .catch((error) => {
                console.error('Error adding data:', error);
            });
    };
    const [finalLevel, setFinalLevel] = useState(); // Initial Level value

    const handleMouseUp = () => {
        setFinalLevel(level);
        handleFanValueSubmit(level);
    };

    return (
        <div className={cx('wrapper')}>
            <Back to={'/manager'} />
            <div className={cx('img')}>
                <img src={images.fan} alt="fan" />
            </div>
            <div className={cx('control')}>
                <div className={cx('level')}>
                    <span>Level:</span>
                    <span onClick={subLevel}>
                        <strong>-</strong>
                    </span>

                    <div className={cx('slider')}>
                        <input
                            className={cx('input')}
                            type="range"
                            min="0"
                            max="100"
                            value={level}
                            onChange={(event) => setLevel(parseInt(event.target.value))}
                            onMouseUp={handleMouseUp}
                        />
                        <p>{init !== NaN ? `${level}` : '...'}</p>
                    </div>
                    <span onClick={addLevel}>
                        <strong>+</strong>
                    </span>
                </div>
                <div className={cx('power')} onClick={handlePower}>
                    <img src={power} alt="power" />
                </div>

                <ToastContainer
                    position="bottom-right"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>
        </div>
    );
}

export default Fan;
