import classNames from 'classnames/bind';
import Item from './Item/Item';
import styles from './SensorData.module.scss';
import images from '~/assets/img';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHalf, faDroplet } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const DATA = [
    {
        img: images.temp,
        name: 'Temperature & Humidity Sensor',
        info: [
            {
                des: 'Temperature:',
                icon: <FontAwesomeIcon icon={faTemperatureHalf} />,
                quantity: '27oC',
                color: 'red',
            },
            {
                des: 'Humidity:',
                icon: <FontAwesomeIcon icon={faDroplet} />,
                quantity: '35%',
                color: '#5A9CFF',
            },
        ],
    },
    {
        img: images.light,
        name: 'Light Sensor',
        info: [
            {
                des: 'Power status:',
                icon: '',
                quantity: 'On',
                color: '#3DF23A',
            },
        ],
    },
    {
        img: images.pir,
        name: 'PIR Sensor',
        info: [
            {
                des: 'Power status:',
                icon: '',
                quantity: 'On',
                color: '#3DF23A',
            },
        ],
    },
];

function SensorData() {
    return (
        <div className={cx('wrapper')}>
            {DATA.map((data, index) => {
                return <Item key={index} data={data} />;
            })}
        </div>
    );
}

export default SensorData;
