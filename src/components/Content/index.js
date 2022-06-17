import { faInbox, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import CustomButton from '../Button';
import styles from './Content.module.scss';

const cx = classNames.bind(styles);
function Content({ children }) {
    const [active, setActive] = useState(1);
    const handleActive = (index) => {
        setActive(index);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('nav')}>
                <CustomButton
                    active={active === 1}
                    onClick={() => handleActive(1)}
                    leftIcon={<FontAwesomeIcon icon={faInbox} size="sm" />}
                >
                    Chính
                </CustomButton>
                <CustomButton
                    active={active === 2}
                    onClick={() => handleActive(2)}
                    leftIcon={<FontAwesomeIcon icon={faUserGroup} size="sm" />}
                >
                    Mạng xã hội
                </CustomButton>
            </div>
            <div>{children}</div>
        </div>
    );
}

export default Content;
