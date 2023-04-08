import classNames from 'classnames/bind';
import styles from './Background.module.scss';
import images from '~/assets/img';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function Background() {
    const [hours, setHours] = useState();
    const [mins, setMins] = useState();
    const [year, setYear] = useState();
    const [month, setMonth] = useState();
    const [date, setDate] = useState();
    const [day, setDay] = useState();
    const [greet, setGreet] = useState();
    useEffect(() => {
        const intervalId = setInterval(() => {
            let day = new Date();
            setDate(day.getDate());
            setMonth(day.getMonth() + 1);
            setYear(day.getFullYear());
            setMins(day.getMinutes());
            setHours(day.getHours());
            switch (day.getDay()) {
                case 0:
                    setDay('Sunday');
                    break;
                case 1:
                    setDay('Monday');
                    break;
                case 2:
                    setDay('Tuesday');
                    break;
                case 3:
                    setDay('Wednesday');
                    break;
                case 4:
                    setDay('Thursday');
                    break;
                case 5:
                    setDay('Friday');
                    break;
                default:
                    setDay('Saturday');
            }
            if (day.getHours() >= 4 && day.getHours() < 11) {
                setGreet('GOOD MORNING');
            } else if (day.getHours() >= 13 && day.getHours() < 18) {
                setGreet('GOOD AFTERNOON');
            } else if (day.getHours() >= 18 && day.getHours() < 24) {
                setGreet('GOOD EVENING');
            } else {
                setGreet('GOOD DAY');
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    return (
        <div className={cx('wrapper')} style={{ backgroundImage: `url(${images.background})` }}>
            <div className={cx('left', 'col')}>{greet ? `${greet}` : '...'}</div>
            <div className={cx('right', 'col')}>
                <div className={cx('top', 'row')}>
                    {hours || mins ? `${hours}:${mins < 10 ? `0${mins}` : `${mins}`}` : '...'}
                </div>
                <div className={cx('bot', 'row')}>{day ? `${day} ${date}/${month}/${year}` : '...'}</div>
            </div>
        </div>
    );
}

export default Background;
