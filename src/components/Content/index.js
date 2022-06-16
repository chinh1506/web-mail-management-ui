import { faInbox, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import CustomButton from '../Button';
import styles from './Content.module.scss';

const cx = classNames.bind(styles);
function Content({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('nav')}>
                <CustomButton leftIcon={<FontAwesomeIcon icon={faInbox} size="sm" />}>Chính</CustomButton>
                <CustomButton leftIcon={<FontAwesomeIcon icon={faUserGroup} size="sm" />}>Mạng xã hội</CustomButton>
            </div>
            <div>{children}</div>
        </div>
    );
}

export default Content;
