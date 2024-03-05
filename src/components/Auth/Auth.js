import authStyle from "./auth.module.css"


function Auth() {
    return (
        <div className={authStyle.header__auth}>
            <a className={authStyle.header__signin} href="#">
                Sing In
            </a>
            <a className={authStyle.header__register} href="#">
                Register
            </a>
        </div>
    )
}

export default Auth;