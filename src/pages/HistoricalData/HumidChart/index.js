import classNames from 'classnames/bind';
import styles from './HumidChart.module.scss';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useStore } from '~/store';
import Back from '../../../component/Back';

const cx = classNames.bind(styles);

function HumidChart() {
    const data = useStore();
    const { humidChart } = data;
    console.log(humidChart);

    return (
        <div className={cx('wrapper')}>
            <Back to={'/historicaldata'} />
            <div>
                {humidChart ? (
                    <div>
                        <h1>The humidity of the Yolo Chip</h1>
                        <LineChart
                            width={900}
                            height={300}
                            data={humidChart}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 0,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="humidityOfChip" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                    </div>
                ) : (
                    '...'
                )}
            </div>
        </div>
    );
}

export default HumidChart;
