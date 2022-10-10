import React from 'react';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './FollowingAcounts.module.scss';
import Image from '../Images';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
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
    );
}

export default AccountItem;