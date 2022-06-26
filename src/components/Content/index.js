import { faChevronLeft, faInbox, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import CustomButton from '../Button';
import MailContent from '../MailContent';
import MailItem from '../../components/MailItem';
import styles from './Content.module.scss';
const cx = classNames.bind(styles);
function Content({ currentFolder }) {
    const [mail, setMail] = useState({});
    const [active, setActive] = useState(1);
    const [back, setBack] = useState(false);

    const [mails, setMails] = useState([]);
    useEffect(() => {
        const callMails = async () => {
            await fetch(`http://localhost:8080/api/mails?folder=${currentFolder.name}`)
                .then((response) => response.json())
                .then((json) => {
                    setMails(json);
                    console.log(json);
                });
        };
        callMails();
    }, [currentFolder]);

    const handleBack = () => {
        setBack(!back);
    };
    const handleShowContent = (mail) => {
        setBack(!back);
        setMail(mail);
    };
    const handleActive = (index) => {
        setActive(index);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('nav')}>
                <CustomButton
                    active={active === 1}
                    onClick={() => handleActive(1)}
                    leftIcon={<FontAwesomeIcon icon={faInbox} size="sm" />}
                >
                    Chính
                </CustomButton>
                <CustomButton
                    active={active === 2}
                    onClick={() => handleActive(2)}
                    leftIcon={<FontAwesomeIcon icon={faUserGroup} size="sm" />}
                >
                    Mạng xã hội
                </CustomButton>
            </div>
            {back && (
                <button onClick={() => handleBack()} className={cx('button-back')}>
                    <FontAwesomeIcon icon={faChevronLeft} size="lg" />
                </button>
            )}
            <div className={cx('container')}>
                {!back &&
                    mails.map((email, index) => (
                        <MailItem
                            onClick={() => handleShowContent(email)}
                            seen={email.isSeen}
                            key={index}
                            email={email}
                        />
                    ))}
                {back && <MailContent mail={mail} />}
            </div>
        </div>
    );
}

export default Content;
