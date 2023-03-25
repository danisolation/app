import classNames from 'classnames/bind';
import Back from '../Back';
import styles from './Historical.module.scss';
import Item from './Item';

const cx = classNames.bind(styles);

function Historical() {
    return (
        <div className={cx('wrapper')}>
            <Back />
            <div className={cx('list')}>
                <select className={cx('month')}>
                    <option>March 2023</option>
                    <option>February 2023</option>
                    <option>January 2023</option>
                </select>
            </div>
            <div className={cx('item-list')}>
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    );
}

export default Historical;
