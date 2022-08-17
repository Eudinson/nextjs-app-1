import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles['navbar-container']}>
            <div className={styles.logo}>
                <Link href='/'>
                    <a>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeWkbKKN48K3A4VXoSDIctVePw4uvOXh90SJckNECQUA&s" alt="bent-tech logo" height={80} />
                    </a>
                </Link>
            </div>
            <div className={styles.navbar}>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/ninjas"><a>Ninja Listing</a></Link>
            </div>
        </nav>
    );
}

export default Navbar;