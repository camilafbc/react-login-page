import { Link } from "react-router-dom"
import Button from "./Button"

function LogInForm(){
    return(

        <form>
            <div className="column_form">
                <label htmlFor="email">E-mail:</label>
                <input type="email" name="email" id="email" />
            </div>
            <div className="column_form">
                <label htmlFor="password">Senha:</label>
                <input type="password" name="password" id="password" />
            </div>
            <div className="row_form">
                <span>
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Manter conectado</label>
                </span>
                <Link to="forgotPassword">Esqueceu sua senha?</Link>
            </div>
            <button className="btn_full">ENTRAR</button>
            <Button 
                LinkTo="signUp"
                className="btn_clear"
                btnText="CRIAR NOVA CONTA"
            />
        </form>

    )
}

export default LogInForm