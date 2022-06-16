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
import { useState } from 'react';

const cx = classNames.bind(styles);
function Menu() {
    const [active, setActive] = useState(false);

    const handleActive = () => {};
    return (
        <div className={cx('wrapper')}>
            <CustomButton leftIcon={<FontAwesomeIcon icon={faInbox} size="sm" />} text="112" active>
                Hộp thư đến
            </CustomButton>
            <CustomButton leftIcon={<FontAwesomeIcon icon={faStar} size="sm" />}>Có gắn dấu sao</CustomButton>
            <CustomButton leftIcon={<FontAwesomeIcon icon={faClock} size="sm" />}>Tạm ẩn</CustomButton>
            <CustomButton leftIcon={<FontAwesomeIcon icon={faPaperPlane} size="sm" />}>Đã gửi</CustomButton>
            <CustomButton leftIcon={<FontAwesomeIcon icon={faFile} size="sm" />}>Thư nháp</CustomButton>
            <CustomButton leftIcon={<FontAwesomeIcon icon={faCircleExclamation} size="sm" />}>Quan trọng</CustomButton>
            <CustomButton leftIcon={<FontAwesomeIcon icon={faBan} size="sm" />}>Thư rác</CustomButton>
            <CustomButton leftIcon={<FontAwesomeIcon icon={faTrashCan} size="sm" />}>Thùng rác</CustomButton>
        </div>
    );
}

export default Menu;
