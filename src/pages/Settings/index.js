import classNames from 'classnames/bind';
import Item from './Item/Item';
import styles from './Settings.module.scss';

const cx = classNames.bind(styles);

const DATA = [
    {
        des: 'Color and theme',
        list: ['light', 'dark'],
    },
    {
        des: 'Sound',
        list: ['Alert', 'Alert', 'Alert', 'Alert', 'Alert'],
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
