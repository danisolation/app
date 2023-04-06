import classNames from 'classnames/bind';
import styles from './Fan.module.scss';
import images from '~/assets/img';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const cx = classNames.bind(styles);

function Fan() {
    return (
        <div className={cx('wrapper')}>
            <div></div>
        </div>
    );
}

export default Fan;
