import React from 'react';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';

import styles from './SuggestedAcounts.module.scss';
import { Wrapper as PopperWrapper } from '../Layout/Popper';
import { AccountPreview } from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        )
    }

    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context. 
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                offset={[-20, 0]}
                placement="bottom"
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/d0b071e67fc21688b58c1865c1de887e~c5_720x720.jpeg?x-expires=1665194400&x-signature=3KCE1ddaCcBufHppgruvM11HuW8%3D'
                        alt='Le Thac Dat'
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>datquynhvinh</strong>
                            <FontAwesomeIcon className={cx('verify')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Le Thac Dat</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;