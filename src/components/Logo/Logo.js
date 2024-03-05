import logoStyle from "./logo.module.css"
import image from "./icons/cat.svg";


function Logo() {
    return (
        <a href="#" className={logoStyle.header__logo}>
            <img src={image} alt="" />
            <p>TODO</p>
        </a>
    )
}

export default Logo;