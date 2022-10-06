import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountPreview.module.scss';
import Button from '../../Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/d0b071e67fc21688b58c1865c1de887e~c5_720x720.jpeg?x-expires=1665194400&x-signature=3KCE1ddaCcBufHppgruvM11HuW8%3D'
                    alt='Le Thac Dat'
                />
                <Button primary className={cx('btn-follow')}>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>datquynhvinh</strong>
                    <FontAwesomeIcon className={cx('verify')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Le Thac Dat</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('label')}>Follow</span>
                    <strong className={cx('value')}>518.6M</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;