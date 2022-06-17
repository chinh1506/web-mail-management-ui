import { faInbox, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './MailItem.module.scss';
const cx = classNames.bind(styles);

function MailItem({ seen, focus }) {
    const classes = cx('wrapper', {
        seen,
        focus,
    });
    return (
        <div className={classes}>
            <div className={cx('left')}>
                <Tippy placement="bottom-end" content="Chọn">
                    <input type="checkbox" name="" value="" />
                </Tippy>
                <p>Name</p>
            </div>
            <div className={cx('content')}>Noi dung</div>
            <div className={cx('right')}>16 thg 6 15:00</div>
        </div>
    );
}

export default MailItem;
