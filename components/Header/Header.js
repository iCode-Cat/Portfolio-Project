import style from './Header.module.scss';
const Header = () => {
    return <header className={style.header}>
        <p>ALEX PAGE</p>
        <ul className={style.ul}>
            <li>Home</li>
            <li>Resume</li>
            <li>Works</li>
            <li>Contacts</li>
        </ul>
        {/* Mobile Menu */}
        <div className={style.hamburger}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </header>
}
 
export default Header;