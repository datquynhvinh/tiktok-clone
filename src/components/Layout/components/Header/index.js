import classNames from 'classnames/bind';
import styles from './Header.module.scss';
// import images from '../';


const cx = classNames.bind(styles);

function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                
            </div>
        </div>
    </header>
}

export default Header