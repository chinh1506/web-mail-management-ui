import classNames from 'classnames/bind';
import { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './MailItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function MailItem({ seen, email }) {
    const [focus, setFocus] = useState(false);

    const classes = cx('wrapper', {
        seen,
        focus: focus,
    });
    return (
        <div className={classes}>
            <div className={cx('left')}>
                <Tippy placement="bottom-end" content="Chọn">
                    <input type="checkbox" checked={focus} onChange={() => setFocus(!focus)} />
                </Tippy>
                <p>{email.from}</p>
            </div>
            <div className={cx('content')}>{email.subject}</div>
            <div className={cx('right')}>
                <button className={cx('icon')}>
                    <FontAwesomeIcon icon={faTrash} size="lg" />
                </button>
                <p className={cx('text-time')}>{email.receiveDate}</p>
            </div>
        </div>
    );
}

export default MailItem;
