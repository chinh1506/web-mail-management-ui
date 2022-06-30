import classNames from 'classnames/bind';
import { useContext, useState } from 'react';
import { LoginContext } from '../../App';
import DefaultLayout from '../DefaultLayout';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);
function Login() {
    const handleChangeAccount = useContext(LoginContext);
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        const callApi = async () => {
            await fetch('http://localhost:8080/api/mails', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user, password }),
            }).then((res) => {
                handleChangeAccount(<DefaultLayout />);
                console.log('Request complete! response:', res);
            });
        };
        callApi();
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('wrap-logo')}>
                    <img
                        src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
                        alt=""
                        className={cx('logo')}
                    />
                </div>
                <div className={cx('header')}>SIGN IN</div>
                <div className={cx('content')}>
                    <div className={cx('login')}>
                        <input value={user} onChange={(e) => setUser(e.target.value)} placeholder="Enter username" />
                    </div>
                    <div className={cx('password')}>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>
                </div>
                <div className={cx('footer')}>
                    <button onClick={() => handleLogin()} className={cx('bt')}>
                        Log in
                    </button>
                    <button className={cx('nh')}>Need help?</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
