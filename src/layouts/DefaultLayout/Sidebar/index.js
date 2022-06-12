import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';

import CustomButton from '../../../components/Button';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrap-button')}>
                <button className={cx('btn-add')}>Soạn thư</button>
            </div>
            <div>
                <CustomButton leftIcon={<FontAwesomeIcon icon={faInbox} size="sm" />} text="112" active>
                    Thu den
                </CustomButton>
                <CustomButton leftIcon={<FontAwesomeIcon icon={faInbox} size="sm" />}>Thu den</CustomButton>
                <CustomButton leftIcon={<FontAwesomeIcon icon={faInbox} size="sm" />}>Thu den</CustomButton>
                <CustomButton leftIcon={<FontAwesomeIcon icon={faInbox} size="sm" />}>Thu den</CustomButton>
            </div>
        </div>
    );
}

export default Sidebar;
