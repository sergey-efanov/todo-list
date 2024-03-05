import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import Auth from "../Auth/Auth";
import headerStyle from "./header.module.css";


function Header() {
  return (
    <header className={headerStyle.header}>
      <Logo />
      <Menu />
      <Auth />
    </header>
  );
}

export default Header;
