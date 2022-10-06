import PropsTypes from 'prop-types';
import React from 'react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Images from '../Images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data, onClick }) {
    return (
        <Link
            to={`/@${data.nickname}`}
            className={cx('wrapper')}
            onClick={onClick}
        >
            <Images
                className={cx('avatar')}
                src={data.avatar}
                alt={data.full_name}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('verify-account')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propsTypes = {
    data: PropsTypes.object,
};

export default AccountItem;