import classNames from 'classnames/bind';

import Header from './Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);
function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    <h1>Content</h1>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
