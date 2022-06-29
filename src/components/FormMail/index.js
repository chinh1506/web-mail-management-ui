import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './FormMail.module.scss';
import { faMinus, faUpRightAndDownLeftFromCenter, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { FormContext } from '../../layouts/DefaultLayout';

const cx = classNames.bind(styles);
function FormMail() {
    const handleClose = useContext(FormContext);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h6>Thư mới</h6>
                <div className={cx('action')}>
                    <button>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
                    </button>
                    <button onClick={() => handleClose()}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
            </div>
            <div className={cx('content')}>
                <div className={cx('input1')}>
                    <input type="text" placeholder="Người nhận" />
                </div>
                <div className={cx('input2')}>
                    <input type="text" placeholder="Chủ đề" />
                </div>
                <textarea className={cx('txtaContent')} rows="10" cols="10"></textarea>
            </div>
            <div className={cx('footer')}>
                <button type="">Gửi</button>
                <div className={cx('file')}>
                    <span>@</span>
                    <input type="file" name="" value="" />
                </div>
                <p className={cx('file-name')}></p>
            </div>
        </div>
    );
}

export default FormMail;
