import classNames from 'classnames/bind';
import styles from './Aside.module.scss';
import { AiOutlineSetting } from 'react-icons/ai';
import { MdDashboard } from 'react-icons/md';
import { FaThermometerThreeQuarters } from 'react-icons/fa';
import { SiSimpleanalytics } from 'react-icons/si';
import images from '~/assets/img';
import Button from '~/component/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Aside() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img className={cx('img')} src={images.logo} alt="Forsaken" />
            </div>
            <div className={cx('container')}>
                <Button primary to={'/'} leftIcon={<MdDashboard className={cx('icon')} />}>
                    DashBoard
                </Button>

                <Button primary to={'/historicaldata'} leftIcon={<SiSimpleanalytics className={cx('icon')} />}>
                    Historical Data and Analytics
                </Button>
                <Button
                    primary
                    to={'/manager'}
                    leftIcon={<FontAwesomeIcon icon={faPeopleRoof} className={cx('icon')} />}
                >
                    Device Manager
                </Button>
                <Button primary to={'/settings'} leftIcon={<AiOutlineSetting className={cx('icon')} />}>
                    Setting and Customization
                </Button>
            </div>
        </div>
    );
}

export default Aside;
