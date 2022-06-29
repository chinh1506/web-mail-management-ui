import classNames from 'classnames/bind';
import { memo, useContext } from 'react';
import { FormContext } from '..';
import Menu from '../../../components/Menu';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);
function Sidebar() {
    const handleShowForm = useContext(FormContext);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrap-button')}>
                <button onClick={() => handleShowForm()} className={cx('btn-add')}>
                    Soạn thư
                </button>
            </div>
            <div className={cx('content-bar')}>
                <Menu />
            </div>
        </div>
    );
}

export default memo(Sidebar);
