import classNames from 'classnames/bind';
import styles from './Background.module.scss';
import images from '~/assets/img';

const cx = classNames.bind(styles);

function Background() {
    return (
        <div className={cx('wrapper')} style={{ backgroundImage: `url(${images.background})` }}>
            <div className={cx('left', 'col')}>GOOD MORNING</div>
            <div className={cx('right', 'col')}>
                <div className={cx('top', 'row')}>5:00</div>
                <div className={cx('row')}>Thứ hai 13/3</div>
            </div>
        </div>
    );
}

export default Background;
