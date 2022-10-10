import React from 'react';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './SuggestedAcounts.module.scss';
import { Wrapper as PopperWrapper } from '../Layout/Popper';
import { AccountPreview } from './AccountPreview';
import Image from '../Images';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={data} />
                </PopperWrapper>
            </div>
        )
    }

    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context. 
        <div>
            <HeadlessTippy
                interactive
                delay={[800, 0]}
                offset={[-20, 0]}
                placement="bottom"
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <Image
                        className={cx('avatar')}
                        src={data.avatar}
                        alt={data.first_name + ' ' + data.last_name}
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{data.nickname}</strong>
                            {data.tick && <FontAwesomeIcon className={cx('verify')} icon={faCheckCircle} />}
                        </p>
                        <p className={cx('name')}>{data.first_name + ' ' + data.last_name}</p>
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default AccountItem;