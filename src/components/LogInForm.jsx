import { Link, useNavigate } from "react-router-dom"
import Button from "./Button"

function LogInForm(){

    const navigate = useNavigate()

    const handleSignUp = () => {
        navigate('signUp')
    }


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
            <Button
                btnText="ENTRAR"
                className="btn_full"
                onClick={(ev) => ev.preventDefault()}
            />
            <Button 
                btnText="CRIAR NOVA CONTA"
                className="btn_clear"
                onClick={handleSignUp}
            />
        </form>

    )
}

export default LogInForm