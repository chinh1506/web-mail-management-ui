import classNames from 'classnames/bind';

import style from './MailContent.module.scss';

const cx = classNames.bind(style);
function MailContent() {
    const mail = {
        subject: '21/06 Cơ hội việc làm IT mới và hấp dẫn nhất tại TopDev. Khám phá ngay bạn nhé!',
        content: 'noi dung',
        from: 'chinh',
        date: '15/06/2001',
        to: 'tôi',
    };
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('subject')}>{mail.subject}</h3>
            <div className={cx('header')}>
                <div className={cx('info')}>
                    <h5>Từ: {mail.from}</h5>
                    <span>Tới: {mail.to}</span>
                </div>
                <div className={cx('action')}>
                    <span>{mail.date}</span>
                </div>
            </div>
            <div className={cx('content')}>{mail.content}</div>
        </div>
    );
}

export default MailContent;
