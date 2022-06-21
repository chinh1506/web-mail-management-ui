import classNames from 'classnames/bind';

import Header from './Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';
import Content from '../../components/Content';
import MailItem from '../../components/MailItem';
import MailContent from '../../components/MailContent';

const cx = classNames.bind(styles);
function DefaultLayout() {
    const emails = [
        {
            isSeen: true,
            from: 'Hoàng Văn chinh',
            subject: 'Fresher java',
            receiveDate: '16 thg 6 15:00',
        },
        {
            isSeen: false,
            from: 'Hoàng Văn chinh',
            subject: 'Fresher java',
            receiveDate: '16 thg 6 15:00',
        },
        {
            isSeen: false,
            from: 'Hoàng Văn chinh',
            subject: 'Fresher java',
            receiveDate: '16 thg 6 15:00',
        },
        {
            isSeen: true,
            from: 'Hoàng Văn chinh',
            subject: 'Fresher java',
            receiveDate: '16 thg 6 15:00',
        },
        {
            isSeen: false,
            from: 'Hoàng Văn chinh',
            subject: 'Fresher java',
            receiveDate: '16 thg 6 15:00',
        },
        {
            isSeen: true,
            from: 'Hoàng Văn chinh',
            subject: 'Fresher java',
            receiveDate: '16 thg 6 15:00',
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {/* <Content>
                        {emails.map((email, index) => (
                            <MailItem seen={email.isSeen} key={index} email={email} />
                        ))}
                    </Content> */}
                    <MailContent />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
