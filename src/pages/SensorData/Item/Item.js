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
                <div className={cx('top')}>
                    <div className={cx('image')}>
                        <img src={data.img} alt="Temp" />
                    </div>
                    <div className={cx('name')}>
                        <span>{data.name}</span>
                    </div>
                </div>
                <div className={cx('bot')}>
                    {data.info.map((item, index) => (
                        <div key={index} className={cx('info')}>
                            <span>{item.des}</span>
                            <span style={{ color: item.color }}>{item.icon}</span>
                            <span style={{ color: item.color }}>{item.quantity}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Item;
