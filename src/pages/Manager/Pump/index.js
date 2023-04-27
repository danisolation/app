import classNames from 'classnames/bind';
import styles from './Pump.module.scss';
import { useStore } from '~/store';
import images from '~/assets/img';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Back from '~/component/Back';
import 'react-notifications-component/dist/theme.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AIO_KEY = process.env.REACT_APP_KEY;
const AIO_USERNAME = 'Danny0943777525';

const cx = classNames.bind(styles);

function Pump() {
    const data = useStore();
    const { lastPump } = data;
    const init = parseInt(lastPump);
    const [level, setLevel] = useState();
    const [power, setPower] = useState();

    useEffect(() => {
        setLevel(init);
    }, [init]);

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
            handlePumpValueSubmit(String(0));
        } else {
            setPower(images.powerOn);
            handlePumpValueSubmit(String(1));

            setLevel(1);
        }
    };

    const handlePumpValueSubmit = async (PumpValue) => {
        const FEED_NAME = 'pump';
        const newData = {
            value: PumpValue,
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

    return (
        <div className={cx('wrapper')}>
            <Back to={'/manager'} />
            <div className={cx('img')}>
                <img src={images.water} alt="Pump" />
            </div>
            <div className={cx('control')}>
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

export default Pump;
