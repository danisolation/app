import Aside from '../components/Aside';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { DefaultWrapper } from '~/component/Wrapper/DefaultWrapper';
import Header from '../components/Header';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Aside />
            <DefaultWrapper>
                <Header />
                <div className={cx('content')}>{children}</div>
            </DefaultWrapper>
        </div>
    );
}

export default DefaultLayout;
