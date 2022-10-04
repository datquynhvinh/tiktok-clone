import React from 'react';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/85f4d6b3a7af0de7d04e227b78e58c4b~c5_100x100.jpeg?x-expires=1664956800&x-signature=AAOQn1HGcTZuUMbRztQEjL44qKI%3D"
                alt="Dat"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>datquynhvinh</span>
                    <FontAwesomeIcon className={cx('verify-account')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Le Thac Dat</span>
            </div>
        </div>
    );
}

export default AccountItem;