import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import style from './MailContent.module.scss';

const cx = classNames.bind(style);

function MailContent({ mail = {}, currentFolder }) {
    const [email, setEmail] = useState(mail);
    useEffect(() => {
        const callMails = async () => {
            await fetch(`http://localhost:8080/api/mails/${mail.id}?folder=${currentFolder.name}`)
                .then((response) => response.json())
                .then((json) => {
                    setEmail(json);
                    console.log(json);
                });
        };
        callMails();
    }, [email]);

    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('subject')}>{email && email.subject}</h3>
            <div className={cx('header')}>
                <div className={cx('info')}>
                    <h5>Từ: {email && email.from}</h5>
                    <span>Tới: {email && email.to}</span>
                </div>
                <div className={cx('action')}>
                    <span>{email && email.sendDate}</span>
                </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: email && email.content }} className={cx('content')}></div>
        </div>
    );
}

export default MailContent;
