import classNames from 'classnames/bind';
import styles from './Item.module.scss';

const cx = classNames.bind(styles);

function Item({ data, primary = false, className }) {
    const classes = cx('wrapper', {
        [className]: className,
        primary,
    });
    return (
        <div className={classes}>
            <div className={cx('container')}>
                <div className={cx('des')}>
                    <span>{data.des}</span>
                </div>
                <div className={cx('list')}>
                    <select className={cx('categories')}>
                        {data.list.map((item, index) => {
                            if (index === 0) {
                                return (
                                    <option value key={index} selected>
                                        {item}
                                    </option>
                                );
                            } else {
                                return (
                                    <option value key={index}>
                                        {item}
                                    </option>
                                );
                            }
                        })}
                    </select>
                </div>
            </div>
        </div>
    );
}
export default Item;
