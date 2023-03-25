import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Back.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Back() {
    return (
        <div className={cx('wrapper')}>
            <Link to={'/historicaldata'}>
                <FontAwesomeIcon className={cx('icon')} icon={faArrowLeft} />
            </Link>
        </div>
    );
}

export default Back;
