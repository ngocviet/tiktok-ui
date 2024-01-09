import classNames from 'classnames/bind'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import styles from './Header.module.scss'
import images from '../../../../assets/images'

const cx = classNames.bind(styles)

function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="Tiktok" />
            </div>
            <div className={cx('search')}>
                <input placeholder="Search accounts and videos." spellCheck={false} />
                <button className={cx('search-clear')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <button className={cx('search-loading')}>
                    <FontAwesomeIcon icon={faSpinner} />
                </button>
                <button className={cx('search-button')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            <div className={cx('action')}>

            </div>
        </div>
    </header>;
}

export default Header;