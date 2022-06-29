import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);
function Login() {
    return <div className={cx('wrapper')}>
        <div className={cx('container')}>
            <div className={cx('wrap-logo')}>
                        <img
                            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
                            alt=""
                            className={cx('logo')}
                        />
            </div>
            <div className={cx('header')}>ĐĂNG NHẬP</div>
            <div className={cx('content')}>
                <div className={cx('login')}>
                    <h3>Tài khoản</h3>
                    <input type="text" size="30"/>
                </div>
                <div className={cx('password')}>
                    <h3>Mật khẩu</h3>
                    <input type="text" size="30"/>
                </div>
            </div>
            <div className={cx('footer')}>
                <button>Đăng nhập</button>
            </div>
        </div>
    </div>;
}

export default Login;
