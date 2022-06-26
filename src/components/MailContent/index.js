import classNames from 'classnames/bind';
import style from './MailContent.module.scss';

const cx = classNames.bind(style);

function MailContent({ mail = {} }) {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('subject')}>{mail && mail.subject}</h3>
            <div className={cx('header')}>
                <div className={cx('info')}>
                    <h5>Từ: {mail && mail.from}</h5>
                    <span>Tới: {mail && mail.to}</span>
                </div>
                <div className={cx('action')}>
                    <span>{mail && mail.sendDate}</span>
                </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: mail && mail.content }} className={cx('content')}></div>
        </div>
    );
}

export default MailContent;
