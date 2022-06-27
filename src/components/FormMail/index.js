import classNames from 'classnames/bind';
import styles from './FormMail.module.scss';

const cx = classNames.bind(styles);
function FormMail() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default FormMail;
