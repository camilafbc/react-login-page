import { useNavigate } from "react-router-dom"
import Button from "./Button"

function ForgotPasswordForm(){

    const navigate = useNavigate()

    const handleHome = () => {
        navigate('/')
    }

    return (
        <form>
            <div className="column_form forgot_form">
                {/* <label htmlFor="email">E-mail:</label> */}
                <input type="email" name="email" id="email" placeholder="seuemail@email.com" />
            </div>
            <Button 
                btnText="ENVIAR"
                className="btn_full"
                onClick={(ev) => ev.preventDefault()}
            />
            <Button 
                btnText="VOLTAR"
                className="btn_clear"
                onClick={handleHome}
            />
        </form>
    )
}

export default ForgotPasswordForm