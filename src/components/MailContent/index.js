import classNames from 'classnames/bind';

import style from './MailContent.module.scss';

const cx = classNames(style);
function MailContent({ mail }) {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('subject')}>{mail.subject}</h4>
            <div className={cx('content')}>{mail.content}</div>
        </div>
    );
}

export default MailContent;
{
    children;
}
