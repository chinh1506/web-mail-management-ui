import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleExclamation,
    faClock,
    faFile,
    faInbox,
    faPaperPlane,
    faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Menu.module.scss';
import CustomButton from '../Button';
import { useContext, useEffect, useState } from 'react';
import { MenuContext } from '../../layouts/DefaultLayout';
const FOLDERS = [
    { name: 'INBOX', icon: faInbox },
    { name: 'DRAFTS', icon: faFile },
    { name: 'OUTBOX', icon: faClock },
    { name: 'SENT ITEMS', icon: faPaperPlane },
    { name: 'DELETED ITEMS', icon: faTrashCan },
    { name: 'JUNK EMAIL', icon: faCircleExclamation },
];
const cx = classNames.bind(styles);
function Menu() {
    const setCurrentFolderCallBack = useContext(MenuContext);
    const [currentFolder, setCurrentFolder] = useState(FOLDERS[0]);
    useEffect(() => {}, []);
    const handleChangeActive = (folder) => {
        setCurrentFolder(folder);
        setCurrentFolderCallBack(folder);
    };
    return (
        <div className={cx('wrapper')}>
            {FOLDERS.map((folder) => (
                <CustomButton
                    key={folder.name}
                    active={currentFolder.name === folder.name}
                    onClick={() => handleChangeActive(folder)}
                    leftIcon={<FontAwesomeIcon icon={folder.icon} size="sm" />}
                    text=""
                >
                    {folder.name}
                </CustomButton>
            ))}
        </div>
    );
}

export default Menu;
