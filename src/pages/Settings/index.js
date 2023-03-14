import classNames from 'classnames/bind';
import Item from './Item/Item';
import styles from './Settings.module.scss';

const cx = classNames.bind(styles);

const DATA = [
    {
        des: 'Cu nhu loai meo con',
        list: ['abc', 'dfg'],
    },
    {
        des: 'Tam nang trong hien nha',
        list: ['abc', 'dfg'],
    },
];

function Settings() {
    return (
        <div className={cx('wrapper')}>
            {DATA.map((data, index) => {
                return <Item key={index} data={data} />;
            })}
        </div>
    );
}

export default Settings;
