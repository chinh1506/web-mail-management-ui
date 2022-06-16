import classNames from 'classnames/bind';
import Menu from '../../../components/Menu';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrap-button')}>
                <button className={cx('btn-add')}>Soạn thư</button>
            </div>
            <div className={cx('content-bar')}>
                {/* menu */}
                <Menu />
            </div>
        </div>
    );
}

export default Sidebar;
