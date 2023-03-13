import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div>
                <FontAwesomeIcon className={cx('icon')} icon={faBell} />
            </div>
        </div>
    );
}

export default Header;
