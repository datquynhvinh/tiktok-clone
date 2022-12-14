import React from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '../../Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const [history, setHistory] = useState([{ data: items }]);
    const currentHistory = history[history.length - 1];

    const renderItems = () => {
        return currentHistory.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        }
                    }}
                />
            )
        });
    };

    return (
        <Tippy
            interactive
            delay={[0, 300]}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-more')} tabIndex='-1' {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {
                            history.length > 1
                            && <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev => prev.slice(0, prev.length - 1)))
                                }} 
                            />
                        }
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory(prev => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;