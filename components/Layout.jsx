import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Navbar />
            <div className={styles.container}>
                {children}
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    );
}

export default Layout;