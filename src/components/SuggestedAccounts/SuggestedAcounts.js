import React from 'react';
import classNames from 'classnames/bind';
import styles from './SuggestedAcounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAcounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={cx('more-account')}>See all</p>
        </div>
    );
}

export default SuggestedAcounts;