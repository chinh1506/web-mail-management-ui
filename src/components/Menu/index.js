import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBan,
    faCircleExclamation,
    faClock,
    faFile,
    faInbox,
    faPaperPlane,
    faStar,
    faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Menu.module.scss';
import CustomButton from '../Button';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
function Menu() {
    const [focusButton, setFocusButton] = useState(1);

    useEffect(() => {}, []);
    const handleAvtive = (i) => {
        setFocusButton(i);
    };
    return (
        <div className={cx('wrapper')}>
            <CustomButton
                active={focusButton === 1}
                onClick={() => handleAvtive(1)}
                leftIcon={<FontAwesomeIcon icon={faInbox} size="sm" />}
                text="112"
            >
                Hộp thư đến
            </CustomButton>
            <CustomButton
                active={focusButton === 2}
                onClick={() => handleAvtive(2)}
                leftIcon={<FontAwesomeIcon icon={faStar} size="sm" />}
            >
                Có gắn dấu sao
            </CustomButton>
            <CustomButton
                active={focusButton === 3}
                onClick={() => handleAvtive(3)}
                leftIcon={<FontAwesomeIcon icon={faClock} size="sm" />}
            >
                Tạm ẩn
            </CustomButton>
            <CustomButton
                active={focusButton === 4}
                onClick={() => handleAvtive(4)}
                leftIcon={<FontAwesomeIcon icon={faPaperPlane} size="sm" />}
            >
                Đã gửi
            </CustomButton>
            <CustomButton
                active={focusButton === 5}
                onClick={() => handleAvtive(5)}
                leftIcon={<FontAwesomeIcon icon={faFile} size="sm" />}
            >
                Thư nháp
            </CustomButton>
            <CustomButton
                active={focusButton === 6}
                onClick={() => handleAvtive(6)}
                leftIcon={<FontAwesomeIcon icon={faCircleExclamation} size="sm" />}
            >
                Quan trọng
            </CustomButton>
            <CustomButton
                active={focusButton === 7}
                onClick={() => handleAvtive(7)}
                leftIcon={<FontAwesomeIcon icon={faBan} size="sm" />}
            >
                Thư rác
            </CustomButton>
            <CustomButton
                active={focusButton === 8}
                onClick={() => handleAvtive(8)}
                leftIcon={<FontAwesomeIcon icon={faTrashCan} size="sm" />}
            >
                Thùng rác
            </CustomButton>
        </div>
    );
}

export default Menu;
