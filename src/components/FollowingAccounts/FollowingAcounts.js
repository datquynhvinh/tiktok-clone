import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './FollowingAcounts.module.scss';
import AccountItem from './AccountItem';
import request from '../../utils/request';

const cx = classNames.bind(styles);

function FollowingAcounts({ label }) {
    const [allAccountSuggested, setAllAccountSuggested] = useState([]);
    const [moreAccountSuggested, setMoreAccountSuggested] = useState([]);
    const [viewAllAccount, setViewAllAccount] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await request.get(`users/suggested`, {
                    params: {
                        page: 2,
                        per_page: 20,
                    },
                });

                setAllAccountSuggested(res.data.data);
                setMoreAccountSuggested(res.data.data.slice(0, 5));
            } catch (e) {
                console.log('error');
            }
        };

        fetchApi();
    }, []);

    const handleAccountSuggested = () => {
        if (!viewAllAccount) {
            setMoreAccountSuggested(allAccountSuggested);
            setViewAllAccount(true);
        } else {
            setMoreAccountSuggested(allAccountSuggested.slice(0, 5));
            setViewAllAccount(false);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {moreAccountSuggested.length > 0 && moreAccountSuggested.map((result) => (
                <AccountItem key={result.id} data={result} />
            ))}

            <p className={cx('more-account')} onClick={handleAccountSuggested}>{viewAllAccount ? 'See less' : 'See all'} </p>
        </div>
    );
}

export default FollowingAcounts;