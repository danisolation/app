import classNames from 'classnames/bind';
import styles from './TempChart.module.scss';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useStore } from '~/store';
import Back from '../Back';

const cx = classNames.bind(styles);

function TempChart() {
    const data = useStore();
    const { tempChart } = data;

    return (
        <div className={cx('wrapper')}>
            <Back />
            <div>
                {tempChart ? (
                    <div>
                        <h1>The temperature of the Yolo Chip</h1>
                        <LineChart
                            width={900}
                            height={300}
                            data={tempChart}
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
                            <Line type="monotone" dataKey="temperatureOfChip" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                    </div>
                ) : (
                    '...'
                )}
            </div>
        </div>
    );
}

export default TempChart;
