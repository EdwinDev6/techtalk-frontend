import styles from './style.module.css';


const Main = () => {
    const handleLogout = ()=> {
        localStorage.removeItem("token");
        window.location.reload();
    }

    console.log(localStorage.getItem("token"))

return (
    <div className={styles.main_container}>
    <nav className={styles.navbar}>
        <h1>Techtalk</h1>
        <button className={styles.white_btn} onClick = {handleLogout}>
            Logout
        </button>
    </nav>
    </div>
 );
};

export default Main;