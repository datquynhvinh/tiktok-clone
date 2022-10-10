import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '../../../../config';
import { HomeIcon, UserGroupIcon, LiveIcon } from '../../../Icons';
import SuggestedAccounts from './../../../SuggestedAccounts';
import FollowingAccounts from './../../../FollowingAccounts'; 

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} />
            </Menu>

            <SuggestedAccounts label="Suggested accounts" />
            <FollowingAccounts label="Following accounts" />
        </aside>
    );
}

export default Sidebar