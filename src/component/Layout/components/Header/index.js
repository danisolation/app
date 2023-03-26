import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div>
                <Tippy
                    interactive
                    placement="bottom-start"
                    render={(attrs) => (
                        <div className={cx('list')} tabIndex="-1" {...attrs}>
                            <div className={cx('noti')}>
                                <div className={cx('content')}>
                                    <h3>Tình trạng hôm nay</h3>
                                    <p>Nhiệt độ: 27oC. Độ ẩm: 35%. Tình trạng chung: Good</p>
                                </div>
                                <div className={cx('foot')}>
                                    <p>1 giờ trước</p>
                                </div>
                            </div>
                        </div>
                    )}
                >
                    <FontAwesomeIcon className={cx('icon')} icon={faBell} />
                </Tippy>
            </div>
        </div>
    );
}

export default Header;
