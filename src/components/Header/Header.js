import headerStyle from "./header.module.css";
import image from "./cat.svg";

function Header() {
  return (
    <header className={headerStyle.header}>
      <a href="#" className={headerStyle.header__logo}>
        <img src={image} alt="" />
        <p>TODO</p>
      </a>
      <div className={headerStyle.header__menu}>
        <nav className={headerStyle.header__menu_list}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Plans</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={headerStyle.header__auth}>
        <a className={headerStyle.header__signin} href="#">
          Sing In
        </a>
        <a className={headerStyle.header__register} href="#">
          Register
        </a>
      </div>
    </header>
  );
}

export default Header;
