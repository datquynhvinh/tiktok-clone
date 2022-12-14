import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '../../../../assets/images';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faPlus,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../../Button';
import Menu from '../../Popper/Menu';
import Image from '../../../Images';
import Search from '../Search';
import { InboxIcon, NoticeIcon } from '../../../Icons'

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: 'feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard Shortcuts'
    },
];

const MENU_USER_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: 'profile'
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: 'coins'
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: 'setting'
    },
    ...MENU_ITEMS
];

function Header() {
    const currentUser = true;

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='Logo' />
            </div>
            <Search />
            <div className={cx('action')}>
                {currentUser ? (
                    <>
                        <Button upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>Upload</Button>
                        <Tippy
                            delay={[0, 200]}
                            content='Messages'
                            placement='bottom'
                        >
                            <button className={cx('action-btn', 'event-icon')}>
                                <InboxIcon className={cx('message-icon')} />
                            </button>
                        </Tippy>
                        <Tippy
                            delay={[0, 200]}
                            content='Notification'
                            placement='bottom'
                        >
                            <button className={cx('action-btn', 'event-icon')}>
                                <NoticeIcon />
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <>
                        <Button upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>Upload</Button>
                        <Button primary>Log in</Button>
                    </>
                )}

                <Menu items={currentUser ? MENU_USER_ITEMS : MENU_ITEMS}>
                    {currentUser ? (
                        <Image src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/d0b071e67fc21688b58c1865c1de887e~c5_720x720.jpeg?x-expires=1665043200&x-signature=eu0mis0wSPfLyudfTNfjPwKlFzU%3D" className={cx('user-avatar')} alt="Le Thac Dat" />
                    ) : (
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    )}
                </Menu>
            </div>
        </div>
    </header>
}

export default Header