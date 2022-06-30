import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './FormMail.module.scss';
import { faMinus, faUpRightAndDownLeftFromCenter, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useContext, useRef, useState } from 'react';
import { FormContext } from '../../layouts/DefaultLayout';

const cx = classNames.bind(styles);
function FormMail() {
    const handleClose = useContext(FormContext);
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState();

    const fileRef = useRef();

    const handleChangeTo = (value) => {
        setTo(value);
    };
    const handleChangeSubject = (value) => {
        setSubject(value);
    };
    const handleChangeContent = (value) => {
        setContent(value);
    };
    const handleChangeFile = () => {
        setFile(fileRef.current.files[0]);
    };

    const handleSubmit = () => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (regex.test(to)) {
            const email = {
                to,
                subject,
                content,
            };
            console.log(email);
            const callApi = async () => {
                await fetch('http://localhost:8080/api/mails', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(email),
                }).then((res) => {
                    console.log('Request complete! response:', res);
                });
            };
            callApi();
            handleClose();
        } else {
            alert('Email address is not valid !!!');
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h6>New Message</h6>
                <div className={cx('action')}>
                    <button>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
                    </button>
                    <button onClick={() => handleClose()}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
            </div>
            <div className={cx('content')}>
                <div className={cx('input1')}>
                    <input value={to} onChange={(e) => handleChangeTo(e.target.value)} placeholder="To" />
                </div>
                <div className={cx('input2')}>
                    <input
                        value={subject}
                        onChange={(e) => handleChangeSubject(e.target.value)}
                        type="text"
                        placeholder="Subject"
                    />
                </div>
                <textarea
                    value={content}
                    onChange={(e) => handleChangeContent(e.target.value)}
                    className={cx('txtaContent')}
                    rows="10"
                    cols="10"
                ></textarea>
            </div>
            <div className={cx('footer')}>
                <button onClick={() => handleSubmit()}>Send</button>
                <div className={cx('file')}>
                    <span>@</span>
                    <input file={file} ref={fileRef} onChange={() => handleChangeFile()} multiple type="file" name="" />
                </div>
                <p className={cx('file-name')}>{file && file.name}</p>
            </div>
        </div>
    );
}

export default FormMail;
