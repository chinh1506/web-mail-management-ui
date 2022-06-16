import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faCircleQuestion,
    faGear,
    faSearch,
    faSliders,
    faGrip,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import { logo } from '../../../assets';
const cx = classNames.bind(styles);

function Header() {
    console.log(logo);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-left')}>
                <div className={cx('wrap-button')}>
                    <button className={cx('button-menu')} type="">
                        <FontAwesomeIcon icon={faBars} size="xl" />
                    </button>
                </div>
                <div className={cx('wrap-logo')}>
                    <img
                        src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
                        alt=""
                        className={cx('logo')}
                    />
                </div>
            </div>
            <div className={cx('header-center')}>
                <div className={cx('seach-box')}>
                    <button className={cx('btn-search')}>
                        <FontAwesomeIcon icon={faSearch} size="xl" />
                    </button>
                    <input type="search" placeholder="Tìm kiếm trong thư" />
                    <button className={cx('btn-search')}>
                        <FontAwesomeIcon icon={faSliders} size="xl" />
                    </button>
                </div>
                <div className={cx('header-action')}></div>
            </div>
            <div className={cx('header-right')}>
                {/* menu */}
                <button className={cx('btn-help')}>
                    <FontAwesomeIcon icon={faCircleQuestion} size="sm" />
                </button>
                <button className={cx('btn-setting')}>
                    <FontAwesomeIcon icon={faGear} size="sm" />
                </button>
                <button className={cx('btn-setting')}>
                    <FontAwesomeIcon icon={faGrip} size="sm" />
                </button>
                <button className={cx('btn-setting')}>
                    <FontAwesomeIcon icon={faUser} size="sm" />
                </button>
            </div>
        </div>
    );
}

export default Header;
