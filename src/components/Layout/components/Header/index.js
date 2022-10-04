import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import HeadlessTippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '../../Popper';
import styles from './Header.module.scss';
import images from '../../../../assets/images';
import {
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faPlus
} from '@fortawesome/free-solid-svg-icons';
import AccountItem from '../../../AccountItem';
import Button from '../../../Button';
import Menu from '../../Popper/Menu';

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
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Profile',
        to: 'profile'
    },
    ...MENU_ITEMS
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 3000);
    }, [])

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='Logo' />
            </div>
            <HeadlessTippy
                visible={searchResult.length > 0}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                        <PopperWrapper>
                            <h3 className={cx('search-title')}>
                                Accounts
                            </h3>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                        {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                </div>
            </HeadlessTippy>

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
                                <img className='message-icon' src={images.messageIcon} alt='Message' />
                            </button>
                        </Tippy>
                        <Tippy
                            delay={[0, 200]}
                            content='Notification'
                            placement='bottom'
                        >
                            <button className={cx('action-btn', 'event-icon')}>
                                <img className='message-icon' src={images.noticeIcon} alt='Notification' />
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <>
                        <Button upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>Upload</Button>
                        <Button primary>Log in</Button>
                    </>
                )}

                <Menu items={MENU_ITEMS}>
                    {currentUser ? (
                        <>
                            <img src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/d0b071e67fc21688b58c1865c1de887e~c5_720x720.jpeg?x-expires=1665043200&x-signature=eu0mis0wSPfLyudfTNfjPwKlFzU%3D" className={cx('user-avatar')} alt="Le Thac Dat" />
                        </>
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