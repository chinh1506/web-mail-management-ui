import classNames from 'classnames/bind';

import Header from './Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';
import Content from '../../components/Content';

const cx = classNames.bind(styles);
function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    <Content />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
