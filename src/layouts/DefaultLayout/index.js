import classNames from 'classnames/bind';
import { createContext, useState } from 'react';
import { faInbox } from '@fortawesome/free-solid-svg-icons';

import Header from './Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';
import Content from '../../components/Content';
import FormMail from '../../components/FormMail';

export const MenuContext = createContext();
const cx = classNames.bind(styles);
function DefaultLayout() {
    const [currentFolder, setCurrentFolder] = useState({ name: 'INBOX', icon: faInbox });

    const handleSetCurrentFolder = (folder) => {
        setCurrentFolder(folder);
    };
    console.log(currentFolder);
    return (
        <MenuContext.Provider value={handleSetCurrentFolder}>
            <div className={cx('wrapper')}>
                <Header />
                <div className={cx('container')}>
                    <Sidebar />
                    <div className={cx('content')}>
                        <Content currentFolder={currentFolder} />
                    </div>
                </div>
                <FormMail />
            </div>
        </MenuContext.Provider>
    );
}

export default DefaultLayout;
