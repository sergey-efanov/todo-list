import menuStyle from "./menu.module.css"


function Menu() {
    return (
        <div className={menuStyle.header__menu}>
            <nav className={menuStyle.header__menu_list}>
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
    )
}

export default Menu;