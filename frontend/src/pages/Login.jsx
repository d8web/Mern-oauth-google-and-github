import Google from "../icons/google.png"
import Facebook from "../icons/facebook.png"
import Github from "../icons/github.png"

const Login = () => {

    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self")
    }

    const github = () => {
        window.open("http://localhost:5000/auth/github", "_self")
    }

    return (
        <div className="login-container">
            <h1 className="login-title">Escolha um método de login</h1>
            <div className="wrapper">

                <div className="left">
                    <div className="login-button google" onClick={google}>
                        <img src={Google} alt="" className="icon" />
                        <span>Google</span>
                    </div>
                    <div className="login-button github" onClick={github}>
                        <img src={Github} alt="" className="icon" />
                        <span>Github</span>
                    </div>
                </div>

                <div className="center">
                    <div className="line"/>
                    <div className="or">Ou</div>
                </div>

                <div className="right">
                    <input type="text" placeholder="Digite seu nome" className="input" />
                    <input type="password" placeholder="Digite sua senha" className="input" />
                    <button className="submit">Login</button>
                </div>

            </div>
        </div>
    )
}

export default Login