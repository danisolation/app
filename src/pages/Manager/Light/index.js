import classNames from 'classnames/bind';
import styles from './Light.module.scss';
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

function Light() {
    const data = useStore();
    const { lastLight } = data;
    const init = parseInt(lastLight);
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
            handleLightValueSubmit(String(0));
        } else {
            setPower(images.powerOn);
            handleLightValueSubmit(String(1));

            setLevel(1);
        }
    };

    const handleLightValueSubmit = async (LightValue) => {
        const FEED_NAME = 'light';
        const newData = {
            value: LightValue,
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
                <img src={images.lamp} alt="Light" />
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

export default Light;
