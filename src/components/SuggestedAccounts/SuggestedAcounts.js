import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './SuggestedAcounts.module.scss';
import AccountItem from './AccountItem';
import request from '../../utils/request';

const cx = classNames.bind(styles);

function SuggestedAcounts({ label }) {
    const [accountSuggested, setAccountSuggested] = useState([]);
    const [perPage, setPerPage] = useState(5);
    const [viewAllAccount, setViewAllAccount] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await request.get(`users/suggested`, {
                    params: {
                        page: 1,
                        per_page: perPage
                    },
                });

                setAccountSuggested(res.data.data);
            } catch (e) {
                console.log('error');
            }
        };

        fetchApi();
    }, [perPage]);

    const handleAccountSuggested = () => {
        if (!viewAllAccount) {
            setPerPage(20);
            setViewAllAccount(true);
        } else {
            setPerPage(5);
            setViewAllAccount(false);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {accountSuggested.length > 0 && accountSuggested.map((result) => (
                <AccountItem key={result.id} data={result} />
            ))}

            <p className={cx('more-account')} onClick={handleAccountSuggested}>{viewAllAccount ? 'See less' : 'See all'} </p>
        </div>
    );
}

export default SuggestedAcounts;